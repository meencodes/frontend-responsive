"use client";

import React from "react";
import Image from "next/image";
import Slider from "@/components/Slider";
import List from "@/components/List";
import { athlets, players } from "@/data/section";

const MainLayout = () => {
  return (
    <div className="w-full">
      {/* Desktop & Tablet Size */}
      <div className="grid grid-cols-1">
        <Image
          src="/footballer.svg"
          alt="background"
          width={460}
          height={150}
          className="mb-[-100%] relative lg:top-15 lg:ml-[8%] md:top-20 md:ml-[-15%] md:block xs:hidden"
        />
        <List section={athlets.section} list={athlets.data} rightContent />
      </div>

      <div className="grid grid-cols-1 overflow-hidden scale-100">
        <List section={players.section} list={players.data} />
        <Image
          src="/basketball.svg"
          alt="background"
          width={660}
          height={150}
          className="absolute lg:right-[150px] md:right-[-210px] md:block xs:hidden"
        />
      </div>

      {/* Mobile Size */}
      <Slider
        section={athlets.section}
        data={athlets.data}
        bannerImg="/footballer-sm.svg"
        bannerWidth={280}
        bannerHeight={220}
      />
      <Slider
        section={players.section}
        data={players.data}
        bannerImg="/basketball-sm.svg"
        bannerWidth={350}
        bannerHeight={300}
      />
    </div>
  );
};

export default MainLayout;
