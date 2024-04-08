import Image from "next/image";
import React from "react";
import "./style.css";
import img1 from "../../imgs/header-img/Employees.png";
import img2 from "../../imgs/header-img/Project.png";
import img3 from "../../imgs/header-img/Team Strength.png";
import img4 from "../../imgs/header-img/Group 1000000805.png";
import img5 from "../../imgs/header-img/Graph.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <h2>Good Morning Anima</h2>
        <p>Hope you have a good day</p>
      </div>

      <div className="middle">
        {/* <Image src={img3} /> */}
        <div className="imgBox">
          <p>Teams Strength</p>
          <Image src={img5} className="img5" />
          <Image src={img4} className="img4" />
        </div>

        <Image src={img1} className="img1" />
      </div>

      <div className="footer">
        <Image src={img2} />
      </div>
    </div>
  );
};
