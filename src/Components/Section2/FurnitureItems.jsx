import React from "react";

const FurnitureItems = () => {
  return (
    <div>
      <>
        <div>
          <ul className="flex flex-col mt-4 text-2xl/[22.94px] font-semibold lg:flex-row lg:space-x-16 lg:my-12 list-style-none">
            <li>
              <a
                href="#"
                className="block opacity-50 lg:focus:opacity-100 lg:border-0 lg:p-0"
                aria-current="page"
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block opacity-50 lg:focus:opacity-100 lg:border-0 lg:p-0"
              >
                Lamp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block opacity-50 lg:focus:opacity-100 lg:border-0 lg:p-0"
              >
                Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block opacity-50 lg:focus:opacity-100 lg:border-0 lg:p-0"
              >
                Table
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block opacity-50 lg:focus:opacity-100 lg:border-0 lg:p-0"
              >
                Sofa
              </a>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default FurnitureItems;
