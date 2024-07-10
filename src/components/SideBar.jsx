import React, { useState } from "react";
import logo from "../assets/logo.png";
import products from "../assets/products.png";
import clock from "../assets/clock.png";
import bell from "../assets/bell.png";
import Flag from "../assets/Flag.png";
import group from '../assets/group.png'
import trend from '../assets/trend.png'
import Icon2 from '../assets/Icon2.png'
import Icon4 from '../assets/Icon4.png'
import Icon5 from '../assets/Icon5.png'
import watch from '../assets/watch.png'
import Revenue from '../assets/Revenue.png'
import heart from '../assets/heart.png'
import chat from '../assets/chat.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'
import icon10 from '../assets/icon10.png'
import icon11 from '../assets/icon11.png'
import icon12 from '../assets/icon12.png'
import icon13 from '../assets/icon13.png'
import icon14 from '../assets/icon14.png'
import icon15 from '../assets/icon15.png'
import icon16 from '../assets/icon16.png'
import search from '../assets/search.png'

import Card from './Card';
import profile from "../assets/profile.png";
import ProductButton from "./props";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="flex flex-row w-full">
        <div className=" flex flex-col w-2/12 ">
          <div className=" flex border-2 flex-col">
            <div className="flex my-4 justify-center items-center">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="text-white w-5/6 p-4 bg-[#4880FF] rounded-lg flex flex-row gap-3 items-center ">
                <img src={clock} alt="" srcset="" />
                <p className="">Dashboard</p>
              </button>
              <ProductButton imageSrc={products} productName="Products" />
              <ProductButton imageSrc={heart} productName="Products" />
              <ProductButton imageSrc={chat} productName="Products" />
              <ProductButton imageSrc={icon7} productName="Products" />
              <ProductButton imageSrc={icon7} productName="Products" />
            </div>
          </div>
          <div className="flex border-r-2 border-b-2 border-t-1 flex-col justify-center items-center ">
            <p className="text-[#202224] mt-4 flex ">PAGES</p>
            <ProductButton imageSrc={icon8} productName="Products" />
            <ProductButton imageSrc={icon9} productName="Products" />
            <ProductButton imageSrc={icon10} productName="Products" />
            <ProductButton imageSrc={icon11} productName="Products" />
            <ProductButton imageSrc={icon12} productName="Products" />
            <ProductButton imageSrc={icon13} productName="Products" />
            <ProductButton imageSrc={icon14} productName="Products" />
            <ProductButton imageSrc={icon15} productName="Products" />
          </div>

          <div className="flex border-r-2 border-b-2 border-t-1 flex-col pb-[5%] justify-center items-center ">
            <ProductButton imageSrc={icon16} productName="Products" />
            <ProductButton imageSrc={icon16} productName="Products" />
          </div>
        </div>
        <div className="flex flex-col w-screen">
          <div className="border-2 h-16 flex flex-row py-2 px-[5%] items-center justify-between ">
            <div className="flex flex-row gap-5 justify-between">
              <button className=" text-black" onClick={toggleSidebar}>
                {isOpen ? <FaTimes size="24" /> : <FaBars size="24" />}
              </button>
              <div className="w-80 border-2 rounded-full h-fit flex flex-row px-4 py-1 items-center bg">
                <img src={search} alt="" srcset="" />
                <p>Search</p>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-5 items-center ">
              <img src={bell} className=" size-8" alt="" srcset="" />
              <img src={Flag} className=" size-8" alt="" srcset="" />
              <select id="countries" class="">
                <option selected className="text-[#000000] text-2xl">
                  English
                </option>
              </select>
              <div className="flex flex-row items-center">
                <img src={profile} className=" size-8" alt="" srcset="" />
                <div className="flex flex-col">
                  <p>Moni Roy</p>
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F1F4F9] ">
          <p className="text-3xl font-semibold py-4 mx-[5%]">Dashboard</p>

        <div className="mx-[5%] mt-[3%] flex flex-row justify-between">
          <Card 
        title="Total User" 
        value="40,689" 
        trendImg={trend} 
        trendText="8.5% Up from yesterday" 
        mainImg={group} 
      />
        <Card 
        title="Total Order" 
        value="10293" 
        trendImg={trend} 
        trendText="1.3% Up from past week" 
        mainImg={Icon2} 
      />
        <Card 
        title="Total Sales" 
        value="$89,000" 
        trendImg={trend} 
        trendText="4.3% Down from yesterday" 
        mainImg={Icon4} 
      />
        <Card 
        title="Total Pending" 
        value="2040" 
        trendImg={trend} 
        trendText="1.8% Up from yesterday" 
        mainImg={Icon5} 
      />
      </div>
      <div>
      <img src={Revenue} alt="" srcset="" />
      </div>

      <div className="mx-[3%] border-2 bg-white py-5 px-5 rounded-lg ">
        <p className="py-5 text-3xl font-bold">Deals Details</p>
        <div className="grid grid-cols-6  border-2 rounded-lg bg-[#F1F4F9] h-10 items-center px-3 ">
          <div  className="flex justify-center items-center">Product Name</div>
          <div  className="flex justify-center items-center">Location</div>
          <div  className="flex justify-center items-center">Date - Time</div>
          <div  className="flex justify-center items-center">Piece</div>
          <div  className="flex justify-center items-center">Amount</div>
          <div  className="flex justify-center items-center">Status</div>
         

        </div>
       
        <div className="grid grid-cols-6 my-3 text-sm ">
        <div className="flex flex-row items-center justify-center">
          <img src={watch} alt="" srcset="" />
          <div>Apple Watch</div>
          </div>        
          <div className="flex justify-center items-center">6096 Marjolaine Landing</div>
          <div className=" flex justify-center  items-center">12.09.2019 - 12.53 PM</div>
          <div className=" flex justify-center  items-center">423</div>
          <div className=" flex justify-center  items-center">$34,295</div>
          <button className=" border-2 rounded-full items-center justify-center w-4/6 bg-[#00B69B] text-white">
            Delivered
          </button>
          </div>

        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

