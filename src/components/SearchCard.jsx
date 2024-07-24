import React from 'react'
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchCard = ({video}) => {
    console.log(video);
  return (
    <div>
         <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row mb-8 md:mb-3 md:p-4">
          <div className="  relative flex h-48 w-full md:w-80">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={video?.thumbnails[0]?.url}  
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
        
          <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden ">
            <div className="flex">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )}views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?. publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchCard