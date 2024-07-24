import React from "react";

const ListItems = () => {
  const categories = [
    "All",
    "Music",
    "React router",
    "computer programing",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "India soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4  scrollbar-none">
      <div className=" flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className=" mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2  font-medium  text-gray-700 cursor-pointer "
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItems;