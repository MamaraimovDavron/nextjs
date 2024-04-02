import React from "react";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import img from "../imgs/right imgs/unsplash_NohB3FJSY90.png";
import Image from "next/image";

const data1 = [
  {
    top: "Top 10",
    middle: "Position in Dribble",
    footer: "20% Increase from Last Week",
  },

  {
    top: "26",
    middle: "New employees onboarded",
    footer: "15% Increase from Last Month",
  },

  {
    top: "500",
    middle: "New Clients Approached",
    footer: "5% Increase from Last Week",
  },
];

export const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="top">
        <CiSearch className="icon" />
        <CiBellOn className="icon" />
        <Image src={img} className="avatar" />
        <IoIosArrowDown id="icon" />
      </div>

      <div className="middle">
        {data1.map((item, index) => {
          return (
            <div className="box" key={index}>
              <h3>{item.top}</h3>
              <h4>{item.middle}</h4>
              <h5>{item.footer}</h5>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="top">
          <h3>Notifications</h3>
          <p>View All</p>
        </div>
        <div className="box">
          <Image />
          <span>
            <h4>Ellie joined team developers</h4>
            <h5>04 April, 2021 | 04:00 PM</h5>
          </span>
        </div>
      </div>
    </div>
  );
};
