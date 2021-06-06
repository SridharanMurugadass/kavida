import * as React from "react";
import { Chart } from "react-google-charts";

const ChartComponent = () => {
  return (
    <div style={{ marginLeft: "3%", marginTop: "10%" }}>
      <Chart
        width={"620px"}
        height={"300px"}
        // chartType="BarChart"
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          [
            "test",
            "High Severity CvaR",
            "Medium Severity CvaR",
            "Low Severity CvaR",
            "General Risk Exposure",
            "Expected Risk Exposure",
            { role: "annotation" },
          ],
          ["Week 1", 5, 3, 6, 10, 20, ""],
          ["Week 2", 2, 1, 7, 16, 22, ""],
          ["Week 3", 8, 2, 6, 9, 16, ""],
          ["Week 4", 3, 6, 9, 15, 25, ""],
          ["Week 5", 5, 8, 10, 13, 19, ""],
          ["Week 6", 1, 4, 7, 10, 12, ""],
          ["Week 6", 1, 4, 7, 10, 15, ""],
        ]}
        options={{
          title: "Summary Graph",
          chartArea: { width: "50%" },
          colors: ["#7EAB56", "#6A99D0", "#F5C343", "#4B6733", "#345D8E"],
          isStacked: true,
          hAxis: {
            minValue: 0,
          },
          vAxis: {
            title: "Cvar",
          },
          legend: { position: "bottom", maxLines: 4 },
          bar: { groupWidth: "75%" },
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};
export default ChartComponent;
