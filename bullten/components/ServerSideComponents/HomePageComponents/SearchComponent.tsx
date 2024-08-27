import { DomainsearchApi } from "@/apis/HomePageApis";
import SearchSection from "@/components/ClientSideComponents/HomePageComponents/SearchSection";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import SubParaGraph from "@/components/CommonComponents/HeadingComponents/SubParaGraph";

const DomainSearchComponent = async () => {
  const DomainsearchApiResponse = await DomainsearchApi();

  return (
    <>
      {DomainsearchApiResponse?.result?.Active === true ? (
        <section className="flex flex-col  justify-center px-4 py-4 w-full mx-auto container">
          <div className="bg-bullt-secondary px-4 py-4 rounded-md border border-bullt-primary/[0.1] -mt-24 z-10 lg:max-w-4xl w-full mx-auto">
            {DomainsearchApiResponse?.result?.data?.label ? (
              <SloganHeadingComponent
                paddingTop={1}
                alignmentType={1}
                hoverEffect="text-bullt-tertiary"
              >
                {DomainsearchApiResponse?.result?.data?.label}
              </SloganHeadingComponent>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.heading ? (
              <MainHeadingComponent alignmentType={1}>
                {DomainsearchApiResponse?.result?.data?.heading}
              </MainHeadingComponent>
            ) : null}
            {DomainsearchApiResponse?.result?.data?.description ? (
              <ParaGraphText paddingTop={1}>
                {DomainsearchApiResponse?.result?.data?.description}
              </ParaGraphText>
            ) : null}

            <SearchSection data={DomainsearchApiResponse?.result?.data} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DomainSearchComponent;
