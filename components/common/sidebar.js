/* eslint-disable react/jsx-key */
"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import GridOnIcon from "@mui/icons-material/GridOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import EventIcon from "@mui/icons-material/Event";
import StoreIcon from "@mui/icons-material/Store";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import HelpIcon from "@mui/icons-material/Help";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const router = useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const routes = {
    Dashboard: "/",
    // 'All categories': '/categories',
    Deals: "/deals",
    Leads: "/leads",
    People: "/people",
    Organizations: "/organizations",
    // 'Activities': '/activities',
    // 'Products': '/products',
    // 'Files': '/files',
    // 'Quick help': '/help',
  };

  const drawer = (
    <div className="sidebar-background">
      <Link
        href="https://github.com/kuldeep2745"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Kuldeep Rathore</h2>
        </div>
      </Link>
      {/* <Toolbar /> */}
      <Divider />
      <List className="sidebar-nav-style">
        {Object.entries(routes).map(([text, route]) => (
          <div className="sidebar-nav-style">
            <ListItem key={text} disablePadding>
              <Link
                href={route}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  style={{ width: "100%" }}
                  // selected={router.pathname === route}
                >
                  <ListItemIcon>
                    {text === "Dashboard" ? (
                      <HomeIcon />
                    ) : //  text === 'All categories' ? <GridOnIcon /> :
                    text === "Deals" ? (
                      <MonetizationOnIcon />
                    ) : text === "Leads" ? (
                      <GpsFixedIcon />
                    ) : text === "People" ? (
                      <PersonIcon />
                    ) : text === "Organizations" ? (
                      <BusinessIcon />
                    ) : (
                      //  text === 'Products' ? <StoreIcon /> :
                      //  text === 'Activities' ? <EventIcon /> :
                      //  text === 'Files' ? <AttachFileIcon /> :
                      <HelpIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {["Quick help"].map((text, index) => (
          <ListItem className="sidebar-nav-style" key={text} disablePadding>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              href="/help"
            >
              <ListItemButton>
                <ListItemIcon>
                  {text === "Quick help" ? <HelpIcon /> : <HelpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "transparent" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/search"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon style={{ marginRight: "5px", color: "black" }} />
            Search
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Content goes here */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
