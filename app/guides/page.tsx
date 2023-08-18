import { Metadata } from "next";
import GuideSlotsGuide from "@/components/GuideSlotsGuide";

export const metadata: Metadata = {
  title: "Guides | New Brand",
  description: "Generated by create next app",
};



export default function Guides() {
 
  return (
    <>
      <div className="main__container">
        

       <GuideSlotsGuide />
      </div>
    </>
  );
}
