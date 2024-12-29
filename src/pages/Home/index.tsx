import Slider from "@/components/Home/Slider";
import link from "../../assets/slider/image3.png"
import AllServices from "@/components/Home/AllServices";

const Home = () => {
    const images = [
    link,
    link,
    link];

  return (
    
    <div>
      {/* <ProfileHero/> */}
      <Slider images={images} />
      <AllServices />
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
       <div>test</div>

    </div>
  )
}

export default Home