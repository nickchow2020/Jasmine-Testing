window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 1000;
  document.getElementById("loan-years").value = 3;
  document.getElementById("loan-rate").value = 5.5;

  const inputs = getCurrentUIValues()
  calculateMonthlyPayment(inputs)
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputs = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(inputs))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const loanAmount = values.amount
    const totalPayment = values.years * 12
    const i = values.rate / 100 / 12

    return ((loanAmount * i) / (1 - Math.pow(1 + i,-totalPayment))).toFixed(2).toString()
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly
}
