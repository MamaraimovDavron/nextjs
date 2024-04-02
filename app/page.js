"use client";
import { Header } from "@/components/Header";
import "../components/style.css";
import { Dashboard } from "../components/Dashboard.jsx";
import { RightSide } from "@/components/RightSide";

export default function Home() {
  return (
    <div className="container">
      <Dashboard />
      <Header />
      <RightSide />
    </div>
  );
}
