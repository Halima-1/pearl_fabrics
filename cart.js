var addItem = 0;
function addToCart(item){
addItem += 1;
let selectedItem = document.createElement('div');
selectedItem.classList.add('cartimg');
selectedItem.setAttribute('id', addItem);
var img = document.createElement('img');
img.setAttribute('src', item.children[0].currentSrc);
var title = document.createElement('div');
title.innerText = item.children[1].innerText;
var label = document.createElement('div');
label.innerText = item.children[2].children[0].innerText;
var select = document.createElement('span');
select.innerText = item.children[2].children[1].value;
label.appendChild(select);

// delbtn

var delbtn = document.createElement('button');
delbtn.innerText= 'delete';
delbtn.setAttribute('onclick', 'del('+addItem+')');

let cartItem = document.getElementById('title');
selectedItem.appendChild(img);
selectedItem.appendChild(title);
selectedItem.appendChild(label);
selectedItem.appendChild(delbtn);
cartItem.appendChild(selectedItem);


function del (item){
    document.getElementById(item).remove();
}
// let car = document.createElement('img');
// car.setAttribute('src', 'images/adire/Screenshot_20220903-133536_1.png');
// cont.appendChildChild(car);
}