import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import list from "../jsonData/list.json";
import dailyExpress from "../assets/images/dailyExpress.png";
import mhd from "../assets/images/mhd.jpg";

export default function ListComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.listHeader}>
          <Typography
            style={{ display: "flex", justifyContent: "flex-start" }}
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Global Flash
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            <i
              style={{
                fontSize: "15px",
                marginRight: "5px",
              }}
              class="fas fa-sort-amount-up"
              // onClick={sortList}
            ></i>
            Sort
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            <i
              style={{
                fontSize: "15px",
                marginRight: "5px",
              }}
              class="fas fa-filter"
            ></i>
            Filter
          </Typography>
        </div>
        <div className={classes.listDropdown}>
          <Typography className={classes.text} color="textSecondary">
            Date
            <ArrowDropDownIcon className={classes.arrowIcon} />
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            Severity
            <ArrowDropDownIcon className={classes.arrowIcon} />
          </Typography>
          <Typography className={classes.text} color="textSecondary">
            Risk Category
            <ArrowDropDownIcon className={classes.arrowIcon} />
          </Typography>
        </div>
        <Divider style={{ marginTop: "10px" }} />
        {list.length &&
          list.map((l) => {
            return (
              <>
                <div className={classes.listButton}>
                  <div className={classes.button}>
                    <span style={{ margin: "auto", color: "#fff" }}>
                      RELIABILITY: 100%
                    </span>
                  </div>
                  <div className={classes.severityButton}>
                    <span style={{ margin: "auto", color: "#fff" }}>
                      SEVERITY: 50%
                    </span>
                  </div>
                  {l.news == "dailyExpress" && (
                    <img
                      style={{ width: "12%", height: "12%", marginLeft: "30%" }}
                      src={dailyExpress}
                    />
                  )}
                  {l.news == "mhd" && (
                    <img
                      style={{
                        width: "6%",
                        height: "6%",
                        marginLeft: "30%",
                      }}
                      src={mhd}
                    />
                  )}
                  {l.twitter && (
                    <div style={{ marginLeft: "10%", marginTop: "1%" }}>
                      <i class="fab fa-twitter"></i>
                    </div>
                  )}
                </div>
                <div>
                  <h3>{l.title}</h3>
                  <div className={classes.displayRow}>
                    <span style={{ width: "90%" }}>{l.description}</span>
                    <span style={{ color: "grey" }}>{l.updated}</span>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <span style={{ color: "grey", fontStyle: "italic" }}>
                    {l.name}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    style={{ marginRight: "20px" }}
                    variant="contained"
                    disabled
                  >
                    SUPPLY
                  </Button>
                  <Button variant="contained" disabled>
                    {l.action}
                  </Button>
                </div>
                <Divider style={{ marginTop: "10px" }} />
              </>
            );
          })}
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
    maxHeight: "200%",
    marginTop: "8%",
    marginLeft: "3%",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: "20px",
  },
  arrowIcon: {
    display: "inline-flex",
    verticalAlign: "top",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    backgroundColor: "#FFBC3B",
    borderRadius: "15px",
    height: "30px",
    width: "150px",
    marginRight: "5px",
    marginBottom: "5px",
  },
  listDropdown: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "10px",
  },
  severityButton: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    backgroundColor: "#FF7878",
    borderRadius: "15px",
    height: "30px",
    width: "150px",
    marginRight: "5px",
    marginBottom: "5px",
  },
}));
