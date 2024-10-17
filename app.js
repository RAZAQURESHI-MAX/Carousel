var elm = document.getElementById("imgTag")

var links = ["./assets/1920-1080-1.jpg", "./assets/1920-1080-2.jpg", "./assets/1920-1080-3.jpg"]

var count = 0

function fun(value){

    if(count>2){
        count = 0
    }

    elm.setAttribute("src", links[count]);

    if(value === '-'){
        count--;
        return;
    }
    count++;
}

setInterval(fun, 2000)