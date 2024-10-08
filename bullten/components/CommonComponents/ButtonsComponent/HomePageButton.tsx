"use client";

// import LoadingStateComponent from "@/components/ServerSideComponent/LoadingComponent/loadingComponent";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  alignmentType: number;
  buttonText: string;
  route: string;
};

const HomePageButtonOne = ({ alignmentType, buttonText, route }: Props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName == route) {
      router.push(route);
    } else {
      setLoading(true);
      router.push(route);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pathName]);

  return (
    <div
      className={`w-full ${
        alignmentType == 1
          ? "lg:text-start"
          : alignmentType == 2
          ? "lg:text-center"
          : "lg:text-end"
      } ${
        alignmentType === 1
          ? "text-start"
          : alignmentType === 2
          ? "text-center"
          : "text-center"
      }`}
    >
      <button
        className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-5 py-2"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {/* {loading && <LoadingStateComponent />} */}
    </div>
  );
};

export default HomePageButtonOne;
