import { DesignAndCreative, IT } from ".";
import { zipDesign } from "../utils/imageFiles";

const MarketPlace = () => {
  return (
    <div className="mt-20">
      <img src={zipDesign} alt="layout-design" />

      <div className="relative" style={{ marginTop: "-35px" }}>
        <div
          className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-3 origin-top-left"
          style={{ zIndex: 0, backgroundColor: "rgb(237, 239, 255)" }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center py-16 mt-20 bg-[#EDEFFF]">
          <div className="text-center mt-6 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Your one-stop marketplace for <br /> finding the talent your
            business needs.
          </div>
          <div className="w-11/12 md:w-5/6 lg:w-5/6 lg:gap-16 px-5 md:px-10 mt-10 flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="text-base md:text-lg lg:text-xl mb-5 font-bold">
                Find Dev and IT professionals to <br /> scale your business.
              </div>
              <div className="flex gap-10 md:gap-20">
                <div className="flex items-center text-xs">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5.001C10.1217 5.001 12.1566 5.84385 13.6569 7.34415C15.1571 8.84444 16 10.8793 16 13.001C16 15.1227 15.1571 17.1576 13.6569 18.6579C12.1566 20.1581 10.1217 21.001 8 21.001C5.87827 21.001 3.84344 20.1581 2.34315 18.6579C0.842855 17.1576 0 15.1227 0 13.001C0 10.8793 0.842855 8.84444 2.34315 7.34415C3.84344 5.84385 5.87827 5.001 8 5.001ZM8 8.501L6.677 11.181L3.72 11.611L5.86 13.696L5.355 16.642L8 15.251L10.645 16.641L10.14 13.696L12.28 11.61L9.323 11.18L8 8.501ZM9 0L14 0.00100005V3.001L12.637 4.139C11.5059 3.54558 10.2711 3.17583 9 3.05V0.00100005V0ZM7 0V3.05C5.72935 3.17565 4.49482 3.54505 3.364 4.138L2 3.001V0.00100005L7 0Z"
                      fill="#A285D0"
                    />
                  </svg>

                  <span className="mx-3">989 Skills</span>
                </div>
                <div className="flex items-center text-xs">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                      fill="#A285D0"
                    />
                  </svg>

                  <span className="mx-3">45 Sub-Categories</span>
                </div>
              </div>
              <div className="flex items-center text-xs mt-5">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.82485 10.6147V17.1467H0C0 15.4143 0.719044 13.7529 1.99895 12.5279C3.27886 11.3029 5.01479 10.6147 6.82485 10.6147ZM11.9435 16.7385L9.4362 18L9.9148 15.3284L7.88696 13.4357L10.6903 13.0454L11.9435 10.6147L13.1975 13.0454L16 13.4357L13.9722 15.3284L14.4499 18L11.9435 16.7385ZM6.82485 9.79814C3.9968 9.79814 1.70621 7.60581 1.70621 4.89907C1.70621 2.19233 3.9968 0 6.82485 0C9.65289 0 11.9435 2.19233 11.9435 4.89907C11.9435 7.60581 9.65289 9.79814 6.82485 9.79814Z"
                    fill="#A285D0"
                  />
                </svg>

                <span className="mx-3">1011 Profiles</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full bg-white px-5 py-3 rounded-md">
              <div className="font-bold text-center md:text-left">
                IT & Development
              </div>
              <IT />
            </div>
          </div>
          <div className="w-11/12 md:w-5/6 lg:w-5/6 lg:gap-16 px-5 md:px-10 mt-10 flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="text-base md:text-lg lg:text-xl mb-5 font-bold">
                Explore Creative Individuals with a <br /> keen eye for detail.
              </div>
              <div className="flex gap-10 md:gap-20">
                <div className="flex items-center text-xs">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5.001C10.1217 5.001 12.1566 5.84385 13.6569 7.34415C15.1571 8.84444 16 10.8793 16 13.001C16 15.1227 15.1571 17.1576 13.6569 18.6579C12.1566 20.1581 10.1217 21.001 8 21.001C5.87827 21.001 3.84344 20.1581 2.34315 18.6579C0.842855 17.1576 0 15.1227 0 13.001C0 10.8793 0.842855 8.84444 2.34315 7.34415C3.84344 5.84385 5.87827 5.001 8 5.001ZM8 8.501L6.677 11.181L3.72 11.611L5.86 13.696L5.355 16.642L8 15.251L10.645 16.641L10.14 13.696L12.28 11.61L9.323 11.18L8 8.501ZM9 0L14 0.00100005V3.001L12.637 4.139C11.5059 3.54558 10.2711 3.17583 9 3.05V0.00100005V0ZM7 0V3.05C5.72935 3.17565 4.49482 3.54505 3.364 4.138L2 3.001V0.00100005L7 0Z"
                      fill="#A285D0"
                    />
                  </svg>

                  <span className="mx-3">989 Skills</span>
                </div>
                <div className="flex items-center text-xs">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                      fill="#A285D0"
                    />
                  </svg>

                  <span className="mx-3">45 Sub-Categories</span>
                </div>
              </div>
              <div className="flex items-center text-xs mt-5">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.82485 10.6147V17.1467H0C0 15.4143 0.719044 13.7529 1.99895 12.5279C3.27886 11.3029 5.01479 10.6147 6.82485 10.6147ZM11.9435 16.7385L9.4362 18L9.9148 15.3284L7.88696 13.4357L10.6903 13.0454L11.9435 10.6147L13.1975 13.0454L16 13.4357L13.9722 15.3284L14.4499 18L11.9435 16.7385ZM6.82485 9.79814C3.9968 9.79814 1.70621 7.60581 1.70621 4.89907C1.70621 2.19233 3.9968 0 6.82485 0C9.65289 0 11.9435 2.19233 11.9435 4.89907C11.9435 7.60581 9.65289 9.79814 6.82485 9.79814Z"
                    fill="#A285D0"
                  />
                </svg>

                <span className="mx-3">1011 Profiles</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full bg-white px-5 py-3 rounded-md">
              <div className="font-bold text-center md:text-left">
                Design and Creative
              </div>
              <DesignAndCreative />
            </div>
          </div>
          <br />
          <br />
          <div
            className="w-11/12 sm:w-5/6 lg:w-5/6 lg:mt-20 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center pb-16"
            style={{ marginTop: "-20px" }}
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center mb-10 md:mb-0 cursor-pointer">
              <div className="flex items-center">
                <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-16 w-16">
                  <svg
                    width="25"
                    height="15"
                    viewBox="0 0 25 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
                      fill="#EDEFFF"
                    />
                    <path
                      d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
                      fill="#EDEFFF"
                    />
                  </svg>
                </div>
                <span className="ml-3 font-bold">Explore More</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left cursor-pointer">
              <span className="font-bold">30 more</span> to explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
