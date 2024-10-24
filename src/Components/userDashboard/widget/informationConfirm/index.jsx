import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import TurnInfo from "./TurnInfo";
import OutputInformation from "./OutputInformation";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";

const ConfirmInfo = ({ page, setPage, slug }) => {
  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <OutputInformation />
      <Box mt={2}>
        <TurnInfo />
      </Box>
      <AcceptBtn
        text="تایید اطلاعات"
        page={page}
        setPage={setPage}
        bgColor={"white"}
        slug={slug}
      />
    </Grid>
  );
};

export default ConfirmInfo;
