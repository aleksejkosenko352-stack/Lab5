function parseCurrency(value) {
  return parseFloat(value.replace('$', ''));
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function addCurrencies(v1, v2) {
  const sum = parseCurrency(v1) + parseCurrency(v2);
  return formatCurrency(sum);
}

module.exports = {
  parseCurrency,
  formatCurrency,
  addCurrencies
};
