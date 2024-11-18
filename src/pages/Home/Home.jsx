import Header from "../../components/Header/Header";
import goldenRetriever from "./../../assets/golden.png";
import Dog from "./../../assets/dog.svg";
import Cat from "./../../assets/cat.svg";
import House from "./../../assets/house.svg";
import Huella from "./../../assets/huella.svg";

const Home = ({ title = "", content = "" }) => {
  return (
    <div className="min-h-screen bg-[#F3F6FB]">
      <Header />
      <main>
        <div className="flex justify-between p-14">
          <div className="w-full flex flex-col gap-y-[25px] bg-[#FD6845] opacity-2 py-5 px-8 rounded-3xl justify-center">
            <h1 className="text-[44px] font-bold text-white text-center">
              {title ? title : "We Get Pet Care!"}
            </h1>
            <h2 className="text-[18px] font-light text-white">
              {content
                ? content
                : "For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!"}
            </h2>
            <div className="flex items-center justify-evenly margin-auto">
              <button className="bg-[#4487FF] rounded-[38px] py-5 px-[36px] text-4 text-white w-fit">
                Schedule Service
              </button>
              <span className="text-5 font-light text-white">
                Or Call 866.338.2463
              </span>
            </div>
          </div>
          <div className="w-full justify-center items-center">
            <div className="relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-64 h-64 bg-yellow-400 rounded-full"></div>

              <img
                src={goldenRetriever}
                alt="Perrito"
                className="relative bottom-3 w-[200px] h-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#4487FF] p-[80px] flex justify-between">
          <div className="flex flex-col gap-y-6 w-full justify-center">
            <span className="text-[#ef5945] text-[40px] font-semibold">
              Our Services
            </span>
            <span className="text-white text-base font-semibold">
              National Brand With a Local Feel. Experience the Fetch! Difference
            </span>
            <span className="text-[#FF6752] text-xs font-semibold">
              Enter Your Location and Fetch Our Services
            </span>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-y-[33px]">
              <div className="flex gap-x-[33px] justify-center">
                <div className="rounded-xl p-5 bg-white flex flex-col justify-center items-center gap-4 ">
                  <img src={Dog} width="50px" alt="Perrito" />
                  <span className="text-[#707070]">Dog Walking</span>
                </div>
                <div className="rounded-xl p-5 bg-white flex flex-col justify-center items-center gap-4 ">
                  <img src={Cat} width="50px" alt="Perrito" />
                  <span className="text-[#707070]">Dog Walking</span>
                </div>
              </div>
              <div className="flex gap-x-[33px] justify-center">
                <div className="rounded-xl p-5 bg-white flex flex-col justify-center items-center gap-4 ">
                  <img src={House} width="50px" alt="Perrito" />
                  <span className="text-[#707070]">Dog Walking</span>
                </div>
                <div className="rounded-xl p-5 bg-white flex flex-col justify-center items-center gap-4 ">
                  <img src={Huella} width="50px" alt="Perrito" />
                  <span className="text-[#707070]">Dog Walking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>{content || "Welcome to the Home page!"}</p>
      </main>
    </div>
  );
};

export default Home;
