const submit = document.getElementById("submit");
const rateBox = document.getElementById("box");
const thankBox = document.getElementById("thankyou");
const selectedrate = document.getElementById("selected-rate");
const ratings = document.querySelectorAll('input[name = "rating"]');

ratings.forEach((input) => {
  input.addEventListener("change", () => {
    submit.disabled = false;
    submit.style.cursor = "pointer";
    submit.style.opacity = "1";
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  rateBox.style.display = "none";
  rateBox.ariaHidden = true;

  thankBox.style.display = "block";
  thankBox.ariaHidden = false;

  theRating();
});

function theRating() {
  let selectedValue = null;

  ratings.forEach((input) => {
    if (input.checked) {
      selectedValue = input.value;
    }

    if (selectedValue) {
      selectedrate.innerText = `You selected ${selectedValue} out of 5`;
    }
  });
}
