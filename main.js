const sum = document.getElementById('sum').value;
const percent = document.getElementById('percent').value;
const term = document.getElementById('term').value;
const myButton = document.getElementById('button');



    const percentMonth = percent / 100 / 12;
    const monthPay = sum * (percentMonth + (percentMonth / ((1 + percentMonth) ** 12 - 1)));
    //console.log(monthPay);

  myButton.addEventListener('click', function() {
    console.log(monthPay);
 });