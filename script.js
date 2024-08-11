// Для открытия/закрытия бокового меню

function close_menu(){
    document.querySelector('.sidenav').style.display = 'none';
    document.querySelector('.sidenav_close').style.display = 'flex';
    if(document.querySelector('.container.footer.set')){
      document.querySelector('.container.footer.set').classList.add('close');
    }
    
  }

  function open_menu(){
    document.querySelector('.sidenav').style.display = 'flex';
    document.querySelector('.sidenav_close').style.display = 'none';
    if(document.querySelector('.container.footer.set')){
      document.querySelector('.container.footer.set').classList.remove('close');
    }
  }


// Для раскрытия/закрытия списка локаций и тд.

const buttons = document.querySelectorAll('.btn_list');

buttons.forEach(button => {
  button.addEventListener('click', function() {
      let nextElem = this.nextElementSibling;
      const img = this.querySelector('img');
      const locationBlock = this.parentNode;
      const ul = locationBlock.querySelector('ul');
      if(ul){
        var islvl_3 = ul.classList.contains('lvl_3');
        this.classList.toggle('open')
      }
      else{
        return;
      }

      if (!islvl_3){
      locationBlock.querySelector('.btn_change').classList.toggle('open');
      locationBlock.querySelector('.btn_delete').classList.toggle('open');
      }

      const isOpen = ul.style.display === 'block';

    if (isOpen && ul) {
        ul.style.display = 'none';
        
    } else {
        ul.style.display = 'block';
    }
})
});

// Для открытия/закрытия popup

function openForm(value) {
  if(value == 1){
    document.getElementById("popup_loc").style.display = "block";
  }
  else{
    document.getElementById("popup_change").style.display = "block";
  }
}

function closeForm(value) {
  if(value == 1){
  document.getElementById("popup_loc").style.display = "none";
  }
  else{
    document.getElementById("popup_change").style.display = "none";
  }
}