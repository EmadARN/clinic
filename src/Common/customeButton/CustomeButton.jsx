import { Button } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ children, ...props }) => {
  const clickHandler = () => {};
  return (
    <Button
      bg="brand.400"
      color="#fff"
      _hover={{ bg: "puple.100", color: "#fff" }}
      borderRadius="md"
      sx={{
        display: props.display,
        justifyContent: props.justifyContent,
        w: props.w,
      }}
      {...props}
      onClick={props.onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
