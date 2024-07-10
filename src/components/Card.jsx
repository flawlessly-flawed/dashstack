import React from 'react'

const Card = ({ title, value, trendImg, trendText, mainImg }) => {
    return (
      <div className="flex flex-row border-2 w-fit p-3 rounded-lg bg-white">
        <div className="flex flex-col justify-between gap-5">
          <p>{title}</p>
          <p>{value}</p>
          <div className="flex flex-row items-center">
            <img src={trendImg} alt="Trend Icon" className="mr-2" />
            <p>{trendText}</p>
          </div>
        </div>
        <img src={mainImg} className="size-6 my-3" alt="Main Icon" />
      </div>
    );
  };
export default Card