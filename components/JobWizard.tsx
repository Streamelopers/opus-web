import { Step, Steps, useSteps } from "chakra-ui-steps";
import { StepProps } from "chakra-ui-steps/dist/components/Step/index";
import { Flex, Text } from "@chakra-ui/react";

const content = (
  <Flex py={4}>
    <Text>ABC</Text>
  </Flex>
);

const steps = [
  { label: "Step 1", description: "some content" },
  { label: "Step 2", description: "some content 2" },
  { label: "Step 3", description: "some content 3" }
];

export const JobWizard = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0
  });

  return (
    <>
      <Steps activeStep={activeStep}>
        {steps.map((step: StepProps) => (
          <Step label={step.label} key={step.label}>
            {step.description}
          </Step>
        ))}
      </Steps>
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Previous</button>
    </>
  );
};
