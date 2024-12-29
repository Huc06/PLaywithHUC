


import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const link = 'src/assets/Services/';

const photoscarous = [
    link + 'friend.png',
    link + 'chat.png',
    link + 'lol.png',
    link + 'tft.png',
    link + 'minecraft.png',
    link + 'valorant.png',
    link + 'socials.png',
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
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem] min-h-screen">
        <div className="text-[1.5rem] font-bold flex absolute left-[10%] mb-[2rem] text-center">
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
                  <PhotoItem image={p}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
      </div>
    </section>
  );
}
