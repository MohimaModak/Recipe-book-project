import Marquee from "react-fast-marquee";
import "./Home.css";
import CountryWiseFood from "../CountryWiseFood/CountryWiseFood";
import CountryInput from "../CountryInput/CountryInput";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-7 items-center ">
        <Marquee speed={100}>
          <img
            src="https://images.pexels.com/photos/895223/pexels-photo-895223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
          />
          <img
            src="https://images.pexels.com/photos/8845419/pexels-photo-8845419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/8188922/pexels-photo-8188922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/8188925/pexels-photo-8188925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/7172069/pexels-photo-7172069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/5591732/pexels-photo-5591732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
        </Marquee>

        <div>
          <Marquee speed={100}>
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[200px]"
            />
            <img
              src="https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[200px]"
            />
          </Marquee>

          <h1 className="text-center font text-3xl font-medium lg:text-6xl p-3">
            Recipe Book
          </h1>

          <Marquee speed={100}>
            <img
              src="https://images.pexels.com/photos/4113868/pexels-photo-4113868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[200px]"
            />
            <img
              src="https://images.pexels.com/photos/4126148/pexels-photo-4126148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[200px]"
            />
          </Marquee>
        </div>

        <Marquee speed={100}>
          <img
            src="https://images.pexels.com/photos/895223/pexels-photo-895223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
          />
          <img
            src="https://images.pexels.com/photos/8845419/pexels-photo-8845419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/8188922/pexels-photo-8188922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/8188925/pexels-photo-8188925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/7172069/pexels-photo-7172069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/5591732/pexels-photo-5591732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[550px]"
            srcset=""
          />
        </Marquee>
      </div>

      <div className="flex gap-5 mt-16">
        <div className="border rounded-md">
          <CountryInput></CountryInput>
        </div>
        <div >
          <CountryWiseFood></CountryWiseFood>
        </div>
      </div>

    </div>
  );
};

export default Home;
