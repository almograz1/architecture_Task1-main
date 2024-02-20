function phoneMenu() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


/*===============================BMI claculator===========================*/
  function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || height >=230  || weight <= 0 || weight>=500 ) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight.";
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiResult = "Your BMI is " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        bmiResult += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiResult += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        bmiResult += "You are overweight.";
    } else {
        bmiResult += "You are obese.";
    }

    document.getElementById('result').innerHTML = bmiResult;
}



/*===============================verify input in sign up===========================*/
function verifyInput(){
  var name = document.getElementBy("firstName").value;
  var lastName = document.getElementBy("lastName").value;
  var age = document.getElementBy("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var alertMsg = "";
  if(name != 5){
      alertMsg = alertMsg+"type 5";
  }
  if(alertMsg != ""){
      alert(alertMsg);
  }
  }