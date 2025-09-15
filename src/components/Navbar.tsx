import { Search, TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
import { categories } from "./Header";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <TextAlignJustify onClick={handleClick} className="text-white" />
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50">
          <div className="flex flex-col md:w-2/5 sm:w-2/5 w-full bg-white h-screen">
            <div
              className="flex flex-row items-center justify-center gap-2 text-white bg-bg-header"
              onClick={handleClick}
            >
              <p className="uppercase text-white py-2">Close</p>
              <X />
            </div>
            <div className="items-center w-full px-2 py-3">
              <div className="flex items-center w-full h-fit bg-white px-2 border border-black rounded-sm">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" text-black px-2 py-3 w-full rounded-l-md focus:outline-none"
                />
                <div className="bg-black hover:bg-gray-800 px-5 py-2 rounded-md ">
                  <Search className="text-white" size={22} />
                </div>
              </div>
            </div>
            <div className="pl-6">
                {categories.map((category, index) => (
                    <div key={index} className="border-b border-gray-100">
                        <p className="text-black px-2 py-3">{category.name}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
