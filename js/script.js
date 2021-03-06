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

    if(title === '' || year === '' || proz === ''|| ram === '' || core === '' || material === ''|| weight === ''){
        viewLaptop.getMessage('empty string', 'no_success');
    }else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Yep, new laptop', 'success');
        viewLaptop.clearInput(); 
    };
    

    event.preventDefault();
});
document.querySelector('#ultrabook').addEventListener('submit', function(event){
    var name = document.querySelector('#U_title').value;
    var year = document.querySelector('#U_year').value;
    var proz = document.querySelector('#U_proz').value;
    var ram = document.querySelector('#U_ram').value;
    var core = document.querySelector('#U_core').value;
    var material = document.querySelector('#U_material').value;
    var weight = document.querySelector('#U_weight').value;
    var ultrabook = new Ultrabook(name, year, proz, ram, core, material, weight);
    var viewUltrabook = new ViewUltraBook();

    if(title === '' || year === '' || proz === ''|| ram === '' || core === '' || material === ''|| weight === ''){
        viewUltrabook.getMessage('empty string', 'no_success');
    }else{
        viewUltrabook.addUltrabook(ultrabook);
        viewUltrabook.getMessage('Yep, new ultrabook', 'success');
        viewUltrabook.clearInput(); 
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
  