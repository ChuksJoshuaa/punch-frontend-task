import { useState } from "react";
import { technicalRecruitmenData } from "../utils/header";

const Technical = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hideStyle =
    "flex flex-col gap-3 mt-1 rounded-sm border border-gray-100 py-2 px-5 cursor-pointer";
  const showStyle =
    "flex flex-col gap-3 mt-1 rounded-sm border border-gray-100 py-2 px-5 cursor-pointer bg-white shadow-lg";
  return (
    <div className="relative pt-10 bg-white">
      <div
        className="absolute top-0 left-0 w-full h-24 bg-blue-500 transform -skew-y-2 origin-top-left"
        style={{ zIndex: 10, backgroundColor: "white" }}
      ></div>
      <div className="relative mx-auto w-11/12 md:w-5/6 lg:w-5/6 px-5 md:px-10 z-10 flex flex-col md:flex-row items-center justify-center py-32 mt-5 bg-transparent">
        <div className="w-full md:w-1/2">
          <div className="mt-5 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            How we ensure you’re <br /> in good hands.
          </div>
          <div className="my-5 text-sm md:text-base lg:text-lg">
            With our comprehensive screening process, we hand-pick highly <br />{" "}
            skilled candidates so you can onboard them in a matter of days.
          </div>
          {technicalRecruitmenData.map((item, idx) => (
            <div
              className={`${selectedIndex === idx ? showStyle : hideStyle}`}
              style={{ width: "100%", maxWidth: "500px" }}
              key={idx}
              onMouseOver={() => setSelectedIndex(idx)}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex justify-center items-center p-4"
                  style={{
                    borderRadius: "50%",
                    backgroundColor:
                      selectedIndex === idx
                        ? "rgb(139, 164, 253)"
                        : "rgb(236, 236, 236)",
                  }}
                >
                  {selectedIndex === idx ? (
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.822115C0 0.368429 0.391439 1.52588e-05 0.873481 1.52588e-05H14.96C15.4421 1.52588e-05 15.8335 0.368429 15.8335 0.822115V14.08C15.8333 14.298 15.7412 14.507 15.5774 14.6611C15.4136 14.8152 15.1916 14.9019 14.96 14.9021H0.873481C0.641891 14.9019 0.419853 14.8152 0.256094 14.6611C0.0923348 14.507 0.000232871 14.298 0 14.08V0.822115ZM6.70461 4.48307C6.65167 4.44982 6.59014 4.43072 6.52657 4.42778C6.46301 4.42485 6.39979 4.43819 6.34364 4.4664C6.2875 4.4946 6.24053 4.53661 6.20775 4.58795C6.17496 4.63929 6.15759 4.69803 6.15747 4.75793V10.1442C6.15759 10.2041 6.17496 10.2629 6.20775 10.3142C6.24053 10.3655 6.2875 10.4075 6.34364 10.4358C6.39979 10.464 6.46301 10.4773 6.52657 10.4744C6.59014 10.4714 6.65167 10.4523 6.70461 10.4191L10.9964 7.72676C11.0446 7.69653 11.0842 7.65555 11.1116 7.60745C11.139 7.55935 11.1533 7.50564 11.1533 7.45107C11.1533 7.39651 11.139 7.34279 11.1116 7.29469C11.0842 7.2466 11.0446 7.20561 10.9964 7.17538L6.70373 4.48307H6.70461Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.822115C0 0.368429 0.391439 1.52588e-05 0.873481 1.52588e-05H14.96C15.4421 1.52588e-05 15.8335 0.368429 15.8335 0.822115V14.08C15.8333 14.298 15.7412 14.507 15.5774 14.6611C15.4136 14.8152 15.1916 14.9019 14.96 14.9021H0.873481C0.641891 14.9019 0.419853 14.8152 0.256094 14.6611C0.0923348 14.507 0.000232871 14.298 0 14.08V0.822115ZM6.70461 4.48307C6.65167 4.44982 6.59014 4.43072 6.52657 4.42778C6.46301 4.42485 6.39979 4.43819 6.34364 4.4664C6.2875 4.4946 6.24053 4.53661 6.20775 4.58795C6.17496 4.63929 6.15759 4.69803 6.15747 4.75793V10.1442C6.15759 10.2041 6.17496 10.2629 6.20775 10.3142C6.24053 10.3655 6.2875 10.4075 6.34364 10.4358C6.39979 10.464 6.46301 10.4773 6.52657 10.4744C6.59014 10.4714 6.65167 10.4523 6.70461 10.4191L10.9964 7.72676C11.0446 7.69653 11.0842 7.65555 11.1116 7.60745C11.139 7.55935 11.1533 7.50564 11.1533 7.45107C11.1533 7.39651 11.139 7.34279 11.1116 7.29469C11.0842 7.2466 11.0446 7.20561 10.9964 7.17538L6.70373 4.48307H6.70461Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm md:text-md leading-4 md:leading-6 font-semibold text-[#202229]">
                  Step {idx + 1}:
                </span>{" "}
                <span className="text-sm md:text-md leading-4 md:leading-6 font-normal text-[#202229]">
                  {item.name}
                </span>
              </div>
              {selectedIndex === idx && (
                <div className="mt-1 text-sm md:text-md leading-4 md:leading-6 font-normal text-[#202229]">
                  Candidates undergo a rigorous technical interview to assess
                  their skills and expertise.
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0" />
      </div>
    </div>
  );
};

export default Technical;
