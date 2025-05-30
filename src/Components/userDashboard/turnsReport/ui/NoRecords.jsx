import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { FaNewspaper } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import SectionTitle from "@/Common/sectionTitle";

const NoRecords = ({ dispatch, setSteperState }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100%"}
      h={"100vh"}
      bgColor={"#F7F7F7"}
    >
      <Box mb={4} textAlign={"right"} w={{ base: "100%", md: "40%" }}>
        <Button
          leftIcon={<FaLongArrowAltRight />}
          onClick={() => {
            dispatch(setSteperState(0));
          }}
        >
          بازگشت
        </Button>
      </Box>
      <Box
        w={{ base: "100%", md: "40%" }}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        h={"auto"}
        p={3}
      >
        <Box textAlign={"right"}>
          <SectionTitle section_title="گزارش جلسات"></SectionTitle>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Box mt={2} mb={6}>
            <FaNewspaper size={"3rem"} />
          </Box>

          <Box mt={2} mb={6}>
            <Text
              fontWeight={"bold"}
              fontSize={{ sm: "13px", md: "15px" }}
              sx={{ color: "#555" }}
            >
              جلسه ای جهت نمایش وجود ندارد
            </Text>
          </Box>

          <Box mt={2} maxWidth={"70%"}>
            <Text textAlign={"center"}>
              شما میتوانید تاریخ جلسات،اپراتور،نواحی لیزر شده و ... را در این
              قسمت مشاهده کنید
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default NoRecords;
