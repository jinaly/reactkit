import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import Stepone from "./Stepone";
import Stepthree from "./Stepthree";
import Steptwo from "./Steptwo";

const MainStep = () => {
  const stepperss = ["Step1", "Step2", "Step3"];

  const [steps, setSteps] = useState(0);

  const stepSwitcher = () => {
    switch (steps) {
      case 0:
        return <Stepone />;
      case 1:
        return <Steptwo />;
      case 2:
        return <Stepthree />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (steps < 3) {
      setSteps((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (steps >= 1) {
      setSteps((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div>
        <Stepper activeStep={steps}>
          {stepperss.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      MainStep
      {stepSwitcher()}
      {/* {steps === 1 ? (
          <Button disabled>Back</Button>
        ) : (
          <Button onClick={handleBack}>Back</Button>
        )} */}
      <Button disabled={steps === 0} onClick={handleBack}>
        Back
      </Button>
      {/* {steps === 3 ? (
        <Button disabled>Next</Button>
      ) : (
        <Button onClick={handleNext}>Next</Button>
      )} */}
      <Button disabled={steps === 2} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default MainStep;
