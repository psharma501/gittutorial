console.log(document.title);
document.title = "Pradeep Sharma";

let header = document.getElementById('main-header');

header.style.borderBottom = "solid 4px #000";

//header.textContent = 'Hello';

let items = document.getElementsByClassName('list-group-item');

//items.style.color = colorCode;
document.getElementById('items').style.color = 'green';
items[0].textContent = 'ADD ITEMS';
items[1].textContent = 'ADD ITEMS';
items[2].textContent = 'ADD ITEMS';
items[3].textContent = 'ADD ITEMS';


for(let i = 0; i < items.length; i++)
{
    items[i].style.backgroundColor = '#f4f4f4';
}