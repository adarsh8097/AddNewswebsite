import Advertisement from "@/components/Advertisement";
import RightSideContent from "@/components/RightSideContent";
import { useRouter } from "next/router";
import { IoIosLink } from "react-icons/io";
import { FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
const PostDetailsContent = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the id from the URL
  console.log("Fetched ID from URL:", id);

  return (
//     <div className="container mx-auto mt-2 px-4 md:px-8 overflow-y-auto  overflow-x-hidden">
//       {/* <h1 className="text-3xl font-bold mb-6">Post Details Module</h1> */}

//       {/* Advertisement Section */}
//       <Advertisement />

//       {/* Main Post Content */}
//       <div className="flex flex-col md:flex-row gap-6">
        
//         {/* Main Post Card */}
//         <div className="w-full md:w-2/3 bg-white  rounded-lg p-6">
//           {/* <h2 className="text-xl font-semibold mb-4">San Francisco quarterback Brock Purdy played efficiently</h2> */}
//           <p className="text-gray-800 mb-4 font-black text-xl">
//             San Francisco quarterback Brock Purdy played efficiently, adding 231 yards through the air,
//             and Jake Moody hit all six of his field goal attempts.
//           </p>
//           <div className="mb-4">
//             <img
//               src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/w88mimpybdzpagbxf0ek"
//               alt="Post Image"
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
          
//           {/* Follow Button & Social Media Links */}
//            <div className=" flex justify-between">
//           <div className="flex  items-center space-x-2">
//             <button className="bg-blue-500 py-1 px-4 rounded text-white hover:bg-blue-600">+ Follow</button>
//             <div className="flex space-x-3 text-xl text-gray-600">
//               <IoIosLink className="hover:text-blue-600 cursor-pointer" />
//               <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
//               <FaFacebookSquare className="hover:text-blue-800 cursor-pointer" />
//               <CiLinkedin className="hover:text-blue-700 cursor-pointer" />
//             </div>
//           </div>

//           {/* Views Section */}
//           <div className="flex items-center -mt-2 text-gray-600   ">
//             <IoEyeOutline className="text-xl mr-2" />
//             <span>1k Views</span>
//           </div>
//           </div>
//         </div>

         

//         {/* Right Side Content */}
//         <div className="w-full md:w-1/3">
//           <RightSideContent />
//         </div>
//       </div>
  

// <div className="p-4 w-[80%]">
//   <p className="text-xl font-bold mb-4">Articles</p>

//   <div className="grid grid-rows-1 gap-6">
//     {/* Card 1 */} 
//     <div className="bg-white rounded-lg shadow-md px-4 flex flex-row space-x-8 ">
      
//       <div className="mb-4 relative">
//         <img 
//           src="https://cdn.dribbble.com/userupload/15061191/file/original-10dce9c18b784f7c3ff00daddf57ad44.png?resize=400x0" 
//           alt="card-img" 
//           className="w-full h-48 object-cover rounded-lg"
//         />
//       </div>
     
      
//       <div>
//       <div className="flex justify-between items-center mb-4 text-gray-500">
//         <p className="text-sm">10 min ago</p>
//         <p className="text-sm">Channel Name</p>
//       </div>
//         <h1 className="text-xl font-bold mb-2">Headline 1</h1>
//         <p className="text-gray-700 mb-4">
//           Trump warned he will jail election officials he considers cheats; is 
//           complaining Pennsylvania’s voting is a fraud; vowed to pardon January 
//           6 rioters...
//         </p>
//       </div>
//     </div>

//     {/* Card 2 */}
//     <div className="bg-white rounded-lg shadow-md px-4 flex flex-row space-x-8">
//       <div className="mb-4 relative">
//         <img 
//           src="https://i.pinimg.com/736x/9c/71/da/9c71da63657845ea5a41bde48dff2c3f.jpg" 
//           alt="card-img" 
//           className="w-full h-48 object-cover rounded-lg"
//         />
//       </div>
      
//       <div >
//       <div className="flex justify-between items-center mb-4 text-gray-500">
//         <p className="text-sm">20 min ago</p>
//         <p className="text-sm">Channel Name</p>
//       </div>
//         <h1 className="text-xl font-bold mb-2">Headline 2</h1>
//         <p className="text-gray-700 mb-4">
//           Trump warned he will jail election officials he considers cheats; is 
//           complaining Pennsylvania’s voting is a fraud; vowed to pardon January 
//           6 rioters...
//         </p>
//       </div>
//     </div>
//   </div>
// </div>



//     </div>
<div className="container mx-auto mt-2 px-4 md:px-8 overflow-hidden scrollbar-none">
  {/* Advertisement Section */}
  <Advertisement />

  {/* Main Post Content */}
  <div className="flex flex-col md:flex-row gap-6 min-h-[80vh]">
    
    {/* Main Post Card (with scroll) */}
    <div className="w-full md:w-[100%] bg-white rounded-lg p-6 overflow-y-auto h-full max-h-[80vh] overflow-x-hidden ">
      <p className="text-gray-700 mb-4 font-black text-lg ">
        San Francisco quarterback Brock Purdy played efficiently, adding 231 yards through the air,
        and Jake Moody hit all six of his field goal attempts.
      </p>
      <div className="mb-4">
        <img
          src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/w88mimpybdzpagbxf0ek"
          alt="Post Image"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Follow Button & Social Media Links */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 py-1 px-4 rounded text-white hover:bg-blue-600">+ Follow</button>
          <div className="flex space-x-3 text-xl text-gray-600">
            <IoIosLink className="hover:text-blue-600 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            <FaFacebookSquare className="hover:text-blue-800 cursor-pointer" />
            <CiLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Views Section */}
        <div className="flex items-center -mt-2 text-gray-600">
          <IoEyeOutline className="text-xl mr-2" />
          <span>1k Views</span>
        </div>
      </div>
          <div className=" -mx-3 my-3   md:px-8 w-[100%]">
  {/* Card Layout */}
  <div className="bg-white rounded-lg overflow-hidden ">
    
    {/* Card Header */}
    <div className="-px-6 py-4 flex justify-between">
      <h2 className="text-2xl font-black text-gray-800">Breaking Head Line</h2>
      <h6 className="text-gray-600 text-sm">10 min ago</h6>
    </div>
    
    {/* Card Body */}
    <div className="px-0 py-4 text-gray-700 space-y-4 text-justify">
      {/* Main Content */}
      <p className="">
        Trump warned he will jail election officials he considers cheats; is complaining Pennsylvania’s voting is a fraud;
        vowed to pardon January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent 
        days on sometimes incoherent rants that raised questions about his state of mind. But new polling ahead of Tuesday’s showdown 
        in Philadelphia shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the 
        ticket hasn’t resulted in a commanding edge.
      </p>
      <p>
        Trump warned he will jail election officials he considers cheats; is complaining Pennsylvania’s voting is a fraud;
        vowed to pardon January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent 
        days on sometimes incoherent rants that raised questions about his state of mind. But new polling ahead of Tuesday’s showdown 
        in Philadelphia shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the 
        ticket hasn’t resulted in a commanding edge.
      </p>
    </div>
    
    {/* Image Section */}
    <div className="relative w-full h-72">
  {/* Overlay Text */}
      <div className="absolute top-0 left-0  text-white text-sm font-semibold px-6 py-3 rounded-tl-lg">
        Advertisement
      </div>

      {/* Image */}
      <img 
        src="https://media.istockphoto.com/id/1208969196/vector/perfume-glass-bottle-on-blue-silk-folded-fabric.jpg?s=612x612&w=0&k=20&c=9Vlp1DC_yFggKmudcxUVpXmjfN3OS7FS9_9qyAUci_Q=" 
        alt="advertisement/link" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    
    {/* Second Content Section */}
    <div className="px-0 py-4 text-gray-700 space-y-4 text-justify">
      <p>
        Trump warned he will jail election officials he considers cheats; is complaining Pennsylvania’s voting is a fraud;
        vowed to pardon January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent 
        days on sometimes incoherent rants that raised questions about his state of mind. But new polling ahead of Tuesday’s showdown 
        in Philadelphia shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the 
        ticket hasn’t resulted in a commanding edge.
      </p>
      <p>
        Trump warned he will jail election officials he considers cheats; is complaining Pennsylvania’s voting is a fraud;
        vowed to pardon January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent 
        days on sometimes incoherent rants that raised questions about his state of mind. But new polling ahead of Tuesday’s showdown 
        in Philadelphia shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the 
        ticket hasn’t resulted in a commanding edge.
      </p>
    </div>
  </div>
  {/* <div className=' bg-green-100 lg:w-[100%] xl:w[100%] py-7 px-6 mx-0 md:w-[100%]'>
        <div className='flex justify-between mb-4'>
        <p className=' text-sm font-bold text-gray-500'>Related News</p>
        <p className='font-bold text-gray-800'>
          <Link href="#" className='flex space-x-4'>View All <IoIosArrowForward className='mt-1 font-bold'/> </Link></p>
        </div>
       <div className='flex'>
      <div className='grid w-96'>
            <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1 w-24 h-12 text-md text-gray-600 mb-4'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
      </div>
      <div className='grid w-96'>
          <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1 w-24 h-12 text-md text-gray-600 mb-4'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
     </div>
      <div className='flex flex-col w-96 md:hidden lg:block xl:block 2xl:block lg:flex lg:flex-row'>
      <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1 w-24 h-12 text-md text-gray-600 mb-4'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
       </div>
       </div>
     </div> */}
     <div className='bg-green-100 lg:w-[100%] xl:w-[100%] py-7 px-6 mx-0 md:w-[100%]'>
  <div className='flex justify-between mb-4'>
    <p className='text-sm font-bold text-gray-500'>Related News</p>
    <p className='font-bold text-gray-800'>
      <Link href="#" className='flex space-x-4'>View All <IoIosArrowForward className='mt-1 font-bold'/> </Link>
    </p>
  </div>

  <div className='flex'>
    <div className='relative w-96'>
      {/* <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" src="video-source.mp4" muted autoPlay loop /> */}
      
      <div className='grid relative'>
        <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
        <p className='w-24 py-1 w-auto  text-md text-gray-600 '>Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
      </div>
    </div>

    <div className='relative w-96'>
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" src="video-source.mp4" muted autoPlay loop />
      <div className='grid relative'>
        <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
        <p className='w-auto py-1 w-24 h-12 text-md text-gray-600 '>Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
      </div>
    </div>

    <div className='relative w-96 hidden md:hidden lg:block xl:block 2xl:block lg:flex lg:flex-row'>
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" src="video-source.mp4" muted autoPlay loop />
      <div className='grid relative'>
        <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
        <p className='w-auto py-1 w-24 h-12 text-md text-gray-600 mb-4'>Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
      </div>
    </div>
  </div>
</div>

</div>
<div className="p-4 w-[100%]">
    <p className="text-xl font-bold mb-4">Articles</p>
    <div className="grid grid-rows-1 gap-6">
      
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md px-4 flex flex-row space-x-8">
        <div className="mb-4 relative">
          <img 
            src="https://cdn.dribbble.com/userupload/15061191/file/original-10dce9c18b784f7c3ff00daddf57ad44.png?resize=400x0" 
            alt="card-img" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <p className="text-sm">10 min ago</p>
            <p className="text-sm flex space-x-4 ">
              <IoIosLink className="text-2xl"/>
              <MdOutlineArrowOutward className="text-2xl"/>
            </p>
          </div>
          <h1 className="text-xl font-bold mb-2">Headline 1</h1>
          <p className="text-gray-700 mb-4">
            Trump warned he will jail election officials he considers cheats; is 
            complaining Pennsylvania’s voting is a fraud; vowed to pardon January 
            6 rioters...
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md px-4 flex flex-row space-x-8">
        <div className="mb-4 relative">
          <img 
            src="https://i.pinimg.com/736x/9c/71/da/9c71da63657845ea5a41bde48dff2c3f.jpg" 
            alt="card-img" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <p className="text-sm">20 min ago</p>
            <p className="text-sm flex space-x-4 ">
              <IoIosLink className="text-2xl"/>
              <MdOutlineArrowOutward className="text-2xl"/>
            </p>
          </div>
          <h1 className="text-xl font-bold mb-2">Headline 2</h1>
          <p className="text-gray-700 mb-4">
            Trump warned he will jail election officials he considers cheats; is 
            complaining Pennsylvania’s voting is a fraud; vowed to pardon January 
            6 rioters...
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>

    {/* Right Side Content */}
    <div className="w-full md:w-1/3 h-full">
      <RightSideContent />
    </div>
  </div>

  {/* Article Cards Below the Post Details */}
  <div className="p-4 w-[70%]">
    <p className="text-xl font-bold mb-4">Product</p>
    <div className="grid grid-rows-1 gap-6">
      
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md px-4 flex flex-row space-x-8">
        <div className="mb-4 relative">
          <img 
            src="https://cdn.dribbble.com/userupload/15061191/file/original-10dce9c18b784f7c3ff00daddf57ad44.png?resize=400x0" 
            alt="card-img" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <p className="text-sm">10 min ago</p>
            <p className="text-sm flex space-x-4 ">
              <IoIosLink className="text-2xl"/>
              <MdOutlineArrowOutward className="text-2xl"/>
            </p>
          </div>
          <h1 className="text-xl font-bold mb-2">Headline 1</h1>
          <p className="text-gray-700 mb-4">
            Trump warned he will jail election officials he considers cheats; is 
            complaining Pennsylvania’s voting is a fraud; vowed to pardon January 
            6 rioters...
          </p>
        </div>
      </div>

      {/* Card 2 */}
      {/* <div className="bg-white rounded-lg shadow-md px-4 flex flex-row space-x-8">
        <div className="mb-4 relative">
          <img 
            src="https://i.pinimg.com/736x/9c/71/da/9c71da63657845ea5a41bde48dff2c3f.jpg" 
            alt="card-img" 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4 text-gray-500">
            <p className="text-sm">20 min ago</p>
            <p className="text-sm">Channel Name</p>
          </div>
          <h1 className="text-xl font-bold mb-2">Headline 2</h1>
          <p className="text-gray-700 mb-4">
            Trump warned he will jail election officials he considers cheats; is 
            complaining Pennsylvania’s voting is a fraud; vowed to pardon January 
            6 rioters...
          </p>
        </div>
      </div> */}
    </div>
    <div className="text-right  px-2 py-2 ">
    <button className=" my-2 text-blue-500 cursor-pointer ">Load More</button>

    </div>

   </div>
 
</div>

  );
};

export default PostDetailsContent;
