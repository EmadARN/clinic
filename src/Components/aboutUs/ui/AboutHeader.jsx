import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const AboutHeader = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      gap={5}
      p={5}
    >
      <Box flex="1" display="flex" justifyContent="center">
        <Image
          src="/images/about.jpg"
          alt="image"
          width={800} 
          height={600}
          style={{ borderRadius: "8px", width: "90%" }}
        />
      </Box>

      <Box flex="1" textAlign="right">
        <Text mb={3} color={"#7563DC"} fontSize={"small"} fontWeight={"600"}>
          با ساید از شر موهای زائد خلاص شو
        </Text>

        <Text
          mb={3}
          fontSize={{ base: "20px", md: "30px" }}
          color="gray.600"
          fontWeight={"bold"}
        >
          درباره ی ما
        </Text>

        <Text fontSize={{ base: "13px", md: "18px" }} color="gray.500">
          ما در مرکز لیزر ساید که مرکز تخصصی لیزر موهای زائد می باشد از بهترین
          دستگاه لیزر مو و اپراتور های مجرب بهره می بریم و در لیزر ساید پنج
          اپراتور مجرب و دو دکتر متخصص پوست مشغول ارائه خدمات به مشتریان گرامی
          هستند.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutHeader;
