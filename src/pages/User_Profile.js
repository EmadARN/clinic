import React from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import Image from "next/image";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

const User_Profile = () => {

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      bgColor="#F7F7F7"
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
    >
      <Box mb={3} mt="50px">
        <Image
          src="/images/logo.png"
          width={50}
          height={50}
          alt="image cant load"
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        mb={3}
        width={{ base: "100%", md: "45%" }}
      >
        <Text color="#ddd" fontSize={{ base: "xs", sm: "sm" }}>
          خوش آمدید
        </Text>
      </Box>

      <Box
        mb={6}
        width={{ base: "100%", md: "45%" }}
        p="4"
        display="flex"
        flexDirection={"column"}
        bgColor={"#fff"}
        borderRadius="10px"
      >
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Section_title section_title="موجودی کیف پول شما"></Section_title>
        </Box>

        <Box display="flex" justifyContent="center">
          <Text fontWeight={"bold"} color={"#888"}>
            0تومان
          </Text>
        </Box>
      </Box>

      <Box
        width={{ base: "100%", md: "45%" }}
        p={4}
        display="flex"
        flexDirection={"column"}
        bgColor={"#fff"}
        borderRadius="10px"
        mb={6}
      >
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Section_title section_title="نوبت بعدی شما"></Section_title>
        </Box>

        <Box
          mb={6}
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Image
            src="/images/download.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />

          <Text mt={2} color={"#7777"}>
            تا الان نوبتی برای شما ثبت نشده است
          </Text>
        </Box>

        <Box display="flex" justifyContent="center" width="100%">
          <BtnReservation
            rounded="20px"
            text="رزرو نوبت"
            width="90%"
          ></BtnReservation>
        </Box>
      </Box>

      <Box
        width={{ base: "100%", md: "45%" }}
        bgColor="#fff"
        borderRadius="10px"
        p={4}
        display="flex"
        flexDirection={"column"}
      >
        <Box
          w={"100%"}
          display="flex"
          justifyContent={"space-between"}
          as="button"
        >
          <Box mb={4}>
            <Text fontSize={{ base: "xs", md: "sm" }}>گزارش جلسات</Text>
          </Box>

          <Box>
            <IoIosArrowBack />
          </Box>
        </Box>

        <hr />

        <Box
          w={"100%"}
          display="flex"
          justifyContent={"space-between"}
          as="button"
          mb={4}
        >
          <Box mt={2}>
            <Text fontSize={{ base: "xs", md: "sm" }}> ناحیه کاربری</Text>
          </Box>

          <Box mt={2}>
            <IoIosArrowBack />
          </Box>
        </Box>

        <hr />

        <Box mt={1} w={"100%"} display="flex" justifyContent={"flex-start"}>
          <Button
            fontSize={{ base: "xs", md: "sm" }}
            variant={"ghost"}
            color={"red"}
            leftIcon={<IoExitOutline size={"18px"} />}
          >
            خروج از حساب کاربری
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default User_Profile;
