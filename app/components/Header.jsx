import Image from "next/image";
import React from "react";
import "./style.css";
import img1 from "../../imgs/header-img/Employees.png";
import img2 from "../../imgs/header-img/Project.png";
import img3 from "../../imgs/header-img/Team Strength.png";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
// import img4 from "../../imgs/header-img/Group 1000000805.png";
// import img5 from "../../imgs/header-img/Graph.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <h2>Good Morning Anima</h2>
        <p>Hope you have a good day</p>
      </div>

      <div className="middle">
        {/* <Image src={img3} /> */}
        <div className="barChartBox">
          <p>Teams Strength</p>
          <BarChart />
          <div className="titleBox">
            <div className="top">
              <div className="box">
                <div className="square-1">
                  a
                </div>
                <p>Marketing</p>
              </div>
              <div className="box">
                <div className="square-2">
                  b
                </div>
                <p>HR</p>
              </div>
            </div>
            <div className="bottom">
            <div className="box">
                <div className="square-3">
                  c
                </div>
                <p>Developers</p>
              </div>
              <div className="box">
                <div className="square-4">
                  d
                </div>
                <p>Design</p>
              </div>
            </div>
          </div>
        </div>

        <Image src={img1} className="img1" />
      </div>

      <div className="LineBox">
        {/* <Image src={img2} /> */}
        <LineChart />
      </div>
    </div>
  );
};
