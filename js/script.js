
// const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const numbers = [];

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
var modal_btn1 = document.getElementById("plus_btn");

// When the user clicks the modal_btn1, open the modal
modal_btn1.onclick = function() {
    modal.style.display = "block";
}

// CONFIRM NEW SESSION MODAL
// Get modal for confirm window
var modal2 = document.getElementById("modal_div2");

// Get buttons that opens the modal
var modal_btn2 = document.getElementById("new_session_btn");

// When the user clicks the button, open the modal2
modal_btn2.onclick = function() {
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

const list = document.getElementById("input_list");
const input = document.getElementById("li_input");
const enter_button = document.getElementById("enter_input");

enter_button.onclick = function () {
  // Get rid of blank #1 li
  let empty_li = document.getElementById("empty_li");
  empty_li.style.display = 'none';

  // close modal
  modal.style.display = 'none';

  // send input to array and display in <ol>
  numbers.push(input.value);
  displayNumbers(numbers);
  };

const displayNumbers = (array) => {

  // grab the list element (<ol>)
  // var ol = document.getElementById("input_list");

  // Create the list item:
  var li = document.createElement("li");
  // Set its contents:
  let last = array.pop();
  li.innerHTML = `<span>${last}"</span><button>X</button>`;
  // Add it to the list:
  list.appendChild(li);
  array.push(last);
  console.log(array);
};

  // Register the service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", funtion() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  });
};

  // Remove entry from array and display with "X" button
  
  // Append to counters for Doubles and Skips
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_order

  // Use Tolerance and Ideal Spacing to measure Efficiency

  // Change input array into valid graph array for output

  // Mark input <li> with letters "D" & "S" for Double and Skipped

  // New Stat Session button functionality
    // Yes button functionality
    // No button functionality

  // Export Results


