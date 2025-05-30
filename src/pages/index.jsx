import BackToUp from "@/Common/backToUp/BackToUp";
import Banner from "@/Components/landing/banner";
import Faqs from "@/Components/landing/faqs";
import { GuideSignup } from "@/Components/landing/guideSignup";
import Header from "@/Components/landing/header";
import { LaserBefore } from "@/Components/landing/laserBefore";
import WhyLaser from "@/Components/landing/whyLaser";
import Layout from "@/Layout";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Layout bgColor={"#F7F7F7"}>
      <Grid pt={{ base: "100px", lg: "50px" }}>
        <Header />
      </Grid>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} my={8}>
        <GridItem colSpan={12} mt={{ base: 24, md: 24 }}>
          <Banner />
        </GridItem>
        <GridItem colSpan={12} my={12}>
          <WhyLaser />
        </GridItem>
      </Grid>
      <Box my={8}>
        <LaserBefore />
      </Box>
      <Box my={8}>
        <GuideSignup />
      </Box>
      <Box my={8}>
        <Faqs />
      </Box>
      <Box>
        <BackToUp />
      </Box>
    </Layout>
  );
};

export default Home;
