import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import ChartComponent from "./ChartComponent";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

export default function MapComponent() {
  const classes = useStyles();
  const [content, setContent] = React.useState("");
  const [state, setState] = React.useState({
    onions: false,
    carrots: false,
    wheat: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { onions, carrots, wheat } = state;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "90%",
        }}
      >
        <Card className={classes.root}>
          <MapChart
            onion={state.onions}
            carrot={state.carrots}
            wheat={state.wheat}
            setTooltipContent={setContent}
          />
          <ReactTooltip>{content}</ReactTooltip>
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Paper className={classes.supply} elevation={2}>
            <div style={{ textAlign: "center" }}>
              <h3>View Supply chain</h3>
            </div>

            <FormGroup>
              <FormControlLabel
                className={classes.CheckboxStyle}
                control={
                  <Checkbox
                    checked={onions || ""}
                    onChange={handleChange}
                    name="onions"
                    style={{ color: "#9900cc" }}
                  />
                }
                label="Onions"
              />
              <Divider />
              <FormControlLabel
                className={classes.CheckboxStyle}
                control={
                  <Checkbox
                    checked={carrots || ""}
                    onChange={handleChange}
                    name="carrots"
                    style={{ color: "#FF5533" }}
                  />
                }
                label="Carrots"
              />
              <Divider />
              <FormControlLabel
                className={classes.CheckboxStyle}
                control={
                  <Checkbox
                    checked={wheat || ""}
                    onChange={handleChange}
                    name="wheat"
                    style={{ color: "#008000" }}
                  />
                }
                label="Wheat"
              />
            </FormGroup>
          </Paper>
          <Paper className={classes.description} elevation={2}>
            <div style={{ textAlign: "center" }}>
              <h3>Decisions Required</h3>
            </div>
            <Divider />
            <ol>
              <li>
                Increase in buffer stock at Colombo warehouse by 29th October.
              </li>
              <li>Source from alternative wheat supplier immediately</li>
            </ol>
          </Paper>
        </div>
        <ChartComponent />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight: "300%",
    marginTop: "15%",
    marginRight: "5%",
    marginLeft: "3%",
  },
  description: {
    height: "100%",
    width: "40%",
    marginTop: "5%",
    marginRight: "6%",
  },
  CheckboxStyle: { paddingLeft: "25%" },
  supply: {
    height: "100%",
    width: "40%",
    marginTop: "5%",
    marginLeft: "3%",
  },
}));
