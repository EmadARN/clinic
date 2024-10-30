import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import { dataForMap } from "@/constants";

const OutputInformation = ({ confrimInfoDetail ,loading,error}) => {


  if (loading) {
    return <Text>در حال بارگذاری...</Text>;
  }

  if (error) {
    return <Text>خطا در بارگذاری داده‌ها</Text>;
  }


  if (!confrimInfoDetail || !confrimInfoDetail.customer) {
    return <Text>داده‌ای برای نمایش موجود نیست.</Text>;
  }


  const confrimInfoDetailCustomer = confrimInfoDetail.customer

  const customerInformation = confrimInfoDetail.customer_information











  return (
    <Box
      sx={{
        alignItems: "center",
        m: "auto",
        bgColor: "#fff",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        alignItems="center"
        m="auto"
        display="flex"
        flexDirection="column"
        h="auto"
        p={4}
        w="400px"
        justifyContent="center"
        borderRadius="10px"
      >
        <Box pr={2} textAlign="right" w="100%">
          <Section_title section_title="اطلاعات مرجع"></Section_title>
        </Box>
       { dataForMap(confrimInfoDetailCustomer,customerInformation).map((item) => (
          <Box
            key={item.id}
            display="flex"
            border="1px solid #ddd"
            alignItems="center"
            height="100%"
            width="100%"
            p={3}
          >
            <Box p={3} height="200%" width="30%" bgColor={"#F7F7F7"}>
              <Text
                sx={{
                  textAlign: "center",
                  color: "#222",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </Text>
            </Box>

            <Box width="70%" backgroundColor="#fff">
              <Text
                sx={{
                  textAlign: "center",
                  color: "#222",
                  whiteSpace: "nowrap",
                }}
              >
                {item.value}
              </Text>
            </Box>
            <hr />
          </Box>
        ))} 
      </Box>
    </Box>
  );
};

export default OutputInformation;
