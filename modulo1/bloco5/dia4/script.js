window.onload = function() {
    configurePage();

    let button1 = document.getElementById("item1");
    let button2 = document.getElementById("item2");
    let button3 = document.getElementById("item3");
    let button4 = document.getElementById("item4");

    button1.addEventListener("click", function() {
        changeBackgroundColor("rgb(48, 48, 48)");
    });

    button2.addEventListener("click", function() {
        changeBackgroundColor("rgb(255, 165, 0)");
    });

    button3.addEventListener("click", function() {
        changeBackgroundColor("rgb(30, 144, 255)");
    });

    button4.addEventListener("click", function() {
        changeBackgroundColor("rgb(255, 255, 255)");
    });
}

function configurePage() {
    if (typeof (Storage) != "undefined") {
        if(localStorage.length !== 0) {
            let backGroundColorDiv = localStorage.getItem("color");
            let articles = document.getElementsByClassName("articles");
            for (let index = 0; index < articles.length; index += 1) {
                articles[index].style.backgroundColor = backGroundColorDiv;
            }
        } else {
            localStorage.setItem("color", "rgb(255, 255, 255)");
        }
      } else {
        document.write("Sem suporte para Web Storage");
      }
      return;
}

function changeBackgroundColor(color) {
    let articles = document.getElementsByClassName("articles");
    for (let index = 0; index < articles.length; index += 1) {
        articles[index].style.backgroundColor = color;
    }
    localStorage.setItem("color", color);
    return;
}

