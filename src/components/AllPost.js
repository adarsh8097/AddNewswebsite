import React, { useState } from 'react';
import { FaRegCommentDots } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuArrowUpDown } from "react-icons/lu";
import { GrFilter } from "react-icons/gr";

// Example data in JSON format
const tableData = [
  {
    title: "Political Reform in 2023",
    author: "John Doe",
    categories: "Politics",
    tags: "Reform, Legislation",
    date: "Monday, 1st April 2023",
    comments: "15"
  },
  {
    title: "Global Trade Policies Shift",
    author: "Jane Smith",
    categories: "Politics",
    tags: "Trade, Economy",
    date: "Tuesday, 2nd April 2023",
    comments: "8"
  },
  {
    title: "New Immigration Laws",
    author: "Alice Johnson",
    categories: "Politics",
    tags: "Immigration, Law",
    date: "Wednesday, 3rd April 2023",
    comments: "5"
  },
  {
    title: "Election Reform Debates",
    author: "Bob Williams",
    categories: "Politics",
    tags: "Elections, Policy",
    date: "Thursday, 4th April 2023",
    comments: "20"
  },
  {
    title: "Climate Policy Adjustments",
    author: "Emily Davis",
    categories: "Politics",
    tags: "Climate, Government",
    date: "Friday, 5th April 2023",
    comments: "10"
  },
  {
    title: "Economic Sanctions and Responses",
    author: "Michael Lee",
    categories: "Politics",
    tags: "Sanctions, Trade",
    date: "Saturday, 6th April 2023",
    comments: "12"
  },
  {
    title: "Healthcare Legislation Update",
    author: "Chris Johnson",
    categories: "Politics",
    tags: "Healthcare, Law",
    date: "Sunday, 7th April 2023",
    comments: "6"
  },
  {
    title: "Tax Reform Proposals",
    author: "Laura Martinez",
    categories: "Politics",
    tags: "Taxes, Economy",
    date: "Monday, 8th April 2023",
    comments: "22"
  },
  {
    title: "Foreign Relations Review",
    author: "David Brown",
    categories: "Politics",
    tags: "Foreign Policy, Diplomacy",
    date: "Tuesday, 9th April 2023",
    comments: "18"
  },
  {
    title: "Education Policy Shifts",
    author: "Sara White",
    categories: "Politics",
    tags: "Education, Policy",
    date: "Wednesday, 10th April 2023",
    comments: "25"
  }
];

const AllPost = () => {
  const tableHeader = ["Title", "Author", "Categories", "Tags", "Date", "Comments"];
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;  // Set how many rows you want per page
  
  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Change page handlerss
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 mx-[14rem] w-[85%]">
     
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th><input type="checkbox"/></th>
              {tableHeader.map((header, index) => (
              <th key={index} className="py-3 px-6 text-left font-medium text-gray-700">
                  <>
                  {header}
                  <p className="flex space-x-2"><LuArrowUpDown/><GrFilter/></p>
                  </>
                </th>
               ))}
              
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr
                key={index}
                className={`border-t border-gray-300 ${index % 2 !== 0 ? 'bg-gray-100' : ''}`}
              >
                <td className="px-5"><input type="checkbox" className="px-2"/></td>
                <td className="py-3 px-6">{row.title}</td>
                <td className="py-3 px-6">{row.author}</td>
                <td className="py-3 px-6">{row.categories}</td>
                <td className="py-3 px-6">{row.tags}</td>
                <td className="py-3 px-6">{row.date}</td>
                <td className="py-3 px-6 flex space-x-12"><FaRegCommentDots className="text-yellow-500 cursor-pointer"/><BsThreeDotsVertical className="cursor-pointer"/></td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            
      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-4 border py-2">
          
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
