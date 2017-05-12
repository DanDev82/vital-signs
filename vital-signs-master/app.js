const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
const error = 'Get some rest and drink some water';

for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
}
  
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {

  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';

	if ( li.textContent * 4 > 100 ) {
	  li.style.backgroundColor = 'red';
	  li.textContent + error;
	} else if ( li.textContent  * 4 < 100) {
		li.style.backgroundColor = 'lightgreen';
	}
	let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let date = new Date();
	let day = date.getDate();
	let monthIndex = date.getMonth();
	let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();

	//console.log(day, monthNames[monthIndex], year);
	li.textContent = ' Heart Rate: ' + li.textContent * 4 + 'bmp - ' + (monthNames[monthIndex] + ' ' + day + ', ' + year + ' @ ' + hour + ":" + min + ":" + secs);

});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});








// removeItemButton.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });

// function displayDate(){

// 	let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// 	let date = new Date();
// 	let day = date.getDate();
// 	let monthIndex = date.getMonth();
// 	let year = date.getFullYear();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let secs = date.getSeconds();

// 	console.log(day, monthNames[monthIndex], year);
// 	li.textContent += (monthNames[monthIndex] + ' ' + day + ', ' + year + ' @ ' + hour + ":" + min + ":" + secs + ' Heart rate: ' + myTextInput.value * 4 + 'bmp.');
// }
