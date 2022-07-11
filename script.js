const billForm = document.querySelector(".bill-form");
const billForm_input = document.querySelector("#bill-input");
const peopleForm = document.querySelector(".people-form");
const peopleForm_input = document.querySelector("#people-input");
const fivePercent = document.querySelector(".fivePercent");
const tenPercent = document.querySelector(".tenPercent");
const fifteenPercent = document.querySelector(".fifteenPercent");
const twentyfivePercent = document.querySelector(".twentyfivePercent");
const fiftyPercent = document.querySelector(".fiftyPercent");
const custom = document.querySelector("#custom");
const tip_amount = document.getElementById("tip-amount");
const total_person = document.getElementById("total-person");
const reset = document.querySelector(".reset-btn");
const people_error = document.querySelector(".error");

// add Event listener to load windows

window.addEventListener("load", (e) => {
  e.preventDefault();

  fivePercent.addEventListener("click", () => {
    if (peopleForm_input.value == 0) {
      people_error.textContent = "Can't be zero";
      people_error.style.color = "red";
      peopleForm.style.border = "1px solid red";
    } else {
      tip_amount.textContent = five_Tip();
      total_person.textContent = five_Total();
      people_error.textContent = "";
      peopleForm.style.border = "1px solid transparent";
    }
  });

  tenPercent.addEventListener("click", () => {
    if (peopleForm_input.value == 0) {
      people_error.textContent = "Can't be zero";
      people_error.style.color = "red";
      peopleForm.style.border = "1px solid red";
    } else {
      tip_amount.textContent = ten_Tip();
      total_person.textContent = ten_Total();
      people_error.textContent = "";
      peopleForm.style.border = "1px solid transparent";
    }
  });

  fifteenPercent.addEventListener("click", () => {
    if (peopleForm_input.value == 0) {
      people_error.textContent = "Can't be zero";
      people_error.style.color = "red";
      peopleForm.style.border = "1px solid red";
    } else {
      tip_amount.textContent = fifteen_Tip();
      total_person.textContent = fifteen_Total();
      people_error.textContent = "";
      peopleForm.style.border = "1px solid transparent";
    }
  });

  twentyfivePercent.addEventListener("click", () => {
    if (peopleForm_input.value == 0) {
      people_error.textContent = "Can't be zero";
      people_error.style.color = "red";
      peopleForm.style.border = "1px solid red";
    } else {
      tip_amount.textContent = twentyfive_Tip();
      total_person.textContent = twentyfive_Total();
      people_error.textContent = "";
      peopleForm.style.border = "1px solid transparent";
    }
  });

  fiftyPercent.addEventListener("click", () => {
    if (peopleForm_input.value == 0) {
      people_error.textContent = "Can't be zero";
      people_error.style.color = "red";
      peopleForm.style.border = "1px solid red";
    } else {
      tip_amount.textContent = fifty_Tip();
      total_person.textContent = fifty_Total();
      people_error.textContent = "";
      peopleForm.style.border = "1px solid transparent";
    }
  });

  custom.addEventListener("input", () => {
    if (peopleForm_input.value == 0) {
      people_error.textContent = "Can't be zero";
      people_error.style.color = "red";
      peopleForm.style.border = "1px solid red";
    } else {
      tip_amount.textContent = random_Tip(custom.value);
      total_person.textContent = random_Total(custom.value);
      people_error.textContent = "";
      peopleForm.style.border = "1px solid transparent";
    }
  });

  reset.addEventListener("click", () => {
    tip_amount.textContent = "$0.00";
    total_person.textContent = "$0.00";
    billForm_input.value = "";
    peopleForm_input.value = "";
  });
});

let dollar = "$";

// function for adding 5% to tip amount
const five_Tip = () => {
  const total = (0.05 * billForm_input.value) / peopleForm_input.value;
  return `${dollar}${total.toFixed(2)}`;
};

// function for total 5% tip amount
const five_Total = () => {
  const v1 = billForm_input.value / peopleForm_input.value;
  const v2 = 0.05 * v1;
  const total = v1 + v2;
  return `${dollar}${total.toFixed(2)}`;
};

// function for adding 10% to tip amount
const ten_Tip = () => {
  const total = (0.1 * billForm_input.value) / peopleForm_input.value;
  return `${dollar}${total.toFixed(2)}`;
};

// function for total 10% tip amount
const ten_Total = () => {
  const v1 = billForm_input.value / peopleForm_input.value;
  const v2 = 0.1 * v1;
  const total = v1 + v2;
  return `${dollar}${total.toFixed(2)}`;
};

// function for adding 15% to tip amount
const fifteen_Tip = () => {
  const total = (0.15 * billForm_input.value) / peopleForm_input.value;
  return `${dollar}${total.toFixed(2)}`;
};

// function for total 15% tip amount
const fifteen_Total = () => {
  const v1 = billForm_input.value / peopleForm_input.value;
  const v2 = 0.15 * v1;
  const total = v1 + v2;
  return `${dollar}${total.toFixed(2)}`;
};

// function for adding 25% to tip amount
const twentyfive_Tip = () => {
  const total = (0.25 * billForm_input.value) / peopleForm_input.value;
  return `${dollar}${total.toFixed(2)}`;
};

// function for total 25% tip amount
const twentyfive_Total = () => {
  const v1 = billForm_input.value / peopleForm_input.value;
  const v2 = 0.25 * v1;
  const total = v1 + v2;
  return `${dollar}${total.toFixed(2)}`;
};

// function for adding 50% to tip amount
const fifty_Tip = () => {
  const total = (0.5 * billForm_input.value) / peopleForm_input.value;
  return `${dollar}${total.toFixed(2)}`;
};

// function for total 50% tip amount
const fifty_Total = () => {
  const v1 = billForm_input.value / peopleForm_input.value;
  const v2 = 0.5 * v1;
  const total = v1 + v2;
  return `${dollar}${total.toFixed(2)}`;
};

// function for adding custom to tip amount
const random_Tip = (x) => {
  const total = ((x / 100) * billForm_input.value) / peopleForm_input.value;
  return `${dollar}${total.toFixed(2)}`;
};

// function for total custom tip amount
const random_Total = (y) => {
  const v1 = billForm_input.value / peopleForm_input.value;
  const v2 = y * v1;
  const total = v1 + v2;
  return `${dollar}${total.toFixed(2)}`;
};
