function addingKpiValueFromCsv(fileName, kpiNumber, innerHtmlValue) {
  fetch(`/${fileName}.csv`)
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      document.querySelectorAll(".kpi-card")[
        kpiNumber
      ].innerHTML = `${rows[1][0]}${innerHtmlValue}`;
    });
}

addingKpiValueFromCsv(
  "total_bookinngs",
  0,
  `<br /><span class="kpi-cart-type">Total Bookings</span>`
);
addingKpiValueFromCsv(
  "confirmed_revenue",
  1,
  `<br /><span class="kpi-cart-type">Confirmed Revenue</span>`
);
addingKpiValueFromCsv(
  "cancelation_rate",
  2,
  `<br /><span class="kpi-cart-type">Cancellation Rate</span>`
);
addingKpiValueFromCsv(
  "no_show_rate",
  3,
  `<br /><span class="kpi-cart-type">NoShow Rate</span>`
);

// Monthly Bookings Chart
async function changeToMonths() {
  const res = await fetch("./Total Bookings by Month.csv");
  const csvText = await res.text();

  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const data = result.data;

  const monthlyTotals = {};

  data.forEach((row) => {
    const month = row.Month.trim();
    const bookings = parseInt(row["Total Bookings"], 10);
    if (!monthlyTotals[month]) monthlyTotals[month] = 0;
    monthlyTotals[month] += bookings;
  });

  return monthlyTotals;
}

async function addTotalBookingsByMonth() {
  const monthlyTotals = await changeToMonths();

  const monthLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dataValues = monthLabels.map((month) => monthlyTotals[month]);

  new Chart(document.getElementById("monthChart"), {
    type: "line",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: "Bookings",
          data: dataValues,
          borderColor: "#007bff",
          fill: true,
          tension: 0.4,
          backgroundColor: "rgba(0,123,255,0.1)",
        },
      ],
    },
  });
}

addTotalBookingsByMonth();

addTotalBookingsByMonth();

// Price Type Pie

function addTotalBookingsByPriceType() {
  fetch("./Total Bookings by Price Type.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      new Chart(document.getElementById("priceChart"), {
        type: "pie",
        data: {
          labels: [rows[1][0], rows[2][0]],
          datasets: [
            {
              data: [rows[1][1], rows[2][1]],
              backgroundColor: ["#004085", "#66b3ff"],
            },
          ],
        },
      });
    });
}
addTotalBookingsByPriceType();

// Room Type Bar

function addTotalBookingsByType() {
  fetch("./Total Bookings by Room Type.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      new Chart(document.getElementById("roomChart"), {
        type: "bar",
        data: {
          labels: [rows[1][0], rows[2][0], rows[3][0], rows[4][0]],
          datasets: [
            {
              label: "Total Bookings",
              data: [rows[1][1], rows[2][1], rows[3][1], rows[4][1]],
              backgroundColor: "#3399ff",
            },
          ],
        },
      });
    });
}
addTotalBookingsByType();

// Booking Channel Bar
function addTotalBookingsByChannel() {
  fetch("./Total Bookings by Booking Channel.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      new Chart(document.getElementById("channelChart"), {
        type: "bar",
        data: {
          labels: [rows[1][0], rows[2][0], rows[3][0]],
          datasets: [
            {
              label: "Total Bookings",
              data: [rows[1][1], rows[2][1], rows[3][1]],
              backgroundColor: "#00bfff",
            },
          ],
        },
      });
    });
}
addTotalBookingsByChannel();
