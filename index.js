const pageNumber = document.getElementById("pageNumber");
let page = 1;
const scrollUp = document.getElementById("scrollUp");
const scrollDown = document.getElementById("scrollDown");
const ACircle = Array.from(document.querySelectorAll('.ACircle'));
const circleHeight = ACircle[1].style.height;

function circleAnimation(element){
    if(ACircle.indexOf(element) == (page - 1)){
            
            element.style.height = "0.12em";
            element.style.backgroundColor = `White`;
        }
    if(ACircle.indexOf(element) != (page - 1)){
        element.style.height = `${circleHeight}`
        element.style.backgroundColor = `rgb(167, 167, 167)`;

    }
}

scrollDown.onclick = function () {
    if(page < 6){
        page++;
        pageNumber.innerHTML = `0${page}`
    }
    if(page == 6){
        page = 1;
        pageNumber.innerHTML = `0${page}`
    }
    ACircle.forEach(circleAnimation);
}

ACircle.forEach(circleAnimation);

scrollUp.onclick = function () {
    if(page > 0){
        page--;
        pageNumber.innerHTML = `0${page}`
    }
    if(page == 0){
        page = 5;
        pageNumber.innerHTML = `0${page}`
    }
    ACircle.forEach(circleAnimation);
}