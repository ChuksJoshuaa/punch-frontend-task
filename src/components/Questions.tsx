import { questionsData } from "../utils/header";
import { useState } from "react";

const Questions = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  return (
    <div className="relative pt-10 bg-white">
      <div
        className="absolute top-0 left-0 w-full h-24 bg-blue-500 transform -skew-y-2 origin-top-left"
        style={{ zIndex: 10, backgroundColor: "white" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 mt-20">
        <div className="text-center mt-6 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
          Frequently asked questions
        </div>

        {questionsData.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="flex flex-col">
            <div onClick={() => setSelectedIndex(idx)}>
              {item.isGeneral && <div>General</div>}
              {item.isProcess && <div>Process</div>}
              <div>
                <div>
                  <h3>{item.name}</h3>
                  {selectedIndex === idx && (
                    <svg
                      width="27"
                      height="16"
                      viewBox="0 0 27 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.924 7.81731C13.924 11.5029 10.807 14.4906 6.96198 14.4906C3.11698 14.4906 -2.38813e-08 11.5029 -1.62296e-08 7.81731C-8.57797e-09 4.13174 3.11698 1.144 6.96198 1.144C10.807 1.144 13.924 4.13174 13.924 7.81731Z"
                        fill="#FFBE2E"
                      />
                      <path
                        d="M12.1337 15.6346L12.1337 2.5191e-08L26.0577 7.81731L12.1337 15.6346Z"
                        fill="#FFBE2E"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
