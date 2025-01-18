const quantity = 2;
const price = 15000000;
const button = document.getElementById("calculate");
const resultElement = document.getElementById("result");

button.onclick = () => {
  const totalAmount = quantity * price;
  resultElement.textContent = `Стоимость покупки: ${totalAmount.toLocaleString(
    "ru-RU",
    { style: "currency", currency: "RUB" }
    )}`;
};