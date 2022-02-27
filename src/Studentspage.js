import * as React from "react";
import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CodeIcon from "@mui/icons-material/Code";
import TaskIcon from "@mui/icons-material/Task";
// import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Button, ListItemButton } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let response = await axios.get(
        "'http://localhost:3001/Studentspage/get'"
      );
      setData(response.data);
    };
    loadData();
  }, []);
  console.log(data);
  // <------------------------------------>signout<-----------------------------------> //
  const Signout =  () => {
     localStorage.removeItem("token");
    navigate("/");
  };
  //  -------------------------------//
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Students Portal
          </Typography>
          <Button
            sx={{ position: "absolute", right: "1rem" }}
            color="inherit"
            onClick={Signout}
          >
            Signout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          {/*-------------------Home--------------*/}

          <Link to="" style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>

          {/* ----------------task--------------- */}

          <Link to="/Studentspage/task" style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemIcon>
                <TaskIcon />
              </ListItemIcon>
              <ListItemButton>
                <ListItemText primary="Tasks" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <Divider />

          {/*-----------------courses--------------------*/}

        <Link to="/Studentspage/courses" style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemButton>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
        </Link>


       {/*-----------------department--------------------*/}

        {/* <Link to="/Studentspage/department" style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemIcon>
              <PrecisionManufacturingIcon />
            </ListItemIcon>
            <ListItemButton>
              <ListItemText primary="Department" />
            </ListItemButton>
          </ListItem>
        </Link> */}
      </Drawer>

      <Box sx={{height:"100%"}}>
        <Outlet />
      </Box>
    </Box>
  );
}