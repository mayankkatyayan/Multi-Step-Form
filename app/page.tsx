'use client';
import { useState } from 'react';
import { Button } from './components/ui/button';
import Stepper from './components/ui/Stepper';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import StepWrapper from './components/StepWrapper';
import { Progress } from '@/components/ui/progress';
import { TooltipProvider } from '@/components/ui/tooltip';


const steps = ['Personal Info', 'Address', 'Preferences', 'Review'];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <TooltipProvider>
    <div className="max-w-2xl mx-auto mt-8">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="mt-8">
        <StepWrapper currentStep={currentStep}>
          {currentStep === 0 && <Step1 />}
          {currentStep === 1 && <Step2 />}
          {currentStep === 2 && <Step3 />}
          {currentStep === 3 && <Step4 />}
        </StepWrapper>
        <Progress
          value={(currentStep / steps.length) * 100}
          className="h-2 bg-gray-200 rounded my-4 dark:bg-neutral-800"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded shadow disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-300"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow dark:bg-blue-600 dark:text-neutral-100"
        >
          Next
        </Button>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        Made with ❤️ by Mayank Katyayan
      </div>
    </div>
    </TooltipProvider>
  );
}
