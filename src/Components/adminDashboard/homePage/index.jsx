import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import HeaderDetails from "./ui/HeaderDetails";
import CustomerTable from "./ui/CustomerTable";
import FinancialReports from "./ui/financialReports/FinancialReports";
import TodayIncomeChart from "./ui/charts/TodayIncomeChart";
import TodayIncomeDoughnut from "./ui/charts/TodayIncomeDoughnut";
import useAdminData from "./logic/useAdminData";
import useFinancialProcessing from "./logic/useFinancialProcessing";
import useFinancialData from "./logic/useFinancialData";

const Home = () => {
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const {
    dateReserve,
    customerListAdmin,
    dateRanges,
    dataRangeStatus,
    operatorsDate,
  } = useSelector((store) => store.adminDashboard);

  // Custom hooks
  useAdminData(auth_Admin_token, dateRanges, dataRangeStatus);
  const { totalPaidAmount, totalAmount } = useFinancialData(dateReserve);
  const { filteredOperators } = useFinancialProcessing(
    operatorsDate,
    dateReserve
  );

  return (
    <>
      <Box sx={{ py: 6 }}>
        <HeaderDetails />
      </Box>
      <Box sx={{ bgColor: "#F7FAFC", p: 4, rounded: "8px" }}           boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <FinancialReports
          morningShiftLabel="شیفت صبح"
          afternoonShiftLabel="شیفت بعد از ظهر"
          totalPaidAmountThisMonth={filteredOperators.mShiftOperators}
          totalAmountThisMonth={filteredOperators.aShiftOperators}
        />
      </Box>
      <Box sx={{ mt: 8, bgColor: "#F7FAFC", p: 4, rounded: "8px" }}          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <FinancialReports
          morningShiftLabel="تخمین در آمد روز (پرداخت شده)"
          afternoonShiftLabel="در آمد روز تا این لحظه (رزرو شده)"
          totalPaidAmountThisMonth={totalPaidAmount}
          totalAmountThisMonth={totalAmount}
        />
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="space-around"
        align="center"
        gap={8}
        mb={10}
        sx={{ mt: 8, bgColor: "#F7FAFC", p: 4, rounded: "8px" }}          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"

      >
        <Box w={{ base: "100%", md: "20%" }} h="100%" maxW="400px" maxH="300px">
          <TodayIncomeDoughnut
            totalPaidAmountThisMonth={totalPaidAmount}
            totalAmountThisMonth={totalAmount}
          />
        </Box>
        <Box w={{ base: "100%", md: "50%" }} h="100%" maxW="400px" maxH="300px">
          <TodayIncomeChart
            totalPaidAmountThisMonth={totalPaidAmount}
            totalAmountThisMonth={totalAmount}
          />
        </Box>
      </Flex>
      <CustomerTable
        dateReserve={dateReserve}
        customerListAdmin={customerListAdmin}
      />
    </>
  );
};

export default Home;
