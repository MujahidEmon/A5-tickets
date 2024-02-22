// Assigning value
let count = 0;
let totalSeats = 40;
let selectedSeats = [];
const selectedSeatsTable = document
  .getElementById("selected-seats-table")
  .getElementsByTagName("tbody")[0];

const totalAmount = document.getElementById("grand-price");
const applyBtn = document.getElementById("apply-button");

const seats = document.getElementsByClassName("seat");
for (let seat of seats) {
  seat.addEventListener("click", function () {
    if (!seat.classList.contains("selected") && count < 4) {
      seat.classList.add("selected");
      count++;
      totalSeats--;
      const newRow = selectedSeatsTable.insertRow();
      const cell1 = newRow.insertCell();
      const cell2 = newRow.insertCell();
      const cell3 = newRow.insertCell();
      cell1.innerText = seat.innerText;
      cell2.innerText = "Economy";
      cell3.innerText = 500;                   
    } 
    else if (seat.classList.contains("selected")){
      seat.classList.remove("selected");
      count--;
      totalSeats++;
    }

    const seatLeft = document.getElementById("total-seats");
    seatLeft.innerText = totalSeats;
    const selectedCount = document.getElementById("selected-count");
    selectedCount.innerText = count;

    const totalPrice = document.getElementById("total-price");
    let total = count * 550;
    totalPrice.innerText = total;
    totalAmount.innerText = total;

    if (count > 3) {
      applyBtn.removeAttribute("disabled");
    } else if (count < 4) {
      applyBtn.setAttribute("disbled", true);
    }
    const inputArea = document.getElementById("input-area");
    const couponInput = document.getElementById("coupon-input");
    applyBtn.addEventListener("click", function () {
      if (couponInput.value === "NEW15") {
        totalAmount.innerText = total - total * 0.15;
      } else if (couponInput.value === "Couple 20") {
        totalAmount.innerText = total - total * 0.2;
      }
    });
    const finalButton = document.getElementById("final-button");
    const numberField = document.getElementById("number-field");
  });
}
