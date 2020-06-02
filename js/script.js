document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var year = document.querySelector('#year').value;
    var ram = document.querySelector('#ram').value;

    var laptop = new Laptop(title, ram, year);
    var viewLaptop = new ViewLaptop();

    if(title === '' || year === '' || ram === ''){
        viewLaptop.getMessage('empty string', 'no_success');
    }else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Yep, new laptop', 'success');
        viewLaptop.clearInput(); 
    };

    event.preventDefault();
});