import React from "react";
import Image from "next/image";
import { Section } from "@/app/types";
import ContentSlider from "./ContentSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

interface Slider extends Section {
  bannerImg: string;
  bannerWidth: number;
  bannerHeight: number;
}

const Slider = ({
  section,
  data: contents,
  bannerImg,
  bannerWidth,
  bannerHeight,
}: Slider) => {
  return (
    <div className="md:hidden">
      <div className="pr-6 pl-6 pt-6">
        <h3 className="text-heading-gray text-5xl mb-6">{section}</h3>
        <Image
          src={bannerImg}
          width={bannerWidth}
          height={bannerHeight}
          alt="background"
          className="m-auto mb-[-10%] relative z-10"
        />
      </div>
      <Swiper
        className="myswiper"
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {contents.map((data, index) => (
          <SwiperSlide className="myswiper-slider">
            <div style={{ background: data.backColor, height: "240px" }}>
              <ContentSlider
                className="p-12 px-5"
                dataSource={data}
                index={index}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
