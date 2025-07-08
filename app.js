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
