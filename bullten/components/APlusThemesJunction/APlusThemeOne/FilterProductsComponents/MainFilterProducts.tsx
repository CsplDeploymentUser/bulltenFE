"use client";
import React, { useEffect, useState } from "react";
import { PriceRangeApi, ProductDataApi } from "@/apis/productsApi";
import ServerProductsComponent from "./ServerProductComponent";
import FilterComponent from "./FilterComponet";
import { useSelector } from "react-redux";

type Props = {
  decodedSlug: string;
};

const MainFilterProducts = ({ decodedSlug }: Props) => {
  const [serverProducts, setServerProducts] = useState<any>({});
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number | null, number | null]>([null, null,]);
  const [filterRange,setFilterRange] =useState<any>({})
  const [ramRange, setRamRange] = useState<[number | null, number | null]>([null, null,]);
  const [selectedDisks, setSelectedDisks] = useState<string[]>([]);
  const currencyCode = useSelector((state: any) => state.currency);


  useEffect(() => {
    const fetchPriceRange = async () => {
      try {
        const response = await PriceRangeApi(decodedSlug,currencyCode?.code?.slug,);
        console.log("response--------<", response)
        if (response?.result) {
          setFilterRange(response.result);
        }
      } catch (err) {
        console.error("Error fetching price range:", err);
      }
    }; 
    if (currencyCode?.code?.slug) {
      fetchPriceRange();
    }
  }, [currencyCode, decodedSlug]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await ProductDataApi(
          currencyCode?.code?.slug,
          decodedSlug,
          selectedDisks,
          selectedLocation,
          ramRange[0] !== null ? ramRange[0].toString() : "",
          ramRange[1] !== null ? ramRange[1].toString() : "",
          priceRange[0] !== null ? priceRange[0].toString() : "",
          priceRange[1] !== null ? priceRange[1].toString() : "");

        setServerProducts(response?.result?.data);
      } catch (err) {
        console.error("Error fetching plans:", err);
      }
    };
    fetchPlans();
  }, [selectedLocation, selectedDisks, priceRange, ramRange, currencyCode]);

  return (
    <div className="container mx-auto py-4 lg:py-8 px-2 lg:px-9">
      <div className="">
        <div
          className="text-center lg:text-4xl text-2xl font-semibold "
          dangerouslySetInnerHTML={{
            __html: serverProducts?.heading,
          }}
        />
        <div
          className="text-center text-xl py-3"
          dangerouslySetInnerHTML={{
            __html: serverProducts?.description,
          }}
        />
      </div>
      <FilterComponent
        setSelectedLocation={setSelectedLocation}
        setPriceRange={setPriceRange}
        setRamRange={setRamRange}
        setSelectedDisks={setSelectedDisks}
        selectedDisks={selectedDisks}
        ramRange={ramRange}
        priceRange={filterRange}
        selectedLocation={selectedLocation}
        ProductsDetails={serverProducts}
        decodedSlug={decodedSlug}
      />
      <ServerProductsComponent ProductsData={serverProducts} />
    </div>
  );
};

export default MainFilterProducts;
