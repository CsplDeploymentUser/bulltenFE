"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubParaGraph from "@/components/CommonComponents/HeadingComponents/SubParaGraph";
import Image from "next/image";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import { SiComma } from "react-icons/si";

export default function TestimonialsSection({
  TestimonialsContent,
}: {
  TestimonialsContent: any;
}) {
  const testimonials = TestimonialsContent?.data?.reviews;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current: number) => {
      setSelectedIndex(current);
    },
  };

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    sliderRef?.current?.slickGoTo(index);
  };

  const sliderRef = React.useRef<Slider>(null);

  return (
    <section className=" container w-full bg-bullt-quaternary/[0.07] rounded-lg lg:px-14 md:px-6 px-2 sm:my-0 my-3">
      <div className="w-full mx-auto lg:py-16 py-8 rounded-lg ">
        {/* Header Section */}
        <div className="lg:-mb-[200px]  mb-0">
          <div className="text-left mb-8 lg:w-[50%] w-full ">
            <SloganHeadingComponent paddingTop={1} alignmentType={1}>
              {TestimonialsContent?.data?.slogen}
            </SloganHeadingComponent>
            <MainHeadingComponent paddingTop={1} alignmentType={1}>
              {TestimonialsContent?.data?.title}
            </MainHeadingComponent>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {testimonials?.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="relative flex sm:flex-row flex-col items-end justify-between"
            >
              <div className="flex sm:flex-row flex-col sm:items-end items-center justify-start sm:justify-between gap-2">
                <div className="sm:w-[40%] w-full">
                  <div className="flex flex-row text-bullt-quaternary text-2xl mt-7">
                    <SiComma />
                    <SiComma />
                  </div>
                  <ParaGraphText paddingTop={3} alignmentType={1}>
                    {testimonial?.description}
                  </ParaGraphText>
                  <SloganHeadingComponent paddingTop={3} alignmentType={1}>
                    {testimonial?.name}
                  </SloganHeadingComponent>
                  <SubParaGraph paddingTop={1} alignmentType={1}>
                    {testimonial?.role}
                  </SubParaGraph>
                </div>

                <div className="relative">
                  <div className="relative lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg border-[6px] border-bullt-quaternary">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.client_image}`}
                      alt={testimonial?.alt_text || testimonial?.name}
                      className="w-full h-full object-cover"
                      fill={true}
                    />
                  </div>
                  {testimonials?.[0]?.client_image && (
                    <div
                      className={`absolute rounded-full lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] w-[50px] h-[50px] sm:top-[10px] top-[5px] overflow-hidden border-4 border-white cursor-pointer ${
                        selectedIndex === 0 ? "border-yellow-500" : ""
                      }`}
                      onClick={() => handleImageClick(0)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonials?.[0]?.client_image}`}
                        alt={
                          testimonials?.[0]?.alt_text || testimonials?.[0]?.name
                        }
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                  {testimonials?.[1]?.client_image && (
                    <div
                      className={`absolute rounded-full lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] w-[50px] h-[50px] lg:top-[150px] lg:-left-[50px] md:top-[100px] md:-left-[40px] top-[65px] -left-[30px] overflow-hidden border-4 border-white cursor-pointer ${
                        selectedIndex === 1 ? "border-yellow-500" : ""
                      }`}
                      onClick={() => handleImageClick(1)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonials?.[1]?.client_image}`}
                        alt={
                          testimonials?.[1]?.alt_text || testimonials?.[1]?.name
                        }
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                  {testimonials?.[2]?.client_image && (
                    <div
                      className={`absolute rounded-full overflow-hidden border-4 lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] w-[50px] h-[50px] lg:top-[280px] lg:left-[10px] md:top-[200px] md:-left-[20px] top-[120px] -left-[15px]  border-white cursor-pointer ${
                        selectedIndex === 2 ? "border-yellow-500" : ""
                      }`}
                      onClick={() => handleImageClick(2)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonials?.[2]?.client_image}`}
                        alt={
                          testimonials?.[2]?.alt_text || testimonials?.[2]?.name
                        }
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
