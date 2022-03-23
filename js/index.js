const wrapper = document.querySelector(".wrapper"),
qrInput =  wrapper.querySelector(".form input"),
generateBt =  wrapper.querySelector(".form button"),
qrImg =  wrapper.querySelector(".qr-code img");

generateBt.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBt.innerText = "Generate QR code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBt.innerText = "Generate QR code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active")
    }
});