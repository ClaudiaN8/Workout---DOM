
const buttonName = document.querySelector('.btn-name');
buttonName.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const greeting = document.querySelector('.greeting');
    greeting.textContent = `Hello ${name}!`;
});

const time = () => {
    const time = document.querySelector('.time-display');
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');
    const numberTime = `${hour}:${minute}:${second}`;
    const stringTime = numberTime.toString();
    time.innerHTML = `It's ${stringTime.split("").map(ch => `<span class="digit">${ch}</span>`).join("")}`;
    //requestAnimationFrame(time);
};
setInterval(time, 1000);
time();

const buttonAge = document.querySelector('.btn-age');
buttonAge.addEventListener('click', (e) => {
    e.preventDefault();
    const bday = document.querySelector('#bday').value;
    const countDate = new Date(bday);
    const countYear = countDate.getFullYear();
    const countMonth = countDate.getMonth() + 1;
    const countDay = countDate.getDate();
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    const nowDay = new Date().getDate();
    const userAge = document.querySelector('.userAge');

    let years = nowYear - countYear;
    let months = nowMonth - countMonth;
    let days = nowDay - countDay;
    console.log(years, months, days);
    function singlePlural(a, b){
        if(a > 1 || a === 0){
            return b + "s";
        } else {
            return b;
        }
    };

    if (years < 0 || (years === 0 && months < 0) || (years === 0 && months === 0 && days < 0)) {
        return userAge.textContent = "Ups! You haven't been born yet.";
    }

    if (months === 0 && days === 0) {
        if (years > 0){
        return (userAge.textContent = `Happy birthday! 🎂 You're ${years} ${singlePlural(years, "year")} old. `);
        } else {
            return userAge.textContent = "You've just been born.👣 Welcome to this world!"
        }
    };
    
    if (years < 1){
            if (months < 1){
                return userAge.textContent = `You're ${days} ${singlePlural(days, "day")} old.`;
            } else {
                return userAge.textContent = `You're ${months} ${singlePlural(months, "month")} old.`;
            }
    } else {
        return userAge.textContent = `You're ${years} years old.`;
    }

});

const btnUserName = document.querySelector('.btn-form');
btnUserName.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = document.querySelector('#userName').value;
    const age = document.querySelector('#age').value;
    const place = document.querySelector('#place-select').value;
    const vacation = document.querySelector('input[name="vacation"]:checked').value ;
    const foods = document.querySelectorAll('[name="food"]');
    const image = document.querySelector('img');

    let foodChecked=[];
    for (const food of foods) {  
        if (food.checked) { 
          foodChecked.push(food.value);  
      }  
    }
    const foodString = foodChecked.join(', ');
    const holiday = (vacation === "yes") ? 
    "I see you've already been on vacation this year. 👌 Good for you! Have you visited this 👇?"
    : "I see you haven't been on vacation this year yet. Do you plan on visiting this 👇?"

    const message = document.querySelector('.message');
    message.textContent = `Hello ${userName}. I see you're ${age}. Why do you like ${place} so much? Is it because here you can eat ${foodString}? ${holiday}`;

    image.src = `images/${place}.jpg`;

});
