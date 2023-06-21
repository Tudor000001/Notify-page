var mark = document.getElementById('mark');
var nombre = document.getElementById('nombru');
var cercuri = document.getElementById('cercu');
var cercurii = document.getElementById('cercu1');
var cercuriii = document.getElementById('cercu2');

mark.addEventListener('click', function () {
    nombre.innerHTML = "&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;";
    cercuri.style.display = 'none';
    cercurii.style.display = 'none';
    cercuriii.style.display = 'none';
});