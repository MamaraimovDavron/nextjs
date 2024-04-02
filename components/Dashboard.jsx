"use client";
import React from "react";
import "./style.css";
import img1 from "../imgs/setting.png";
import img2 from "../imgs/grid (1) 1.png";
import img3 from "../imgs/command 1.png";
import img4 from "../imgs/users (2) 1.png";
import img5 from "../imgs/briefcase 1.png";
import img6 from "../imgs/phone 1.png";
import img7 from "../imgs/folder 1.png";
import img8 from "../imgs/settings (1) 1.png";
import img9 from "../imgs/Illustration.png";
import Image from "next/image";
import { useState } from "react";

const data = [
  "Dashboard",
  "Teams",
  "Employees",
  "Projects",
  "Meetings",
  "Tasks",
  "Settings",
];

const imgs = [img2, img3, img4, img5, img6, img7, img8];

export const Dashboard = () => {
  const [state, setState] = useState(true);

  return (
    <div
      className={`${state ? "dashboard" : "hide"}`}
      onClick={() => {
        setState(!state);
      }}
    >
      <div className="teamify">
        <Image src={img1} className="img1" />
        <p className="text">Teamify</p>
      </div>

      <ul>
        {data.map((item, index) => {
          return (
            <li>
              <Image src={imgs[index]} />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>

      <Image src={img9} className="img9" />
    </div>
  );
};
