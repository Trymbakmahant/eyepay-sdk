"use client";
import React from "react";
import styles from "./dashboard.module.scss";
import { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Dashboard: React.FC = () => {
  const chartData = {
    options: {
      colors: ["#818cf8"],
      chart: {
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        color: "#000",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },

      dataLabels: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      colors: [" #818cf8"],
    },

    series: [
      {
        name: "Sales",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 220],
      },
    ],
  };

  return (
    <>
      <div className={styles.wapper}>
        <div>
          <div className={styles.container1}>
            <div>
              <span className={styles.heading1}>Account info</span>
              <div className={styles.card1}>
                <div className={styles.background1}>
                  <div className={styles.arrange}>
                    <div>
                      <img src="./avatar.png" className={styles.avatar} />
                    </div>
                    <div className={styles.cardData}>
                      <div>
                        <div className={styles.data}>
                          <span
                            style={{
                              color: "#818cf8",
                              padding: "12px",
                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            UserName
                          </span>
                          <span
                            style={{
                              color: "#818cf8",
                              padding: "15px",
                              marginLeft: "12px",
                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            vnooob
                          </span>
                        </div>
                        <div className={styles.data}>
                          <span
                            style={{
                              color: "#818cf8",
                              padding: "12px",
                              fontSize: "19px",

                              fontWeight: "bold",
                            }}
                          >
                            Acc Adress
                          </span>{" "}
                          <span
                            style={{
                              color: "#818cf8",
                              padding: "10px",
                              marginRight: "3px",

                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            0x23dfgrwe33t45.....
                          </span>
                        </div>
                        <div
                          style={{
                            padding: "12px",
                            fontSize: "19px",
                            fontWeight: "bold",
                          }}
                          className={styles.data}
                        >
                          <span
                            style={{
                              color: "#818cf8",
                              padding: "12px",

                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            Amount
                          </span>
                          <span
                            style={{
                              color: "#818cf8",
                              padding: "12px",
                              marginLeft: "24px",
                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            3000 EWTH
                          </span>
                        </div>
                        \{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.background2}>
                  <div
                    style={{
                      color: "rgb(255,196,186)",
                      fontSize: "16px",
                      padding: "12px",
                    }}
                  >
                    Tokens - 0
                  </div>
                  <div className={styles.buttonDiv}>
                    <button className={styles.button}>View Assets</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className={styles.heading2}>about</span>
              <div className={styles.card2}>
                <div className={styles.subcard}></div>
                <div className={styles.subcard}></div>
                <div className={styles.subcard}></div>
              </div>
            </div>
          </div>

          <div className={styles.span1}>Overall </div>

          <div className={styles.container2}>
            <div>
              <div className={styles.card3}>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="area"
                  height={400}
                  width={1100}
                />
              </div>
            </div>
            {/* <div className={styles.card4}></div> */}
          </div>

          <div className={styles.span2}>Transections</div>
          <div className={styles.container3}>
            <div className={styles.Transection}>
              <h2>2 aug 4:30 pm</h2>
              <table>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Order id</th>
                    <th>chain</th>
                    <th>status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>30</td>
                    <td>1172478989</td>
                    <td>zora</td>
                    <td>success</td>
                  </tr>
                  <tr>
                    <td>drone</td>
                    <td>drone</td>
                    <td>drone</td>
                    <td>drone</td>
                  </tr>
                  <tr>
                    <td>drone</td>
                    <td>drone</td>
                    <td>drone</td>
                    <td>drone</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className={styles.card5}></div>
            <div style={{ marginLeft: "25px" }} className={styles.card5}></div>
            <div style={{ marginLeft: "25px" }} className={styles.card5}></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
