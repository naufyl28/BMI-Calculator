var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");
var resultDiv = document.querySelector(".result");
var bmiCategory = document.getElementById("bmiCategory");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate() {
  if (height.value == '' || weight.value == '') {
    modal.style.display = "block";
    modalText.innerHTML = `Harus mengisi terlebih dahulu!`;
  } else {
    countBmi();
  }
}

function countBmi() {
  var heightInCM = Number(height.value);
  var weightInKG = Number(weight.value);
  var bmi = weightInKG / ((heightInCM / 100) * (heightInCM / 100));
  var bmiCategoryText = '';

  if (bmi < 18.5) {
    bmiCategoryText = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategoryText = 'Normal Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategoryText = 'Overweight';
  } else if (bmi >= 30) {
    bmiCategoryText = 'Obese';
  }

  var resultText = `Berat Badan ${weightInKG} KG<br>
                   Tinggi Badan ${heightInCM} CM<br>
                   BMI = ${weightInKG} / (${(heightInCM / 100) ** 2})<br>
                   BMI = ${bmi.toFixed(1)}<br>
                   BMI Categories: ${bmiCategoryText}`;

  document.getElementById("result").innerHTML = bmi.toFixed(1);
  document.querySelector(".comment").innerHTML = `BMI kamu adalah ${bmi.toFixed(1)} `;
  bmiCategory.textContent = bmiCategoryText;
  resultDiv.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
