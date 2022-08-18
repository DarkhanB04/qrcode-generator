const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const container = document.querySelector(".container");
qrInput = container.querySelector(".form input");
qrImg = container.querySelector(".qr-code img");
generateBtn = container.querySelector(".form button");
hideBtn = document.querySelector(".hide");
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // If the value is empty it will be returned from this line of code
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    container.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});
qrInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    generateBtn.click();
  }
});
hideBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
