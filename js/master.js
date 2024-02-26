//Info Date
const dateNumber = document.getElementById('dateNumber')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')
const dateDay = document.getElementById('dateDay')

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'})
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'})
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'})
    dateDay.textContent = date.toLocaleString('es', {weekday: 'long'})
};

setDate();
 

