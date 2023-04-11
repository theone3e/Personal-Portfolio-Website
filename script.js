const element = document.getElementById("button");
element.addEventListener('click', () => {
    element.querySelector('button').classList.add('myClass');
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    }