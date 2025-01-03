import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

const style = {
  "::placeholder": {
    color: "#ccc",
    fontSize: { base: "12px", md: "16px" },
  },
  _focus: {
    borderColor: "brand.400",
    boxShadow: "0 0 0 2px #ab9dfa",
  },
};
const Inputs = ({ label, submitHandler, inputHandler, formInput,loading }) => {
  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          mr: { base: 0, md: 20 },
          pt: { base: 0, md: 6 },
          color: "#fff",
        }}
      >
        <Text
          sx={{ fontWeight: "bold", fontSize: { base: "14px", md: "24px" } }}
        >
          {label}
        </Text>
      </Box>
      <Box mt={{ base: 6, md: 0 }}>
        <FormLabel
          sx={{ color: "#fff", fontSize: { base: "12px", md: "16px" } }}
        >
          نام کاربری
        </FormLabel>
        <Input
          sx={style}
          type="text"
          placeholder="نام کاربری"
          onChange={inputHandler}
          name="username"
          value={formInput.userName}
        />
      </Box>
      <Box mt={{ base: 3, md: 0 }}>
        <FormLabel
          sx={{ color: "#fff", fontSize: { base: "12px", md: "16px" } }}
        >
          رمز ورود
        </FormLabel>
        <Input
          sx={style}
          type="password"
          placeholder="رمز ورود"
          onChange={inputHandler}
          name="password"
          value={formInput.password}
        />
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} mt={4}>
        <Button sx={{ w: "30%" }} type="submit">
         {loading ?"...":"تایید"}
        </Button>
      </Flex>
    </form>
  );
};

export default Inputs;
