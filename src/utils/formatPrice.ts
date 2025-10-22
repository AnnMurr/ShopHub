export const formatPrice = (
  price: number,
  currency: string = 'USD',
  locale: string = 'en-US',
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(price);
};
