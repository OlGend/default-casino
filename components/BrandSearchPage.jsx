"use client";
import {useState} from "react";

import { useSelector } from "react-redux";
import { Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";
import Loader from "./Loader";

export default function BrandSearchContainer() {
  const showBrands = useSelector((state) => state.brands.showBrands);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="main__container search-page">
      <h1 className="pt-12">Search results</h1>
      {isLoading ? (
                <Loader />
              ) : (
                <>
      {showBrands.length > 0 && (
        <ul className="p-0 flex flex-wrap pt-6">
          {showBrands.map((brand) => (
            <li
              className="mb-2 flex flex-col basis-[19%] card-brand"
              key={brand.id}
            >
              <div className="brandImage">
                <Image
                  className="ml-auto mr-auto mb-2 w-auto"
                  src={extractReviewImage(brand.content.rendered)}
                  alt={brand.title.rendered}
                  width={150}
                  height={75}
                  loading="lazy"
                />
              </div>
              <div className="brandContent p-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: extractReviewBonus(brand.content.rendered),
                  }}
                />
                <div className="buttons">
                  <Link
                    className="btn btn-secondary flex justify-center items-center mb-1"
                    href={`/bonuses/${brand.id}`}
                  >
                    <Eye className="mr-1" size={20} />
                    Read Review
                  </Link>
                  <Link
                    className="btn btn-primary flex justify-center items-center mt-1"
                    href={extractLink(brand.content.rendered)}
                  >
                    <Play className="mr-2" size={20} />
                    Play Now
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      </>
      )}
    </div>
  );
}
