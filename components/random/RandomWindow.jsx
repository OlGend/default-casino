"use client";
import React, { useState, useEffect } from "react";
import { withTranslation } from 'react-i18next';

import Image from "next/image";
import Link from "next/link";
import { Play, Eye, X } from "phosphor-react";
import { useTopBrands } from "@/components/useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "@/components/brandUtils";

const Modal = ({ t }) => {
  const [showModal, setShowModal] = useState(false);
  const [randomBrand, setRandomBrand] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const brandData = useTopBrands(112);

  const setRandomBrandAndShowModal = () => {
    if (brandData && brandData.length > 0) {
      const randomIndex = Math.floor(Math.random() * brandData.length);
      setRandomBrand(brandData[randomIndex]);
      setShowModal(true);
      setIsActive(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsActive(false);
    localStorage.setItem("lastClosedTime", Date.now().toString());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastClosedTime = Number(
        localStorage.getItem("lastClosedTime") || 0
      );
      if (Date.now() - lastClosedTime > 600000) {
        setRandomBrandAndShowModal();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [brandData]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastClosedTime = Number(
        localStorage.getItem("lastClosedTime") || 0
      );
      if (Date.now() - lastClosedTime > 600000) {
        setRandomBrandAndShowModal();
      }
    }, 600000);

    return () => clearInterval(interval);
  }, [brandData]);


  return (
    showModal &&
    randomBrand && (
      <div className={`modal-overlay ${isActive ? "active" : ""}`}>
        <div className="modal-content relative">
          <p>{t("random.brand")}</p>
          <span className="mb-2">{t("random.description")}</span>
          <div
            className="card-brand flex items-center mt-2"
            key={randomBrand.id}
          >
            <div className="brandImage p-3">
              <Link href={`/bonuses/${randomBrand.id}`}>
                <Image
                  src={extractReviewImage(randomBrand.content.rendered)}
                  alt={randomBrand.title.rendered}
                  width={150}
                  height={75}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="brandContent p-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: extractReviewBonus(randomBrand.content.rendered),
                }}
              />
            </div>
            <div className="buttons p-3">
              <Link
                className="btn btn-secondary flex justify-center items-center mb-1"
                href={`/bonuses/${randomBrand.id}`}
              >
                <Eye className="mr-1" size={20} />
                {t("button.review")}
              </Link>
              <Link
                className="btn btn-primary flex justify-center items-center mt-1"
                href={extractLink(randomBrand.content.rendered)}
              >
                <Play className="mr-1" size={20} />
                {t("button.play")}
              </Link>
            </div>
          </div>
          <button className="absolute top-3 right-3" onClick={closeModal}>
            <X size={20} />
          </button>
        </div>
      </div>
    )
  );
};

export default withTranslation()(Modal);
