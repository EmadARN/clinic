import React, { useEffect } from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";
import { ReservationList } from "../reservationList";
const PaidTurns = ({ display }) => {
  const [{ auth_Employee_token } = cookies] = useCookies([
    "auth_Employee_token",
  ]);
  const dispatch = useDispatch();
  const { todayReserve, cutomerList } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch]);

  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      mt={10}
      w={{ base: "100vw", md: "100%" }}
    >
      <AccordionItem>
        <AccordionButton display={"flex"} justifyContent={"space-between"}>
          <Box>نوبت های تکمیل شده</Box>
          <Box as="span" textAlign="right">
            نمایش <AccordionIcon />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4} px={0}>
          <Stack>
            <ReservationList
              display={display}
              isDisabled={true}
              todayReserve={todayReserve}
              isPaymentTable={true}
              cutomerList={cutomerList}
            />
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PaidTurns;
