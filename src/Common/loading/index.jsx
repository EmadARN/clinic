import { Box, Flex, keyframes } from "@chakra-ui/react";

// Define the keyframes for the animation
const bounceMove = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Loading = ({ h, w, bg, noneHeight }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height={noneHeight || "100vh"}
      pt="4px"
    >
      <Box
        w={w || "16px"}
        h={h || "16px"}
        bg={bg || "brand.400"}
        borderRadius="full"
        animation={`${bounceMove} 1s ease-in-out infinite`}
        mr="4px"
      ></Box>
      <Box
        w={w || "16px"}
        h={h || "16px"}
        bg={bg || "brand.400"}
        borderRadius="full"
        animation={`${bounceMove} 1s ease-in-out infinite 0.2s`}
        mx="4px"
      ></Box>
      <Box
        w={w || "16px"}
        h={h || "16px"}
        bg={bg || "brand.400"}
        borderRadius="full"
        animation={`${bounceMove} 1s ease-in-out infinite 0.4s`}
      ></Box>
    </Flex>
  );
};

export default Loading;
