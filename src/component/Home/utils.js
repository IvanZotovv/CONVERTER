export const filteringArray = val =>
  Object.values({ ...val }).map(i => {
    return { ...i, ...{ Difference: (i.Previous - i.Value).toFixed(3) } };
  });
