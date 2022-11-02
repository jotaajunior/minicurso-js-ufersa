export const formatPercentage = (value) => {
  return Math.round(value).toFixed(2) + '%';
}

export const shouldPercentageOrZero = (votes) => {
  return Number.isNaN(votes) ? formatPercentage(0) : formatPercentage(votes);
}