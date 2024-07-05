import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" h-screen flex items-center ">
      <div className="flex    flex-wrap">
        <div className="w-full  sm:w-8/12 mb-10">
          <div className="container   mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                Health<span className="text-blue-700">Predict</span>
              </div>
              {/* <div>
                <img
                  src="https://image.flaticon.com/icons/svg/2913/2913461.svg"
                  alt="Health Icon"
                  className="w-8"
                />
              </div> */}
            </nav>
            <header className="container  px-4 lg:flex mt-10 items-center  h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl  lg:text-6xl font-bold">
                  Predict the <span className="text-blue-700">Likelihood</span>{" "}
                  of Diabetes
                </h1>
                <div className="w-20 h-2 bg-blue-700 my-4"></div>
                <p className="text-xl  mb-10">
                  Utilize cutting-edge AI technology to assess the risk of
                  diabetes in patients. Early prediction can lead to better
                  management and improved health outcomes.
                </p>
                <Link
                  href="/predict"
                  className="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow"
                >
                  Get Started
                </Link>
              </div>
            </header>
          </div>
        </div>
        {/* <img
          src="https://images.unsplash.com/photo-1588774069205-68d1c9b4d12a?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt="Medical Analysis"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        /> */}
      </div>
    </main>
  );
}
