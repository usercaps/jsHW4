function ViewLaptop() {

};

ViewLaptop.prototype.addLaptop = function (obj) {
    var block = document.querySelector('#list-laptops');
    var ulList = document.createElement('ul');
    var newDiv = document.createElement('div');

    ulList.innerHTML =
        '<li>' + obj.title + '</li>' +
        '<li>' + obj.ram + '</li>' +
        '<li>' + obj.proz + '</li>' +
        '<li>' + obj.core + '</li>' +
        '<li class="delete"><button>Удалить</button></li>' +
        '<li class="show"><button>Общая информация</button></li>';

    newDiv.innerHTML =
        '<p>' + 'Вес: ' + obj.weight + ' грамм' + '</p>' +
        '<p>' + 'Материал корпуса: ' + obj.material + '</p>' +
        '<p>' + 'Год выпуска: ' + obj.year + ' год' + '</p>' +
        '<button class="close">Закрыть</button>';

    block.appendChild(ulList).append(newDiv);
    deleteUlList();
    closeDiv();
    openDiv();
};

ViewLaptop.prototype.getMessage = function (message, nameCl) {
    var cont = document.querySelector('.container');
    var form = document.querySelector('#laptop');

    var infoBlock = document.createElement('div');
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);
};

ViewLaptop.prototype.clearInput = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#proz').value = '';
    document.querySelector('#ram').value = '';
    document.querySelector('#core').value = '';
    document.querySelector('#material').value = '';
    document.querySelector('#weight').value = '';

};