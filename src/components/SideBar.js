import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListComponent from "../components/ListComponent";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MapComponent from "./MapComponent";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import logo from "../assets/images/logo.png";
import notificationData from "../jsonData/notification.json";
import avatar from "../assets/images/avatar.jpg";
const drawerWidth = 240;

export default function SideBar() {
  const classes = useStyles();
  const [notification, setNotification] = React.useState(false);

  const showNotification = () => {
    setNotification(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div style={{ flex: 1 }}>
            <Typography variant="h5" noWrap>
              Overview
            </Typography>
          </div>
          <div className={classes.appBarContainer}>
            <SearchIcon style={{ color: "grey", marginRight: "20px" }} />
            <Badge
              badgeContent={notificationData.length}
              style={{ marginRight: "20px" }}
              color="primary"
            >
              <NotificationsIcon
                style={{ color: "grey", marginRight: "-2px" }}
                onClick={showNotification}
              />
            </Badge>
            <span style={{ marginRight: "10px" }}>Jones Ferdinand</span>
            <Avatar alt="Jones" src={avatar} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div className={classes.sidebarLogo}>
          <img className={classes.appLogo} src={logo} />
          <h3 style={{ color: "#55B165", marginLeft: "10px" }}> Kavida.ai </h3>
        </div>
        <Divider />
        <List>
          {[
            "Overview",
            "Intelligence",
            "Decision Support",
            "Disruption Simulation",
            "Disaster Scenario",
            "Report Generator",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-chart-pie"
                  />
                )}
                {index === 1 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-ticket-alt"
                  />
                )}
                {index === 2 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-lightbulb"
                  />
                )}
                {index === 3 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-users"
                  />
                )}
                {index === 4 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-list-alt"
                  />
                )}
                {index === 5 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-list-alt"
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Settings"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && (
                  <i
                    style={{ color: "#909090", fontSize: "20px" }}
                    class="fas fa-cog"
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.container}>
        <ListComponent />
        <MapComponent showNotification={notification} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#fff",
    color: "#000000",
  },
  appBarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sidebarLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "60px",
    marginTop: "-15%",
  },
  appLogo: { width: "60px", height: "60px" },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#363740",
    color: "#d9d9d9",
    "&:hover": {
      "& $child": {
        cursor: "pointer",
        color: "#d9d9d9",
      },
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
