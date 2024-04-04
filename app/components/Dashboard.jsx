"use client";
import React from "react";
import "./style.css";
import img1 from "../../imgs/setting.png";
import img9 from "../../imgs/Illustration.png";
import Image from "next/image";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { PiProjectorScreenFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Data = [
  { icon: <MdDashboard className="icon" />, text: "Dashboard", path: "/" },
  {
    icon: <BsMicrosoftTeams className="icon" />,
    text: "Teams",
    path: "/teams",
  },
  { icon: <TbUsers className="icon" />, text: "Employees", path: "/employees" },
  {
    icon: <PiProjectorScreenFill className="icon" />,
    text: "Projects",
    path: "/projects",
  },
  { icon: <FaPhone className="icon" />, text: "Meetings", path: "/meetings" },
  { icon: <FaFolder className="icon" />, text: "Tasks", path: "/tasks" },
  {
    icon: <IoSettings className="icon" />,
    text: "Settings",
    path: "/settings",
  },
];

export const Dashboard = () => {
  const [state, setState] = useState(true);

  return (
    <div className={`${state ? "dashboard" : "hide"}`}>
      <div className="teamify">
        <Image src={img1} className="img1" />
        <p className="text">Teamify</p>
      </div>

      <div className="arrow">
        {state ? (
          <IoIosArrowForward
            className="arrowIcon"
            onClick={() => {
              setState(!state);
            }}
          />
        ) : (
          <IoIosArrowBack
            className="arrowIcon"
            onClick={() => {
              setState(!state);
            }}
          />
        )}
      </div>

      <ul>
        {Data.map((item, index) => {
          return (
            <li key={index} className={index == 0 ? "myActive" : ""}>
              <Link href={item.path} className="link">
                {item.icon}
                <p>{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <Image src={img9} className="img9" />
    </div>
  );
};
