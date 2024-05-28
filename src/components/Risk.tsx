import { onBoardDesign } from "../utils/imageFiles";
const Risk = () => {
  return (
    <div
      className="mx-auto py-48 px-8 sm:px-16 lg:px-32 relative mb-10 flex flex-col lg:flex-row items-center"
      style={{
        background:
          "linear-gradient(rgba(237, 239, 255, 0) 0%, rgb(237, 239, 255) 130.82%)",
      }}
    >
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          Why choose <br /> Zwilt?
        </div>
        <div className="mt-4 text-sm lg:text-base lg:w-1/3">
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </div>
      </div>
      <div className="w-full lg:w-4/6 flex flex-col lg:flex-row items-center justify-between relative lg:absolute lg:right-0 px-10 lg:px-12 rounded-lg py-8 lg:py-12 overflow-hidden bg-white shadow-md">
        <div className="lg:w-1/2">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
            Onboard without <br /> the risk.
          </div>
          <div className="flex flex-col gap-2 mt-4 text-sm">
            <div className="flex gap-2 items-center">
              <svg
                width="18"
                height="7"
                viewBox="0 0 18 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="7" rx="3.5" fill="#50589F" />
              </svg>

              <span>We pick the best for you to select.</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                width="18"
                height="7"
                viewBox="0 0 18 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="7" rx="3.5" fill="#50589F" />
              </svg>

              <span>
                Thousands of vetted candidates in dozens of categories.
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                width="18"
                height="7"
                viewBox="0 0 18 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="7" rx="3.5" fill="#50589F" />
              </svg>

              <span>Risk-free resource swapping for the best fit.</span>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-5 cursor-pointer">
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-[54px] w-[54px]">
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
            <span className="font-bold text-sm">Learn more</span>
          </div>
        </div>
        <img
          src={onBoardDesign}
          alt="onBoard design"
          className="h-48 lg:h-96 mt-4 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default Risk;
