import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <Marquee speed={100}>
        <div className="absolute  inset-0 "></div>
        <img
          src="https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[300px]"
        />
        <img
          src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[300px]"
          srcset=""
        />
        <img
          src="https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[300px]"
          srcset=""
        />
        <img
          src="https://images.pexels.com/photos/4178791/pexels-photo-4178791.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[300px]"
          srcset=""
        />
        <img
          src="https://images.pexels.com/photos/3599208/pexels-photo-3599208.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[300px]"
          srcset=""
        />
        <img
          src="https://images.pexels.com/photos/8058761/pexels-photo-8058761.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[300px]"
          srcset=""
        />
      </Marquee>
    </div>
  );
};

export default Home;
