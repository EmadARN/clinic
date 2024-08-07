import { Box, Button, Flex, IconButton, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Header from "./widgets/Header";
import Body from "./widgets/Body";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Bottom from "./widgets/Bottom";
import { Item } from "./widgets/Items";
import { MdExitToApp } from "react-icons/md";

const SideBarDashboard = ({
  admintDatas,
  receptionDatas,
  h,
  textHead,
  active,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          backgroundColor: "rgba(255,255,255,0.1) !important",
          border: "1px solid lightgray!important",
          h,
          position: "relative",
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },

        "& .ps-menu-button:active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} width={isSmallScreen ? "110%" : "250px"}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <IoIosArrowBack /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "gray",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <img
                  alt="profile-user"
                  width="40px"
                  height="40px"
                  src={`/images/logo.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
                <IconButton
                  sx={{}}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <IoIosArrowForward />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && <Header textHead={textHead} />}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Body
              selected={selected}
              setSelected={setSelected}
              admintDatas={admintDatas}
              receptionDatas={receptionDatas}
              isCollapsed={isCollapsed}
            />
          </Box>
          {!isCollapsed && <Bottom active={active} />}
          <Button
            sx={{
              all: "unset",
              w: "100%",
              "&:hover": {
                bgColor: "transparent",
              },
              position: "absolute",
              bottom: 0,
            }}
          >
            <Item
              colorHover={"#ff0014"}
              color={"#f13f4d"}
              title="خروج از حساب کاربری"
              to="/team"
              icon={<MdExitToApp />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
          </Button>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBarDashboard;
