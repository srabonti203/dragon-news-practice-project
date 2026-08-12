import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="w-full bg-white p-4 shadow-sm container mx-auto">
      {/* Author Section */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <div className="flex items-center gap-3">
          <Image
            width={40}
            height={40}
            src={news.author.img}
            alt="thumnail"
            className="rounded-full object-cover"
          ></Image>

          <div>
            <h3 className="text-sm font-bold text-gray-700">
              {news.author.name}
            </h3>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>

        {/* Bookmark + Share */}
        <div className="flex items-center gap-4 text-gray-500">
          <FaRegBookmark className="cursor-pointer text-lg hover:text-gray-800" />
          <FaShareAlt className="cursor-pointer text-lg hover:text-gray-800" />
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-[18px] font-bold leading-7 text-gray-700">
        {news.title}
      </h2>

      {/* News Image */}
      <div className="mt-4 overflow-hidden rounded-md">
        <Image
          width={300}
          height={300}
          src={news.image_url}
          alt="News"
          className="object-cover w-full"
        ></Image>
      </div>

      {/* Description */}
      <div className="mt-5">
        <p className="text-sm leading-6 text-gray-500 line-clamp-4">
          {news.details}
        </p>

        <Link href={`/news/${news._id}`}>
          <button className="mt-1 text-sm font-semibold text-orange-500 hover:underline">
            Read More
          </button>
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <FaStar className="text-[16px] text-orange-400" />

          <span className="ml-2 text-sm text-gray-500">
            {news.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye className="text-lg" />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
