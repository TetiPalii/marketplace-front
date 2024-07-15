/** @format */

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

const bannerImages = [
  {
    id: 1,
    title: "swiper-image-1",
    src: "/images/banner/swiper_image__1.webp",
  },
  {
    id: 2,
    title: "swiper-image-2",
    src: "/images/banner/swiper_image__2.webp",
  },
  {
    id: 3,
    title: "swiper-image-3",
    src: "/images/banner/swiper_image__3.webp",
  },
  {
    id: 4,
    title: "swiper-image-4",
    src: "/images/banner/swiper_image__4.webp",
  },
];

export const Banner = () => {
  return (
    <>
      <Swiper
        className="swiper-banner"
        pagination={{
          clickable: true,
          renderBullet: function (
            index,
            className
          ) {
            return `<svg class="${className}" width="22" height="5" viewBox="0 0 22 5" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="5" rx="2.5" fill="#333333"/>
          </svg>`;
          }, //svg image for swiper pagination bullets
        }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false, // autoplay will not be disabled after user interactions
        }}
        modules={[Pagination, Autoplay]}
      >
        {bannerImages?.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <Image
              width={1082}
              height={344}
              src={slide?.src}
              alt={slide?.title}
              style={{ borderRadius: "16px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
