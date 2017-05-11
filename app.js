const myInputButton = document.querySelector('#myInputButton');
const myTextInput = document.querySelector('#myTextInput');
const myTextP = document.querySelectorAll('p')[0];
const myDateP = document.querySelectorAll('p')[1];

myInputButton.addEventListener('click', () => {
  displayDate();
  //alert(myTextInput.value * 4);
  myTextP.textContent = 'Your current heart rate is ' + myTextInput.value * 4 + 'bpm. That\'s good! Good job staying calm.';
  myTextInput.value = '';
});

function displayDate(){

	let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let date = new Date();
	let day = date.getDate();
	let monthIndex = date.getMonth();
	let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();

	console.log(day, monthNames[monthIndex], year);
	myDateP.textContent = (monthNames[monthIndex] + ' ' + day + ', ' + year + ' @ ' + hour + ":" + min + ":" + secs + ' Heart rate: ' + myTextInput.value * 4 + 'bmp.');
}
