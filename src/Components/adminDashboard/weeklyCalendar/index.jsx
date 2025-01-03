import React from "react";
import { Box, useDisclosure, Button, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { FaCalendarAlt } from "react-icons/fa";
import TableWeekly from "./ui/TableWeekly";
import OperatorModal from "./ui/OperatorModal";
import AdminHeader from "../shared/AdminHeader";
import DataSlider from "./ui/DataSlider";
import CustomButton from "@/Common/customeButton/CustomeButton";
import useWeeklyCalendar from "./useWeeklyCalendar";

const WeeklyCalendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);

  const {
    tableData,
    operators,
    programList,
    selectedCell,
    handleCellClick,
    handleOperatorSelect,
    handleDeleteOperator,
    handleSelect,
  } = useWeeklyCalendar({ auth_Admin_token, onClose });

  return (
    <>
      {/* Header */}
      <Box width={{base:"110vw",md:"100%"}} mr={{base:8,md:0}}  display={"flex"} mb={{base:6,md:0}} flexDirection={{base:"column",md:"row"}} justifyContent={{base:"center",md:"space-between"}} alignItems={"center"}>
      <Flex py={2} alignItems="center">
        <AdminHeader
          operator_list={operators.operator_list}
          headerTitle="برنامه هفتگی"
          icon={<FaCalendarAlt />}
          dataSlider={<DataSlider />}
          iconBtnDisply="none"
          BtnDisply="none"
        />
       
      </Flex>
      <Box>
      <CustomButton >فرستادن برنامه</CustomButton>
      </Box>
      </Box>
      <Box  width={{base:"120vw",sm:"100vw",md:"100%"}}>
        {/* Table */}
        <Box overflowX="auto" borderWidth="1px" borderRadius="md" p={4}>
          <TableWeekly
            handleCellClick={(day, shift, index) => {
              handleCellClick(day, shift, index);
              onOpen();
            }}
            tableData={tableData}
            program_list={programList}
          />
        </Box>

        {/* Modal */}
        <OperatorModal
          isOpen={isOpen}
          onClose={onClose}
          operators={operators}
          handleOperatorSelect={handleOperatorSelect}
          program_list={programList}
          selectedCell={selectedCell}
          handleDeleteOperator={handleDeleteOperator}
        />
      </Box>
 
    </>
  );
};

export default WeeklyCalendar;
