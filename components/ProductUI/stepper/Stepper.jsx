import React, { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
import Image from "next/image";
import l from "@/components/ProductUI/Image/l.png";
import s from "@/components/ProductUI/Image/s.png";
export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(3);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center  justify-center w-full  max-w-md ">
      {/* Steps */}
      <div className="flex items-center w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 flex items-center text-sm font-medium ${
              index <= currentStep ? "text-yellow-500" : "text-pink-500"
            }`}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300">
              {index <= currentStep ? (
                <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
                  ✓
                </div>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  index < currentStep ? "bg-yellow-500" : "bg-yellow-500"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="w-full text-center  rounded-lg">
        <Image src={s} width={700} height={600} className="object-fit"></Image>
      </div>
    </div>
  );
}
