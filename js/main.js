let number = 1;

function printNumber() {
	console.log(number);
	number++;
}

var cancel = setInterval(printNumber, 1000);
