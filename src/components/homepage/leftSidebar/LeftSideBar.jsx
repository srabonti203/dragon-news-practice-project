import Link from "next/link";
import React from "react";

const LeftSideBar = ({ newsCategories }) => {
  console.log(newsCategories);
  return (
    <div className="flex flex-col items-center gap-2">
      {newsCategories.map((category) => {
        return (
          <ul
            key={category.category_id}
            className="w-full text-center container"
          >
            <Link
              href={`category/${category.category_id}`}
              className="p-2 cursor-pointer w-full  rounded-md text-lg container block"
            >
              {category.category_name}
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
