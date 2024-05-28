const Footer = () => {
  return (
    <div
      className="relative pt-10"
      style={{
        marginTop: "80px",
        background: "linear-gradient(rgb(12, 12, 12) 0%, rgb(12, 12, 12) 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-2 origin-top-left"
        style={{ zIndex: 10, backgroundColor: "rgb(12, 12, 12)" }}
      ></div>
      <div className="mx-auto w-5/6 relative mt-10">
        <div
          className="absolute top-0 left-0 w-full h-48 bg-blue-500 transform -skew-y-2 origin-top-left"
          style={{ zIndex: 10, backgroundColor: "rgb(82, 90, 160)" }}
        ></div>
        <div
          className="relative z-10 mx-auto w-full px-10 flex items-center justify-center pt-20 pb-5 mt-20"
          style={{ backgroundColor: "rgb(82, 90, 160)", zIndex: 20 }}
        >
          <div className="flex flex-col justify-center items-center">
            <div
              className="font-bold text-center text-white"
              style={{ fontSize: "2rem", lineHeight: "1.3" }}
            >
              Need a job done, and done <br /> well? Get started
            </div>
            <div className="flex gap-3 items-center mt-5">
              <div
                className="flex justify-center items-center rounded-full overflow-hidden bg-black h-11 w-11"
                style={{ borderRadius: "35%" }}
              >
                <svg
                  width="16"
                  height="26"
                  viewBox="0 0 16 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.36366 14.22C4.8405 14.22 1.98442 11.2404 1.98442 7.56486C1.98442 3.8893 4.8405 0.909667 8.36366 0.909668C11.8868 0.909668 14.7429 3.8893 14.7429 7.56486C14.7429 11.2404 11.8868 14.22 8.36366 14.22Z"
                    fill="#EDEFFF"
                  />
                  <path
                    d="M0.890834 12.5087L15.8365 12.5087L8.36366 25.8191L0.890834 12.5087Z"
                    fill="#EDEFFF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full mx-auto mt-20 text-white">
          <div className="w-full md:w-2/6">
            <svg
              width="120"
              height="30"
              viewBox="0 0 120 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 26.4321V22.8794L5.21521 16.4845H0.403758V10.8002H13.9633V14.3529L8.74809 20.7478H14.3671V26.4321H0Z"
                fill="white"
              />
              <path
                d="M20.0654 26.4321L14.2782 10.8002H22.488L24.2376 17.6569L26.6265 10.8002H29.6883L32.0772 17.6569L33.8268 10.8002H42.0366L36.2494 26.4321H29.8902L28.1742 21.636L26.4246 26.4321H20.0654Z"
                fill="white"
              />
              <path
                d="M49.7419 6.50145C48.9792 7.1883 48.0035 7.53173 46.8146 7.53173C45.6258 7.53173 44.65 7.1883 43.8874 6.50145C43.1247 5.79091 42.7434 4.87905 42.7434 3.76587C42.7434 2.65268 43.1247 1.75267 43.8874 1.06581C44.65 0.35527 45.6258 0 46.8146 0C48.0035 0 48.9792 0.35527 49.7419 1.06581C50.5045 1.75267 50.8859 2.65268 50.8859 3.76587C50.8859 4.87905 50.5045 5.79091 49.7419 6.50145ZM43.0462 26.4321V10.8002H50.6167V26.4321H43.0462Z"
                fill="white"
              />
              <path
                d="M59.6563 26.4321C57.5254 26.4321 55.843 25.7808 54.6093 24.4781C53.398 23.1755 52.7924 21.3873 52.7924 19.1135V0.142108H60.3629V18.9004C60.3629 19.5162 60.4863 20.0017 60.733 20.357C61.0022 20.6886 61.3498 20.8544 61.776 20.8544H62.4153L61.9443 26.4321H59.6563Z"
                fill="white"
              />
              <path
                d="M75.4696 20.8188L76.8491 25.3308C75.3463 26.4676 73.7537 27.0361 72.0713 27.0361C69.6712 27.0361 67.7758 26.3374 66.3851 24.94C65.0168 23.5426 64.3326 21.6241 64.3326 19.1846V16.4845H62.4484V10.8002H64.9383L65.2074 5.32906H71.9031V10.8002H75.7052V16.4845H71.9031V19.1846C71.9031 19.8715 72.0377 20.4162 72.3069 20.8188C72.5985 21.1978 72.991 21.3873 73.4845 21.3873C74.0228 21.3873 74.6845 21.1978 75.4696 20.8188Z"
                fill="white"
              />
              <path
                d="M102.956 17.8619C102.956 23.2584 98.5782 27.6331 93.1774 27.6331C87.7766 27.6331 83.3984 23.2584 83.3984 17.8619C83.3984 12.4653 87.7766 8.0906 93.1774 8.0906C98.5782 8.0906 102.956 12.4653 102.956 17.8619Z"
                fill="#FFBE2E"
              />
              <path
                d="M100.442 29.3082V6.41553L120 17.8619L100.442 29.3082Z"
                fill="#FFBE2E"
              />
            </svg>

            <div className="mt-5" style={{ color: "rgb(209, 209, 209)" }}>
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </div>
            <div className="mt-10">
              <div style={{ color: "rgb(118, 118, 121)" }}>
                LINKS AND REDIRECTS
              </div>
              <div className="flex gap-5 mt-3">
                <button
                  className="px-8 py-2 text-xs rounded-lg cursor-pointer whitespace-nowrap"
                  style={{ backgroundColor: "rgb(41, 43, 52)" }}
                >
                  Hire Now
                </button>
                <button
                  className="px-8 py-2 text-xs rounded-lg cursor-pointer whitespace-nowrap"
                  style={{ backgroundColor: "rgb(41, 43, 52)" }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/6">
            <div
              className="text-white font-bold"
              style={{ fontSize: "2.5rem", lineHeight: "1.3" }}
            >
              Connecting the right people to <br /> the right businesses.
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-28 mt-20">
              <div className="flex flex-col gap-5">
                <div style={{ color: "rgb(118, 118, 121)" }}>PLATFORM</div>
                <div>Find Work</div>
                <div>Find Talent</div>
                <div>Categories</div>
                <div>About Us</div>
              </div>
              <div className="flex flex-col gap-5">
                <div style={{ color: "rgb(118, 118, 121)" }}>CATEGORIES</div>
                <div>Data Science</div>
                <div>IT & Networking</div>
                <div>Web & Mobile</div>
              </div>
              <div className="flex flex-col gap-5">
                <div style={{ color: "rgb(118, 118, 121)" }}>HELP</div>
                <div>FAQ's</div>
                <div>Contact Us</div>
              </div>
              <div className="flex flex-col gap-5">
                <div style={{ color: "rgb(118, 118, 121)" }}>GET IN TOUCH</div>
                <div>Instagram</div>
                <div>LinkedIn</div>
                <div>Twitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" style={{ borderColor: "rgb(118, 118, 121)" }} />
      <div
        className="w-5/6 mt-3 pb-3 flex flex-col md:flex-row justify-between mx-auto"
        style={{ color: "rgb(118, 118, 121)" }}
      >
        <div>All rights reserved by Zwilt</div>
        <div className="flex gap-5">
          <div className="underline">Privacy Policy</div>
          <div className="underline">Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
