import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph = (props) => {
  // Chart Details
  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderwidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "State vs NoOfCases "
      }
    }
  };

  let labels = [];
  let confirmCase = [];
  let recoverCase = [];

  props.details.forEach((element) => {
    labels.push(element.state);
    confirmCase.push(element.confirmed);
    recoverCase.push(element.recovered);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Confirmed",
        data: confirmCase,
        borderColor: "rgb(53,162,235)",
        backgroundColor: "rgba(53,162,235,0.5)"
      },
      {
        label: "Recovered",
        data: recoverCase,
        borderColor: "rgb(225,99,132)",
        backgroundColor: "rgba(225,99,132,0.5)"
      }
    ]
  };
  return (
    <div className="chart">
      <h1>Covid Confirmed and Recovered Cases in india</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
