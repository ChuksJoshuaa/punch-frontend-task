import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="page-100">
      <section className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[10rem] text-[rgb(82, 90, 160)]">404</h1>
        <h3 className="mb-[2rem] normal-case text-[rgb(82, 90, 160)] text-lg md:text-3xl">
          Sorry, the page you tried cannot be found{" "}
        </h3>
        <Link
          to="./"
          className="uppercase bg-white text-gray-800 py-1.5 px-3 tracking-wide inline-block font-normal transition-all duration-300 text-sm cursor-pointer shadow-md rounded-sm border-transparent mx-auto"
        >
          BACK HOME
        </Link>
      </section>
    </div>
  );
};

export default ErrorPage;
