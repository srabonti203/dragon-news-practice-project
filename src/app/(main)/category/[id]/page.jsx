import LeftSideBar from "@/components/homepage/leftSidebar/LeftSideBar";
import RightSideBar from "@/components/homepage/rightSideBar/RightSideBar";
import { fetchCatagories, fetchNews } from "@/lib/data";

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const categories = await fetchCatagories();
  const newsCategories = categories.data.news_category;

  const allNews = await fetchNews(id);
  // console.log(allNews, "allnews");

  return (
    <div className="container mx-auto grid grid-cols-12 gap-3">
      {/* left sidebar */}
      <div className="col-span-3 flex flex-col items-center">
        <h2 className=" text-lg font-medium mb-3">All Categories</h2>
        <LeftSideBar
          newsCategories={newsCategories}
          activeId={id}
        ></LeftSideBar>
      </div>

      {/* middle section */}
      <div className="bg-amber-200 col-span-6">
        <h2 className="text-lg text-center font-medium">News by Category</h2>
        {allNews.length > 0 ? (
          allNews.map((news) => <div key={news._id}>{news.title}</div>)
        ) : (
          <h2 className="flex items-center justify-center p-8 mt-30 text-2xl font-bold">
            No News Found
          </h2>
        )}
      </div>

      {/* left sidebar */}
      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsDetails;
