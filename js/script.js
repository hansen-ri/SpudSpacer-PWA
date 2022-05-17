  const labels = [
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: "",
      backgroundColor: '#1c566c',
      borderColor: '#ffffff',
      data: [ , 0, 3, 2, 5, 15, 16, 32, 12],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          labels: {
            boxWidth: 0
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Spud Spacing (in)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Frequency of Spacing'
          }
        }
      }
    }
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );  
// Get modal for seed measurement 
var modal = document.getElementById("modal_div");
// Get button that opens the modal
var button = document.getElementById("plus_btn");

// When the user clicks the button, open the modal
button.onclick = function() {
    modal.style.display = "block";
}

// When user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//     else if (event.target == modal2) {
//       modal2.style.display = "none";
//     }
// }

// CONFIRM NEW SESSION MODAL
// Get modal for confirm window
var modal2 = document.getElementById("modal_div2");

// Get buttons that opens the modal
var modal_btn = document.getElementById("new_session_btn");

// When the user clicks the button, open the modal2
modal_btn.onclick = function() {
  modal2.style.display = "block";
}
// Close modal if user clicks anywhere outside of either modal
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Open results section when user clicks on "See Results" button
var results_btn = document.getElementById("see_results_btn");
var results = document.getElementById("results_content");
var graph = document.getElementById("myChart");
results_btn.onclick = function() {
  results.style.display = "block";
  graph.style.display = "inline";
}