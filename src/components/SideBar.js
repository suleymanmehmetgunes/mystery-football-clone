import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div className="py-2">
      <div className="text-gray-500">Size</div>
      <button
        className="bg-white p-3 w-[263px] h-[49px] text-start text-[12px] text-gray-600 border-[1.5px] border-black hover:border-[2px] hover:border-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedSize}
      </button>
      {isOpen && (
        <div className="bg-white py-2 px-3 shadow-md w-[263px]">
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer text-[12px]"
            onClick={() => {
              setSelectedSize("XS");
              setIsOpen(false);
            }}
          >
            XS
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer text-[12px]"
            onClick={() => {
              setSelectedSize("S");
              setIsOpen(false);
            }}
          >
            S
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer text-[12px]"
            onClick={() => {
              setSelectedSize("M");
              setIsOpen(false);
            }}
          >
            M
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer text-[12px]"
            onClick={() => {
              setSelectedSize("L");
              setIsOpen(false);
            }}
          >
            L
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer text-[12px]"
            onClick={() => {
              setSelectedSize("XL");
              setIsOpen(false);
            }}
          >
            XL
          </div>
          <div
            className="p-2 hover:bg-gray-200 cursor-pointer text-[12px]"
            onClick={() => {
              setSelectedSize("XLL");
              setIsOpen(false);
            }}
          >
            XLL
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
