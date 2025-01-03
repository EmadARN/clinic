import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import RepoertHeader from "./ui/RepoertHeader";
import SessionSummery from "./ui/SessionSummery";
import ReportItem from "./ui/ReportItem";
import useReportsData from "./useReportsData";
import useSummary from "./useSummary";
import useDateRange from "./useDateRange";
import LaserSessionsChart from "./ui/charts/LaserSessionsChart";
import LineChart from "./ui/charts/LineChart";

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
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center" // برای تراز کردن افقی
        align="center" // برای تراز کردن عمودی
        gap={4} // کاهش فاصله بین دو چارت
        mb={10}
      >
        <Box
          w={{ base: "100%", md: "49%" }}
          sx={{
            mt: 8,
            bgColor: "#F7FAFC",
            p: 4,
            rounded: "8px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <LineChart />
        </Box>
        <Box
          w={{ base: "100%", md: "49%" }}
          sx={{
            mt: 8,
            bgColor: "#F7FAFC",
            p: 4,
            rounded: "8px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <LaserSessionsChart />
        </Box>
      </Flex>

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
