import { headerApi, HeaderCountryApi } from "@/apis/HomePageApis";
import HeaderMenu from "@/components/ClientSideComponents/HeaderComponents/HeaderMenu";

const Header: React.FC = async () => {
  const headerResponse = await headerApi();
  const headerCurrency = await HeaderCountryApi();
  console.log("headerCurrency", headerCurrency);
  if (headerResponse?.result?.hasOwnProperty("error")) {
    console.log("error in header API");
  } else {
    // console.log(headerResponse?.result?.header);
  }

  return (
    <HeaderMenu
      headerResponse={headerResponse}
      headerCurrency={headerCurrency?.result?.currency}
    />
  );
};

export default Header;
