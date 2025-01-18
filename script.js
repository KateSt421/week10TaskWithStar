function calculateTotalPrice(quantity = 2, price = 15000000) {
  const totalPrice = quantity * price;
  const formattedPrice = totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
  alert(`Стоимость покупки: ${formattedPrice}`);
}