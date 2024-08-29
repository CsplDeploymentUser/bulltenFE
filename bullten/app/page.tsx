import {
  HomePageBannerApi,
  SupportSectionAPI,
  TestimonialsApi,
} from "@/apis/HomePageApis";
import BannerSlider from "@/components/ServerSideComponents/BannerComponent/BannerSlider";
import FaqSection from "@/components/ServerSideComponents/HomePageComponents/FaqsectionComponent";
import SupportSection from "@/components/ServerSideComponents/HomePageComponents/SupportComponent";
import WhyBulletinComponent from "@/components/ServerSideComponents/HomePageComponents/WhyBulletinComponent";
import WordPressHoistingComponent from "@/components/ServerSideComponents/HomePageComponents/WordpressHostingComponent";
import Image from "next/image";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import BlogsComponent from "@/components/ServerSideComponents/HomePageComponents/BlogComponent";
import CounterComponent from "@/components/ServerSideComponents/HomePageComponents/CounterComponent";
import TestimonialSlider from "@/components/ServerSideComponents/HomePageComponents/TestimonialsComponents/TestimonialSlider";
import ChatService from "@/components/ServerSideComponents/HomePageComponents/ChatService";
import OurPatnarComponent from "@/components/ServerSideComponents/HomePageComponents/TestimonialsComponents/OurPatnarComponent";
import DomainSearchComponent from "@/components/ServerSideComponents/HomePageComponents/SearchComponent";
import TrustedCompaniesLogos from "@/components/ServerSideComponents/HomePageComponents/TrustedCompaniesLogos";
import ServerFeatures from "@/components/ServerSideComponents/HomePageComponents/ServerFeatures";
import WhyChooseWebHosting from "@/components/ServerSideComponents/HomePageComponents/WhyChooseWebHosting";
import OperatingComponent from "@/components/ServerSideComponents/HomePageComponents/OperatingComponent";
import TestimonialsSection from "@/components/ServerSideComponents/HomePageComponents/TestimonialsComponents/NewTestimonial";

export default async function Home() {
  const homePageBannerContentApi = await HomePageBannerApi();
  const TestimonialsContent = await TestimonialsApi();
  const SupportSectionContent = await SupportSectionAPI();

  return (
    <main className="w-full">
      <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
        {homePageBannerContentApi?.result?.Active === true &&
          homePageBannerContentApi?.result?.banner?.length > 0 && (
            <BannerSlider banners={homePageBannerContentApi?.result?.banner} />
          )}
      </Suspense>

      {/* Main container with consistent spacing */}
      <div className="container mx-auto mt-6">
        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <DomainSearchComponent />
        </Suspense> */}
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <TrustedCompaniesLogos />
        </Suspense>
        {/* <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <SupportSection supportContent={SupportSectionContent?.result} />
        </Suspense> */}
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WhyBulletinComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <OurPatnarComponent />
        </Suspense>{" "}
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WordPressHoistingComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <OperatingComponent />
        </Suspense>{" "}
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <CounterComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <ServerFeatures />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <ChatService />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <WhyChooseWebHosting />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <BlogsComponent />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<Skeleton height={"50%"} width={"100%"} />}>
          <TestimonialsSection
            TestimonialsContent={TestimonialsContent?.result}
          />
        </Suspense>
      </div>
    </main>
  );
}
