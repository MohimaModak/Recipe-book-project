import Marquee from "react-fast-marquee";
import './Home.css'
const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-7 items-center">
      <Marquee speed={100}>
        <div className="absolute  inset-0 "></div>
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
      <h1 className="text-center font text-4xl">Recipe Book</h1>
      <Marquee speed={100}>
        <div className="absolute  inset-0 "></div>
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
  );
};

export default Home;
