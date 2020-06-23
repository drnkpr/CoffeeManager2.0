



var btnAdauga = document.getElementById('adaugaSortiment');
var btnCloseAdauga = document.getElementById('closeAdauga');
var modalSortiment = document.getElementById('mdl-sortimente');

btnAdauga.addEventListener('click', function(){
    modalSortiment.classList.add('active-modal');
});
btnCloseAdauga.addEventListener('click', function(){
    modalSortiment.classList.remove('active-modal');
});



var table = document.getElementById('tabel');

for(var i = 0; i < table.rows.length; i++) {
  table.rows[i].addEventListener('click', function() {
      var msg=" ";
    for(var j = 0; j < this.cells.length; j++) {
      msg += this.cells[j].innerHTML;
      msg += " ";
    }
    alert(msg);
  });
}
















