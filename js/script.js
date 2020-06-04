document.querySelector('#laptop').addEventListener('submit', function(event){
    var name = document.querySelector('#title').value;
    var year = document.querySelector('#year').value;
    var proz = document.querySelector('#proz').value;
    var ram = document.querySelector('#ram').value;
    var core = document.querySelector('#core').value;
    var material = document.querySelector('#material').value;
    var weight = document.querySelector('#weight').value;
    var laptop = new Laptop(name, year, proz, ram, core, material, weight);
    var viewLaptop = new ViewLaptop();
    // var viewUltrabook = new ViewUltrabook();

    if(title === '' || year === '' || proz === ''|| ram === '' || core === '' || material === ''|| weight === ''){
        viewLaptop.getMessage('empty string', 'no_success');
    }else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Yep, new laptop', 'success');
        viewLaptop.clearInput(); 
    };
    

    event.preventDefault();
});




function deleteUlList(){
    var deleteUL = document.getElementsByClassName('delete');
    for(let button of deleteUL){
      button.addEventListener('click', function(){
          button.parentElement.remove();
          event.preventDefault();
      })
    }
  }
  
  function openDiv(){
    var buttonOpen = document.getElementsByClassName('show');
    for(let button of buttonOpen){
      button.addEventListener('click', function(){
          button.parentElement.querySelector('.dop-info').classList.toggle('close');
          event.preventDefault();
      })
    }
  }
  