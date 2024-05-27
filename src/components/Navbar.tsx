import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { headerData } from "../utils/header";
import { zwiltLogo } from "../utils/imageFiles";

const Navbar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.data);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      className="rounded-xl flex justify-between items-center pl-5 pr-2 py-2 text-sm shadow-lg my-7"
      style={{ backgroundColor: "rgb(82, 90, 160)" }}
    >
      <div>
        <img src={zwiltLogo} alt="Zwilt logo" height={100} width={100} />
      </div>
      {!isSidebarOpen && (
        <div className="flex justify-start items-center">
          {headerData.map((item, idx) => (
            <ul key={idx} className="flex gap-5 text-white list-none">
              <li className="text-sm font-medium leading-4 no-underline mx-1">
                {item}
              </li>
            </ul>
          ))}
        </div>
      )}
      {!isSidebarOpen ? (
        <div className="flex justify-start items-center">
          <button className="text-sm font-medium leading-4 text-white mx-3">
            login
          </button>
          <button className="bg-white rounded-xl px-4 py-2 font-medium text-md leading-4">
            Join Now
          </button>
        </div>
      ) : openDropdown ? (
        <>
          <div
            className="flex items-center"
            onClick={() => {
              setOpenDropdown(false);
            }}
          >
            <button className="text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 352 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <button
            className="text-white"
            onClick={() => {
              setOpenDropdown(true);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </button>
        </div>
      )}
      {isSidebarOpen && openDropdown && (
        <div className="absolute z-50 top-20 left-1/2 transform -translate-x-1/2 w-5/6 bg-[#525AA0] flex flex-col items-center md:hidden rounded-xl">
          {headerData.map((item, idx) => (
            <ul
              key={idx}
              className="flex flex-col items-center gap-5 text-white py-3 list-none"
            >
              <li className="text-sm font-medium leading-4 no-underline mx-1">
                {item}
              </li>
            </ul>
          ))}
          <div className="flex flex-col gap-3 mt-5 mb-4">
            <button className="text-sm font-medium leading-4 text-white mx-3">
              login
            </button>
            <button className="bg-white rounded-xl px-4 py-2 font-medium text-md leading-4">
              Join Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
