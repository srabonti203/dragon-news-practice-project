import LeftSideBar from "@/components/homepage/leftSidebar/LeftSideBar";
import RightSideBar from "@/components/homepage/rightSideBar/RightSideBar";

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
        <LeftSideBar newsCategories={newsCategories}></LeftSideBar>
      </div>
      <div className="bg-amber-200 col-span-6">All News</div>
      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
