// created list of names for the table
const NAMES = [
    "Alice",
    "Bob",
    "Carol",
    "John",
    "Jason",
    "Heather",
    "Alma",
    "David",
];

//created list of occupations for the table
const OCCUPATIONS = [
    "Writer",
    "Teacher",
    "Programmer",
    "Accountant",
    "Consultant",
    "Banker",
    "Actor",
    "Painter",
];

const MAX_PAYEES = 25;

const payees = [
    { name: "Jonathan", price: 30, occupation: "Designer" },
    { name: "Julie", price: 35, occupation: "Dancer" },
    { name: "Cole", price: 25, occupation: "Teacher" },
    { name: "Daisy", price: 50, occupation: "Banker" },
    { name: "Josh", price: 75, occupation: "Driver" },
    { name: "Jacob", price: 45, occpuation: "Programmer" },
    { name: "John", price: 55, occupation: "Consultant "},
    { name: "Tom", price: 35, occupation: "Cleaner" },
];

let averagePrice = 0;

function addPayee() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation =
      OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const price = 1 + Math.floor(Math.random() * 100);
  
    payees.push({ name, occupation, price });
  }

  function updateAveragePrice(state) {
    const total = payees.reduce(
      (acc, payee) => acc + payee.price,
      0
    );
    averagePrice = total / payees.length;
  }

  function renderPayees() {
    const $payees = payees.map((payee) => {
      const $tr = document.createElement("tr");
  
      $tr.innerHTML = `
      <td>${payee.name}</td>
      <td>${payee.occupation}</td>
      <td>$${payee.price}</td>
      `; 
  
      return $tr;
    });
  
    const $tbody = document.querySelector(".payees tbody");
    $tbody.replaceChildren(...$payees);
  }

  function renderAveragePrice() {
    const $price = document.querySelector(".average_price");
    $price.textContent = `$${averagePrice.toFixed(2)}`;
  }

  function render() {
    renderPayees();
    renderAveragePrice();
  }

  updateAveragePrice();
render();

const payeeInterval = setInterval(function () {
    addPayee();
    updateAveragePrice();
    render();
  
    if (payees.length >= MAX_PAYEES) {
      clearInterval(payeeInterval);
    }
  }, 1000);

  // nothing was working to show it up on html so i tried copying the solution but that does not seem to work either