import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredProviders from "@/components/providers/FilteredProviders";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Playngo from "@/components/providers/Playngo";

export const metadata: Metadata = {
  title: "Play'n Go | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Playngo />
      {/* <TopBrands /> */}
      <FilteredProviders />
      <GuideSlotsPage />
    </div>
  );
}
