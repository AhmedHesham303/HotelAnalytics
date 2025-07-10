function addTotalBookings() {
  fetch("/total_bookinngs.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      document.querySelectorAll(
        ".kpi-card"
      )[0].innerHTML = `${rows[1][0]}<br /><span class="kpi-cart-type">Total Bookings</span>`;
    });
}
function addTotalConfirmedRevenue() {
  fetch("/confirmed_revenue.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      document.querySelectorAll(
        ".kpi-card"
      )[1].innerHTML = `${rows[1][0]}<br /><span class="kpi-cart-type">Confirmed Revenue</span>`;
    });
}

function addCancelationRate() {
  fetch("/cancelation_rate.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      document.querySelectorAll(
        ".kpi-card"
      )[2].innerHTML = `${rows[1][0]}<br /><span class="kpi-cart-type">Cancellation Rate</span>`;
    });
}

function addNoShowRate() {
  fetch("/no_show_rate.csv")
    .then((response) => response.text())
    .then((csv) => {
      const rows = csv.split("\n").map((row) => row.split(","));
      document.querySelectorAll(
        ".kpi-card"
      )[3].innerHTML = `${rows[1][0]}<br /><span class="kpi-cart-type">NoShow Rate</span>`;
    });
}

addTotalBookings();
addTotalConfirmedRevenue();
addCancelationRate();
addNoShowRate();
// Monthly Bookings Chart
new Chart(document.getElementById("monthChart"), {
  type: "line",
  data: {
    labels: [
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
    datasets: [
      {
        label: "Bookings",
        data: [283, 288, 321, 343, 363, 434, 449, 432, 383, 352, 321, 364],
        borderColor: "#007bff",
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(0,123,255,0.1)",
      },
    ],
  },
});

// Price Type Pie
new Chart(document.getElementById("priceChart"), {
  type: "pie",
  data: {
    labels: ["Full Price", "Discounted"],
    datasets: [
      {
        data: [3000, 2000],
        backgroundColor: ["#004085", "#66b3ff"],
      },
    ],
  },
});

// Room Type Bar
new Chart(document.getElementById("roomChart"), {
  type: "bar",
  data: {
    labels: ["Deluxe", "Superior", "Standard", "Suite"],
    datasets: [
      {
        label: "Total Bookings",
        data: [1800, 1600, 700, 400],
        backgroundColor: "#3399ff",
      },
    ],
  },
});

// Booking Channel Bar
new Chart(document.getElementById("channelChart"), {
  type: "bar",
  data: {
    labels: ["Online", "Group", "Direct"],
    datasets: [
      {
        label: "Total Bookings",
        data: [2500, 1200, 633],
        backgroundColor: "#00bfff",
      },
    ],
  },
});
