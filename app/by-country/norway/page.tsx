import { Metadata } from "next";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Norway from "@/components/country/Norway";

export const metadata: Metadata = {
  title: "Norwegian Casino | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Norway />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      <GuideSlotsPage />
    </div>
  );
}
