import { socialMedias } from "@/constants";
import { Box, Flex, Icon, Link, Tooltip } from "@chakra-ui/react";

const SocialMedias = () => {
  return (
    <Box py={6}>
      <Flex justify="center" gap={{ base: 4, lg: 8 }} width="100%">
        {socialMedias.map((media) => (
          <Tooltip label={media.name} key={media.name} aria-label={media.name}>
            <Link
              href={media.link}
              isExternal
              position="relative"
              display="inline-block"
              width="40px"
              height="40px"
              overflow="hidden"
              _hover={{
                ".colorIcon": {
                  top: "0",
                  opacity: 1,
                },
                ".bwIcon": {
                  top: "-100%",
                },
              }}
              transition="all 0.3s ease"
            >
              {/* آیکون سیاه و سفید */}
              <Icon
                as={media.icon}
                boxSize={8}
                color="#ddd"
                position="absolute"
                top="0"
                left="0"
                zIndex={1}
                className="bwIcon"
                transition="top 0.5s ease"
              />
              {/* آیکون رنگی */}
              <Icon
                as={media.icon}
                boxSize={8}
                color={media.color}
                position="absolute"
                top="100%"
                left="0"
                opacity={0}
                className="colorIcon"
                transition="top 0.5s ease, opacity 0.3s ease"
              />
            </Link>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  );
};

export default SocialMedias;
