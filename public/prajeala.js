
var btnAdaugaPrajeala = document.getElementById('adaugaPrajeala');
var btnClosePrajeala = document.getElementById('closeAdaugaPrajeli');
var modalPrajeala = document.getElementById('mdl-prajeli');

btnAdaugaPrajeala.addEventListener('click', function(){
    modalPrajeala.classList.add('active-modal');
});
btnClosePrajeala.addEventListener('click', function(){
    modalPrajeala.classList.remove('active-modal');
});
