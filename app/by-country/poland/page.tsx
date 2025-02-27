import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Poland from "@/components/country/Poland";

export const metadata: Metadata = {
  title: "Polish Casino | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Poland />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      <GuideSlotsPage />
    </div>
  );
}
