const sum = document.getElementById('sum');
const percent = document.getElementById('percent');
const term = document.getElementById('term');
const myButton = document.getElementById('button');

alert('Привет, посчитаем кредит?');
    
    //const percentMonth = percent / 100 / 12;
    //const monthPay = sum * (percentMonth + (percentMonth / ((1 + percentMonth) ** term - 1)));
    //const totalSum = monthPay * term;
    //console.log(monthPay);

  myButton.addEventListener('click', function() {
    const percentMonth = percent.value / 100 / 12;
    const monthPay = sum.value * (percentMonth + (percentMonth / ((1 + percentMonth) ** term.value - 1)));
    const totalSum = monthPay * term.value;
    
    const newItem1 = document.createElement('li');
    newItem1.classList.add('item');
    const newItem2 = document.createElement('li');
    newItem2.classList.add('item');
    const newItem3 = document.createElement('li');
    newItem3.classList.add('item');
    const newItem4 = document.createElement('li');
    newItem4.classList.add('item');
    //style
    
    newItem1.textContent = "Ежемесячный платёж:    "  + monthPay.toFixed( 0 ) + " рублей";
    newItem2.textContent = "Ежемесячный процент:    " + percentMonth.toFixed( 5 ) + "%";
    newItem3.textContent = "Общая сумма кредита:    " + totalSum.toFixed( 0 ) + " рублей";
    newItem4.textContent = "Переплата по кредиту:    " + (totalSum - sum.value).toFixed( 0 ) + " рублей";
   
    list.appendChild(newItem1);
    list.appendChild(newItem2);
    list.appendChild(newItem3);
    list.appendChild(newItem4);

    sum.value = '';
    percent.value = '';
    term.value = '';

 });