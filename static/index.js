const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "USD $",
              data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
              backgroundColor: [
                "rgba(236, 119, 95)",
                "rgba(236, 119, 95)",
                "rgba(65, 127, 219)",
                "rgba(236, 119, 95)",
                "rgba(236, 119, 95)",
                "rgba(236, 119, 95)",
                "rgba(236, 119, 95)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });