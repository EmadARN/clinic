import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import RepoertHeader from "./widgets/RepoertHeader";
import SessionSummery from "./widgets/SessionSummery";
import ReportItem from "./widgets/ReportItem";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import useDateRange from "@/hooks/adminDashboard/reportsComponent/useDateRange";
import useSummary from "@/hooks/adminDashboard/reportsComponent/useSummary";
import useReportsData from "@/hooks/adminDashboard/reportsComponent/useReportsData";

const Reports = () => {
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const { dateReserve, customerListAdmin } = useSelector(
    (store) => store.adminDashboard
  );

  const { dateRange, handleDateChange, handleTodayClick } = useDateRange();
  const summary = useSummary(dateReserve);
  useReportsData(auth_Admin_token, dateRange);

  return (
    <Box px={{ base: 2, md: 8 }}>
      <Box py={{ base: 4, md: 6 }}>
        <RepoertHeader
          from={dateRange.from}
          to={dateRange.to}
          onDateChange={handleDateChange}
          onTodayClick={handleTodayClick}
        />
      </Box>
      <Box>
        <SessionSummery
          completeListLength={summary.completeListLength}
          totalPriceAmount={summary.totalPriceAmount}
        />
      </Box>
      <Box mt={{ base: 6, md: 8 }}>
        <VStack align="stretch" spacing={2}>
          {dateReserve?.complete_list.map((item) => (
            <ReportItem
              key={item.id}
              item={item}
              customerListAdmin={customerListAdmin}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Reports;
