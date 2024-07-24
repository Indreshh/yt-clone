import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Sidebar from "./Sidebar";
import SearchCard from "./SearchCard";
const Search = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`).then(({contents}) => {
      setResult(contents);
    });
  };
  
  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[cal(100%-56px)]">
        <Sidebar/>
        <div className=" grow h-[calc(100vh-6.25rem) overflow-y-scroll overflow-x-hidden]">
          <div className="grid grid-flow-col-1 gap-2 p-2">
            {result?.map((item, index) => {
              if (item?.type !== "video") return false;

              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
