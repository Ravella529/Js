// get the number value from 
//loan amount element, 
// interest element, 
//yeartorepay element

const formEl = document.querySelector("#loan-form");
const amountEl = document.querySelector("#amount");
const yearlyInterestEl = document.querySelector("#interest");
const yearsEl  = document.querySelector("#years");
const monthlyPaymentEl = document.querySelector('#monthly-payment');
const totalPaymentEl =  document.querySelector('#total-payment');
const totalIntrestEl =  document.querySelector('#interest-payment');
document.querySelector("#loading").style.display = "none";//get Loader Element set it's display to none
formEl.addEventListener("submit",calculate);

function calculate(e) {
    document.querySelector('#results').style.display = "none";
    document.querySelector("#loading").style.display = "block";
    //console.log("at line number 19");
    setTimeout(_calculate,2000);
    //console.log("at line number 20");
    e.preventDefault();

}
function _calculate(){
    //console.log("at line number 26");
    monthlyPaymentEl.value = "";
    totalPaymentEl.value ="";
    totalIntrestEl.value = "";
    const principal = amountEl.value;
    const monthlyInterest =  yearlyInterestEl.value/100/12;
    const payments = yearsEl.value * 12;
    const x = Math.pow(1 + monthlyInterest, payments);
     const monthlyPayment = (principal * x * monthlyInterest) / (x -1);
    if(isFinite(monthlyPayment)) {
        monthlyPaymentEl.value = monthlyPayment.toFixed(2);
        totalPaymentEl.value = (monthlyPayment * payments).toFixed(2);
        totalIntrestEl.value = ((monthlyPayment * payments) - principal).toFixed(2);
        
        //console.log(monthlyPayment, totalPayment, totalIntrest);
    } else {
        if(!document.querySelector(".alert")){


            const alertEl = document.createElement("div");
            alertEl.className = "alert alert-danger";
            alertEl.innerText = "Error Check Inputs!";
            const cardEl = document.querySelector(".card");
            const headingEl = document.querySelector(".heading");
            cardEl.insertBefore(alertEl, headingEl);

        //Remove error after 3 seconds
            setTimeout(clearError, 3000);
        }
    }
    document.querySelector("#loading").style.display = "none";//get Loader Element set it's display to none
    document.querySelector("#results").style.display = "block";
}
function clearError(){
    document.querySelector(".alert").remove();
}
