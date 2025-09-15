import { Handbag, Heart, Search, TextAlignStart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const categories = [
  {
    name: "men",
    link: "/men",
  },
  {
    name: "women",
    link: "/women",
  },
  {
    name: "kids",
    link: "/kids",
  },
  {
    name: "accessories",
    link: "/accessories",
  },
  {
    name: "sale",
    link: "/sale",
  },
  {
    name: "new",
    link: "/new",
  },
];

export default function Header() {
  return (
    <div className="flex flex-col bg-bg-header ">
      <div className="flex justify-center py-1 bg-bg-header-secondary">
        <h2 className="uppercase md:text-lg xl:text-lg text-sm text-black tracking-[0.2em] font-normal">
          hey shopper enjoy <span className="font-bold">free returns</span>{" "}
          within 30 days!
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between py-3 px-6">
        <div className="md:hidden flex">
            <Navbar />
        </div>
        <div className="text-white">
          <Link
            to="/"
            className="xl:text-4xl md:text-4xl text-xl font-bold text-white uppercase tracking-[0.2em]"
          >
            <p className="text-white">SHEAN</p>
          </Link>
        </div>
        <div className="xl:flex md:flex hidden items-center w-5/12">
          <div className="flex items-center w-full h-fit bg-white px-2">
            <input
              type="text"
              placeholder="Search..."
              className=" text-black px-4 py-3 w-full rounded-l-md focus:outline-none"
            />
            <div className="bg-black hover:bg-gray-800 px-5 py-2 rounded-md ">
              <Search className="text-white" size={22} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-7">
          <Heart className="xl:flex md:flex hidden text-white" />
          <UserRound className="xl:flex md:flex hidden text-white" />
          <Handbag className="text-white" />
        </div>
      </div>
      <div className="xl:flex md:flex hidden border-t border-t-gray-700">
        <div className="container mx-auto flex items-center justify-start gap-16 py-5 ">
          <div className="flex flex-row items-center gap-2 hover:bg-gray-700 text-white text-xl bg-bg-header">
            <TextAlignStart />
            Categories
          </div>
          <div className="flex space-x-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="hover:text-gray-300 text-white"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
