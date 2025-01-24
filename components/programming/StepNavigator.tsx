import React from 'react';

export function StepNavigator({ currentStep, totalSteps, onStepChange }: { currentStep: number, totalSteps: number, onStepChange: (step: number) => void }) {
  const handleNext = () => {
    if (currentStep < totalSteps) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentStep === 1}>Previous</button>
      <span>Step {currentStep} of {totalSteps}</span>
      <button onClick={handleNext} disabled={currentStep === totalSteps}>Next</button>
    </div>
  );
} 