import LeftSideBar from "@/components/homepage/leftSidebar/LeftSideBar";
import NewsCard from "@/components/homepage/middlePart/NewsCard";
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
      <div className="col-span-6">
        <h2 className="text-lg text-center font-medium">Dragon News Home</h2>

        {/* newsCard */}
        <div className="flex flex-col items-center justify-center gap-10">
          {allNews.length > 0 ? (
            allNews.map((news) => (
              <NewsCard key={news._id} news={news}></NewsCard>
            ))
          ) : (
            <h2 className="flex items-center justify-center p-8 mt-30 text-2xl font-bold">
              No News Found
            </h2>
          )}
        </div>
      </div>

      {/* left sidebar */}
      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsDetails;
