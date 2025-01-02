import Slider from "@/components/Home/Slider";
import AllServices from "@/components/Home/AllServices";
import ProfileGrid from "@/components/Home/Profile";
import { CardTopGrid } from "@/components/Home/Card-Top";

const Home = () => {
  const link = "public/assets/slider/";
  const images = [
    link + "play.png",
    link + "custom.png",
    link + "balance.png",
    link + "join.png",
  ];

  return (
    <div>
      {/* <ProfileHero/> */}
      <Slider images={images} />
      <AllServices />
      <ProfileGrid />
      <CardTopGrid />
    </div>
  );
};

export default Home;
