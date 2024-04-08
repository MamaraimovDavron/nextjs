"use client";
import React from "react";
import Data from "./teams";
import "../components/style.css";
import Link from "next/link";

const Teams = () => {
  return (
    <table className="team-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Group Title</th>
          <th>Quantity</th>
          <th>Quote of Team</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {Data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.quote}</td>
              <td>
                <Link href={item.href}>
                  <button className="show">Show</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Teams;
