//set inital count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const wow = document.querySelector('#onehundred');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
    const styles= e.currentTarget.classList;
        if (styles.contains("dec")){
            count--;

        }else if(styles.contains("inc")){
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count <0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "black";
        }
        if (count === 100){
            wow.textContent = "Congrats! That's amazing!",
            wow.style.color = "gold";

        }
        value.textContent = count;
    });
});
