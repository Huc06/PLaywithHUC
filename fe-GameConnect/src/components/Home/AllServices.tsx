import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const link = "static/Services/";

const photoscarous = [
  link + "friend.png",
  link + "chat.png",
  link + "game1.png",
  link + "game2.png",
  link + "game3.png",
  link + "game4.png",
  link + "game5.png",
  link + "socials.png",
];

type CarouselProbs = {
  image: string;
};

export default function Carousel() {
  const PhotoItem = (probs: CarouselProbs) => (
    <div className="relative group">
      <img src={probs.image} className="rounded-xl w-full h-full" />
    </div>
  );

  return (
    <section className="pt-[5rem] pb-[2rem]">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <div className="text-[2rem] font-bold flex absolute left-[10%] mb-[2rem] text-center font-bangers">
          All Services
        </div>
        <Swiper
          modules={[Pagination]}
          loop={false}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            // when window width is <= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            // when window width is <= 480px
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is <= 640px
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="carousel"
        >
          {photoscarous.map((p) => {
            return (
              <SwiperSlide>
                <PhotoItem image={p} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
