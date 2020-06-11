var btnAdauga = document.getElementById('adaugaSortiment');
var btnCloseAdauga = document.getElementById('closeAdauga');
var modalSortiment = document.getElementById('mdl-sortimente');


btnAdauga.addEventListener('click', function(){
    modalSortiment.classList.add('active-modal');
});

btnCloseAdauga.addEventListener('click', function(){
    modalSortiment.classList.remove('active-modal');
});





var btnAdaugaPrajeala = document.getElementById('adaugaPrajeala');
var btnClosePrajeala = document.getElementById('closeAdaugaPrajeli');
var modalPrajeli = document.getElementById('mdl-prajeli');

btnAdaugaPrajeala.addEventListener('click', function(){
    modalPrajeli.classList.add('active-modal');
});

btnClosePrajeala.addEventListener('click', function(){
    modalPrajeli.classList.remove('active-modal');
});