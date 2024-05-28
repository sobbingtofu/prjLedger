const CURRENT_DATE = new Date();
export const SLICED_CURRENT_DATE = `${CURRENT_DATE.toLocaleString().slice(
  0,
  4
)} - ${CURRENT_DATE.toLocaleString().slice(6, 7)} - ${CURRENT_DATE.toLocaleString().slice(9, 11)}`;
