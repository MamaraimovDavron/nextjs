"use client";

import Image from "next/image";
import React from "react";
import "./style.css";
import img1 from "../../imgs/header-img/Employees.png";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { useState, useEffect } from "react";
import { getBarChartData } from "@/axios";

const barChart = [
  { label: "Marketing", data: 1, className: "first" },
  { label: "HR", data: 5, className: "second" },
  { label: "Developers", data: 3, className: "third" },
  { label: "Design", data: 10, className: "fourth" },
];

export const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = getBarChartData().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <div className="header">
      <div className="top">
        <h2>Good Morning Anima</h2>
        <p>Hope you have a good day</p>
      </div>

      <div className="middle">
        <div className="barChartBox">
          <p>Teams Strength </p>
          <BarChart />

          <div className="infoBox">
            {barChart.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <div className={`square ${item.className}`}>{item.data}</div>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Image src={img1} className="img1" />
      </div>

      <div className="LineBox">
        <LineChart />
      </div>
    </div>
  );
};
