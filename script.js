// На странице находятся элементы:

// div - фигура, которая может принимать какие-то формы
// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура.
// input для выбора цвета. При его изменении меняется цвет фигуры

const figure = document.getElementById("figure");
const select = document.getElementById("select");
const color = document.getElementById("color");

const getColor = () => figure.style.background = color.value;

const getShape = () => {
    select.addEventListener("click", function() {
        figure.classList.add(select.value);
    });
    let previousClass = figure.classList[figure.classList.length-1];
    figure.classList.replace(previousClass, select.value);
};

color.onchange = getColor;
select.onchange = getShape;