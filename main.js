const sum = document.getElementById('sum').value;
const percent = document.getElementById('percent').value;
const term = document.getElementById('term').value;
const myButton = document.getElementById('button');


    
    const percentMonth = percent / 100 / 12;
    const monthPay = sum * (percentMonth + (percentMonth / ((1 + percentMonth) ** 12 - 1)));
    const totalSum = monthPay * term;
    //console.log(monthPay);

  myButton.addEventListener('click', function() {
    
    const newItem1 = document.createElement('li');
    const newItem2 = document.createElement('li');
    const newItem3 = document.createElement('li');
    const newItem4 = document.createElement('li');
    //style
    
    newItem1.textContent = "Ежемесячный платёж:    "  + monthPay.toFixed( 0 ) + " рублей";
    newItem2.textContent = "Ежемесячный процент:    " + percentMonth.toFixed( 5 ) + "%";
    newItem3.textContent = "Общая сумма кредита:    " + totalSum.toFixed( 0 ) + " рублей";
    newItem4.textContent = "Переплата по кредиту:    " + (totalSum - sum).toFixed( 0 ) + " рублей";
   
    list.appendChild(newItem1);
    list.appendChild(newItem2);
    list.appendChild(newItem3);
    list.appendChild(newItem4);
 });