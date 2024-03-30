"use client";
import Image from "next/image";
import React from "react";
import arrow from "@/public/duaarrow.svg";

const DuasName = ({ subCategoryDua }) => {
  return (
    <>
      {subCategoryDua.map((item) => (
        <div
          key={item.dua_id}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor tag behavior
            const outletDiv = document.getElementById(`dua_id_${item.dua_id}`);
            if (outletDiv) {
              outletDiv.scrollIntoView({ behavior: "smooth" }); // Scroll to the outlet's div smoothly
            }
          }}
        >
          <div className="flex">
            <Image className="-translate-y-1 mr-2" src={arrow} alt="arrow" />
            <p className="text-2xs my-3 text-left w-[95%] dark:text-gray-300">
              {item.dua_name_en}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DuasName;
