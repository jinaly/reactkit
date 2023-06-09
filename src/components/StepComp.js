import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepone from "./Stepone";
import Stepthree from "./Stepthree";
import Steptwo from "./Steptwo";

const steps = ["Step1", "Step2", "Step3"];

const StepComp = (props) => {
  const [activeStep, setActiveStep] = React.useState(1);
  // const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  // if (!isStepOptional(activeStep)) {
  //   You probably want to guard against something like this,
  //   it should never occur unless someone's actively trying to break something.
  //   throw new Error("You can't skip a step that isn't optional.");
  // }

  // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // setSkipped((prevSkipped) => {
  //   const newSkipped = new Set(prevSkipped.values());
  //   newSkipped.add(activeStep);
  //   return newSkipped;
  // });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            // labelProps.optional = (
            // <Typography variant="caption">Optional</Typography>
            // );
            // }
            // if (isStepSkipped(index)) {
            // stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* {activeStep === steps.length ? ( */}
        {/* <React.Fragment> */}
        {/* <Typography sx={{ mt: 2, mb: 1 }}>finish steps</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box> */}
        {/* </React.Fragment> */}
        {/* ) : ( */}
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {/* test0 {activeStep + 1} */}
            activeStep
            {(() => {
              switch (activeStep) {
                case 1:
                  return <Stepone />;
                case 2:
                  return <Steptwo />;
                case 3:
                  return <Stepthree />;
                default:
                  return null;
              }
            })()}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
        {/* )} */}
      </Box>
    </div>
  );
};

export default StepComp;
