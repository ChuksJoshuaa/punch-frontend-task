import { useEffect, useState } from "react";
import { HeroProps } from "../interface";
import { heroData, heroHeader } from "../utils/header";
import { profileGif, searchImage } from "../utils/imageFiles";

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState("it");
  const [selectedResult, setSelectedResult] = useState([] as HeroProps[]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const value = heroData.filter((item) => item.type === selectedTab);
    setSelectedResult(value);
  }, [selectedTab]);

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center my-8 md:my-20">
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-[54px] font-bold leading-9 md:leading-[64px]">
            Finding the right fit
            <img
              src={profileGif}
              alt="Avatar"
              className="inline-block h-5 w-8 lg:h-10 lg:w-16 md:h-6 md:w-10"
            />
            has
            <br />
            never been easier.
          </h1>
        </div>
        <div className="text-sm w-11/12 md:w-96 whitespace-normal text-center mb-6">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </div>
        <div className="relative flex items-center mt-5 max-w-3xl mx-auto w-full sx:w-96">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ border: "1px solid rgb(240, 240, 240)" }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
            <span className="font-bold">Looking for</span> design |
          </div>
          <button
            onClick={() => {
              if (value) alert(value);
            }}
            className="absolute right-0 text-white p-2 rounded-md flex items-center justify-center h-10 px-3 cursor-pointer"
            style={{ backgroundColor: "rgb(255, 190, 46)" }}
          >
            <img src={searchImage} alt="Search Icon" height="15" width="15" />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div
          className="px-5 py-5 rounded-lg w-full md:w-3/5"
          style={{ backgroundColor: "rgb(248, 248, 248)" }}
        >
          <div
            className="flex flex-wrap justify-between rounded-[15px] mb-4 mx-auto"
            style={{ backgroundColor: "rgb(210, 210, 210)", maxWidth: "26rem" }}
          >
            {heroHeader?.map((item, idx) => (
              <button
                key={idx}
                className="px-5 py-2 rounded-[15px] w-1/2 cursor-pointer text-sx sm:text-base font-medium"
                style={{
                  backgroundColor:
                    selectedTab === item.id
                      ? "rgb(199, 244, 194)"
                      : "rgb(210, 210, 210)",
                }}
                onClick={() => setSelectedTab(item.id)}
                onMouseOver={() => setSelectedTab(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex justify-center mt-3 mx-auto">
            <div className="flex flex-wrap justify-between w-full max-w-3xl">
              {selectedResult?.map((item, idx) => (
                <div className="w-full md:w-1/3 px-2" key={idx}>
                  <p
                    className={`text-left mt-3 text-lg leading-4 py-1 cursor-pointer ${
                      item.isSelected
                        ? "text-[#202229] font-semibold"
                        : "text-[#959595] font-normal"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
