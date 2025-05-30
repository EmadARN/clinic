import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SearchInput from "@/Common/searchInput/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import PatientList from "./patientList";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";
const ResClients = () => {
  const [{ auth_Employee_token } = cookies] = useCookies();

  const dispatch = useDispatch();
  const { todayReserve } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch,auth_Employee_token]);

  return (
    <>
      <Box sx={{ p: 4, display: { base: "none", md: "flex" } }}>
        <SearchInput size={"lg"} placeholder="جستجو در نوبت های روز" />
      </Box>

      <PatientList isPaymentTable={true} todayReserve={todayReserve} />
    </>
  );
};

export default ResClients;
