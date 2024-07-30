import { Box, Button, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Header from "./widgets/Header";
import Body from "./widgets/Body";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Bottom from "./widgets/Bottom";
import { Item } from "./widgets/Items";
import { MdExitToApp } from "react-icons/md";
import { ReseptionTable } from "@/Components/reseptionDashboard/widget/ReseptionTable/ReseptionTable";

const SideBarDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          backgroundColor: "rgba(255,255,255,0.1) !important",
          border: "1px solid lightgray!important",
          h: "90vh",
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
      <Grid h="200px" templateColumns={"repeat(12, 1fr)"}>
        <GridItem colSpan={1}>
          <Sidebar collapsed={isCollapsed}>
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
                    ml="15px"
                  >
                    <img
                      alt="profile-user"
                      width="40px"
                      height="40px"
                      src={`/images/logo.png`}
                      style={{ cursor: "pointer", borderRadius: "10%" }}
                    />
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <IoIosArrowForward />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
              {!isCollapsed && <Header />}
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Body selected={selected} setSelected={setSelected} />
              </Box>
              {!isCollapsed && <Bottom />}
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
                  colorHover={"red"}
                  color={"red"}
                  title="خروج از حساب کاربری"
                  to="/team"
                  icon={<MdExitToApp />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Button>
            </Menu>
          </Sidebar>
        </GridItem>

        <GridItem colSpan={11}>
          <ReseptionTable />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SideBarDashboard;
