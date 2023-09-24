const formatCurrency = (value: number, locale = "en-GB", currency = "GBP") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

export default formatCurrency;
