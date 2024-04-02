import { Header } from "@/components/Header";
import "../components/style.css";
import { Dashboard } from "../components/Dashboard.jsx";
import { RightSide } from "@/components/RightSide";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Dashboard />
      <Header />
      <RightSide />
    </div>
  );
}
