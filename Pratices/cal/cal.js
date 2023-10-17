document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const billAmountInput = document.getElementById("billAmount");
  const serviceRatingSelect = document.getElementById("serviceRating");
  const numberOfPeopleInput = document.getElementById("numberOfPeople");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = serviceRatingSelect.value;
    const numberOfPeople = parseInt(numberOfPeopleInput.value);

    if (
      isNaN(billAmount) ||
      billAmount <= 0 ||
      isNaN(numberOfPeople) ||
      numberOfPeople <= 0
    ) {
      resultDiv.innerText =
        "Please enter valid values for bill amount and number of people.";
    } else {
      let tipPercentage = 0;

      switch (serviceRating) {
        case "excellent":
          tipPercentage = 0.2;
          break;
        case "good":
          tipPercentage = 0.15;
          break;
        case "average":
          tipPercentage = 0.1;
          break;
        case "poor":
          tipPercentage = 0.05;
          break;
      }

      const totalTip = billAmount * tipPercentage;
      const perHeadTip = totalTip / numberOfPeople;

      resultDiv.innerText = `Total Tip: ${totalTip.toFixed(
        2
      )} Rs\nPer Head Tip: ${perHeadTip.toFixed(2)} Rs`;
    }
  });
});
