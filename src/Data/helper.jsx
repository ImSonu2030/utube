export const categoryIDs = {
  recommend: 0,
  gaming: 20,
  automobiles: 2,
  sports: 17,
  entertainment: 24,
  technology: 28,
  music: 10,
  blogs: 22,
  news: 25,
};

export const convertViewCount = (value) => {
  if (value >= 1e6) return Math.floor(value / 1e6) + "M";
  else if (value >= 1000) return Math.floor(value / 1000) + "K";
  else return value;
};
