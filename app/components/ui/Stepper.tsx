'use client';

import React from 'react';

type StepperProps = {
  steps: string[];
  currentStep: number;
};

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex-1 text-center py-2 px-4 border-b-4 ${
            currentStep === index
              ? 'border-blue-500 text-blue-500 font-bold'
              : 'border-gray-300 text-gray-500'
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
