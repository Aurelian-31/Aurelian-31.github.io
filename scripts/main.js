let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('Src')
    if(mySrc === 'images/Firefox_logo,_2019.svg.png') {
        myImage.setAttribute('Src' , 'images/Firefox_Developer_Edition_logo,_2017.png');
    } else {
        myImage.setAttribute('Src' , 'images/Firefox_logo,_2019.svg.png');
    }
}

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入您的姓名。');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}