const fetchCatagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};

export default async function Home() {
  const categories = await fetchCatagories();
  const newsCategories = categories.data.news_category;
  return (
    <div className="container mx-auto grid grid-cols-12 gap-3">
      <div className="col-span-3 flex flex-col items-center">
        <h2 className=" text-lg font-medium mb-3">All Categories</h2>
        <div className="flex flex-col items-center gap-2">
          {newsCategories.map((category) => {
            return (
              <ul key={category.category_id} className="w-full">
                <li className="bg-base-200 p-2 cursor-pointer w-full text-center rounded-md text-lg btn btn-soft">
                  {category.category_name}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="bg-amber-200 col-span-6">All News</div>
      <div className="bg-amber-200 col-span-3">Social Icons</div>
    </div>
  );
}
