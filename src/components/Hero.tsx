import { searchImage, profileGif } from "../utils/imageFiles";
const Hero = () => {
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
        <div className="relative flex items-center mt-5 max-w-3xl mx-auto w-96">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            value=""
            style={{ border: "1px solid rgb(240, 240, 240)" }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
            <span className="font-bold">Looking for</span> design |
          </div>
          <button
            className="absolute right-0 text-white p-2 rounded-md flex items-center justify-center h-10 px-3"
            style={{ backgroundColor: "rgb(255, 190, 46)" }}
          >
            <img src={searchImage} alt="Search Icon" height="15" width="15" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
