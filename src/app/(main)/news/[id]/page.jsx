import { fetchNewsDetail } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";




const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const detailedNews = await fetchNewsDetail(id);
  console.log(detailedNews);
  return ( 
    <div>
      <h2 className="text-lg font-medium mb-3">Dragon News</h2>
      <div className="shadow-sm rounded-md p-4">
        {/* News Image */}
        <div className="mt-4 overflow-hidden rounded-md">
          <Image
            width={300}
            height={300}
            src={detailedNews.image_url}
            alt="News"
            className="object-cover w-full"
          ></Image>
        </div>
        <h2 className="mt-4 text-[18px] font-bold leading-7 text-gray-700 mb-4">
          {detailedNews.title}
        </h2>
        <div>{detailedNews.details}</div>
        <Link href={`/category/${detailedNews.category_id}`}>
          <button className="btn mt-4 bg-purple-400 rounded-lg">
            <FaArrowLeft />
            All news in this category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
