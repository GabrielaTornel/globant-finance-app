export const listAmounts = (amounts) => {
  data: amounts.data
    .map((item) => amountsAdapter(item))
};
