export const fetchCatagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};
export const fetchNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};
export const fetchNewsDetail = async (_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${_id}`,
  );
  const data = await res.json();
  return data.data[0];
};
