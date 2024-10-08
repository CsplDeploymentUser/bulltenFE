import { serverFeaturesApi } from "@/apis/HomePageApis";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React from "react";

const ServerFeatures = async () => {
  const serverFeaturesData = await serverFeaturesApi();
  const isActive = serverFeaturesData?.result?.Active;

  if (!isActive) return null;

  const { title, description, server_feature, slogen } =
    serverFeaturesData?.result?.data || {};

  return (
    <section className="relative bg-fixed bg-cover">
      <div className=" w-full sm:py-4 py-2 mx-auto flex flex-col items-center lg:px-6 px-0">
        <div className="max-w-4xl text-center text-black">
          <div className="w-full flex items-center justify-center">
            {slogen && (
              <SloganHeadingComponent>{slogen}</SloganHeadingComponent>
            )}
          </div>
          {title && (
            <h2 className="text-3xl font-bold leading-tight -mt-[6px] py-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg leading-relaxed py-2">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 gap-2 my-5 w-full sm:py-6 py-6 bg-gray-100 sm:px-6 px-4">
          {server_feature?.map((feature: any, index: number) => (
            <div
              key={index}
              className="rounded-md relative group sm:px-6 px-3 md:py-6 py-4 shadow-lg overflow-hidden text-center flex flex-col items-start lg:gap-4  gap-0 transition-transform duration-300 ease-in-out lg:h-[210px] md:h-[190px] h-[170px] text-gray-900 hover:text-white bg-white"
            >
              <div className="relative z-10 flex flex-row items-start justify-start gap-6 md:px-4">
                {feature.icon && (
                  <div className="md:w-20 md:h-20 h-16 w-16 mb-4 relative bg-bullt-quaternary rounded-md group-hover:bg-white transition-colors duration-300">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.reverse_icon}`}
                      alt={feature?.alt_text || "Feature Icon"}
                      className="object-contain p-4 text-white group-hover:hidden block fill-current"
                      fill={true}
                    />
                    {feature.reverse_icon && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.icon}`}
                        alt={feature?.alt_text || "Feature Icon on Hover"}
                        className="object-contain p-4 text-white hidden group-hover:block fill-current"
                        fill={true}
                      />
                    )}
                  </div>
                )}
                <h3 className="lg:text-[22px] text-[18px] md:w-[200px] h-auto w-[150px] text-start font-semibold mb-2 line-clamp-2 py-1">
                  {feature?.title}
                </h3>
              </div>

              {feature.description && (
                <p className="text-start sm:text-[16px] text-base leading-relaxed relative z-10 line-clamp-2 px-2">
                  {feature?.description}
                </p>
              )}

              <div
                className={`absolute inset-0 bg-cover bg-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-90 transition-transform duration-700 ease-in-out`}
                style={{
                  backgroundImage: `url('https://img.freepik.com/free-vector/background-design-with-lines-blue-background_1308-4823.jpg?t=st=1724841272~exp=1724844872~hmac=6fbae88717fed9a0c1e99469cd5e7ee6ce7af54b58021f59f166d0b0aa260ac0&w=740')`,
                  backgroundColor: feature?.hover ? "white" : "blue",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerFeatures;
