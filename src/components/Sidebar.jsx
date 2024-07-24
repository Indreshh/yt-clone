import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SiYoutubemusic } from "react-icons/si";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiLightbulbLight } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
//import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { useUtils } from '../context/UtilsContext';

const Sidebar = () => {
   const { isSidebar, mobileShow, setMobileShow }=useUtils();
    const sidebarItems=[
        {
            groupName:"Home",
            groupItems:[
                {
                    id:1,
                    name:"Home",
                    icon:<GoHome/>
                },
        
                {
                    id:2,
                    name:"Shorts",
                    icon:< SiYoutubeshorts/>
                },
        
                {
                    id:3,
                    name:"Subscription",
                    icon:<MdOutlineSubscriptions/>
                },
            ],
        
        },
        {
            groupName:"You",
            groupItems:[
                {
                    id:1,
                    name:"your Channel",
                    icon:<GrChannel />
                },
        
                {
                    id:2,
                    name:"History",
                    icon:<FaHistory />
                },
        
                {
                    id:3,
                    name:"Playlists",
                    icon:<MdOutlinePlaylistPlay />
                },
                {
                    id:4,
                    name:"your Videos",
                    icon:<BiVideo />
                },
        
                {
                    id:5,
                    name:"watch later",
                    icon:<MdWatchLater />
                },
        
                {
                    id:6,
                    name:"Liked videos",
                    icon:<GiLinkedRings />
                },
            ],
        
        },
        {
            groupName:"Expore",
            groupItems: [
                {
                    id:1,
                    name:"Trending",
                    icon:<FaFireAlt />
                },
        
                {
                    id:2,
                    name:"Shopping",
                    icon:<HiOutlineShoppingCart />
                },
        
                {
                    id:3,
                    name:"Music",
                    icon:<SiYoutubemusic />
                },
                {
                    id:4,
                    name:"Films",
                    icon:<PiFilmSlateLight />
                },
        
                {
                    id:5,
                    name:"Live",
                    icon:<CgMediaLive />
                },
        
                {
                    id:6,
                    name:"Gaming",
                    icon:<IoGameControllerOutline />
                },
                {
                    id:7,
                    name:"News",
                    icon:<FaRegNewspaper />
                },
                {
                    id:8,
                    name:"Sport",
                    icon:<TfiCup />
                },
                {
                    id:9,
                    name:"Courses",
                    icon:<SiStylelint />
                },
                {
                    id:10,
                    name:"Fashon & beauty",
                    icon:<PiLightbulbLight />
                },
                {
                    id:11,
                    name:"padcasts",
                    icon:<MdPodcasts />
                },
            ],
        },
        {
            groupName:"More from Youtube",
            groupItems:   [
                {
                    id:1,
                    name:"Youtube Premium",
                    icon:<FaYoutube />
                },
        
                {
                    id:2,
                    name:"Toutube Studio",
                    icon:<SiYoutubestudio />
                },
        
                {
                    id:3,
                    name:"Youtube Music",
                    icon:<SiYoutubemusic />
                },
                {
                    id:4,
                    name:"Youtube Kids",
                    icon:<SiYoutubekids />
                },
            ],
        },
        {
            groupName:"Settings",
            groupItems: [
                {
                    id:1,
                    name:"Settings",
                    icon:<IoSettings />
                },
        
                {
                    id:2,
                    name:"Report history",
                    icon:<FaFlag />
                },
        
                {
                    id:3,
                    name:"Help",
                    icon:<IoMdHelpCircleOutline />
                },
                {
                    id:4,
                    name:"send feedback",
                    icon:<MdFeedback />
                },
            ],
        
        },
    ];

    const Modeloverlay =()=>{
        return(
            <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black?50 z-30 '
            onClick={()=>setMobileShow(!mobileShow)}>

            </div>
        )
    }
  return (
    <>
     <div className={`${mobileShow 
        ? " fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[50%] sm:w-[30%]"
         :"hidden h-[calc (100vh-6.625rem)] w-[20%]"
         } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
     {/*home*/}
      <div className=' space-y-3  items-center'> 
            {sidebarItems.map((group)=>{
    return (
        <div className='mb-5'>
           <h1 className='font-bold'>{group.groupName}</h1> 
           {group.groupItems.map((item)=> (
                <div 
        key={item.id} 
        className=' flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1 my-2'
        >
        <div className='text-xl cursor-pointer'>{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
            ))}         
        </div>
    );
})} 
         </div>
         <br/>
         <hr/>


 
<span className='text-xs  font-semibold text-gray-500 space-y-3'>About Press Copyright<br/>Contact  usCreator<br/> Advertise Developers<br/>
<p>
Terms Privacy Policy & Safety <br/>How YouTube works <br/>Test new features</p></span>

<br/>
<p className='text-xs text-gray-800 '>©2024 Google LLC</p>

    </div>

   {mobileShow ? <Modeloverlay/>:null} 
    </>
   
  )
}

export default Sidebar
