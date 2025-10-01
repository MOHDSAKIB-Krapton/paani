"use client";

import { useRef, useState } from "react";
import WaterOrderBanner from "@/components/water-order-banner";
import InquiryForm from "@/components/common/inquirey-form";

export default function WaterOrderBannerClient() {
  const formRef = useRef<HTMLDivElement>(null);
  const [preFillData, setPreFillData] = useState({
    quantity: "1L",
    bottleType: "Purelay",
  });

  const handleOrderNow = (quantity: string, bottleType: string = "Purelay") => {
    setPreFillData({ quantity, bottleType });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <WaterOrderBanner onOrderNow={handleOrderNow} />
      <div ref={formRef}>
        <InquiryForm
          variant="section"
          title="Inquire About Our Products"
          description="Fill out the form below to receive more information."
          preFillData={preFillData}
        />
      </div>
    </>
  );
}
