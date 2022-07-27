function testAnd(num) {
	if (num > 5 && num < 10) {
		return 'Yes';
	}
	return 'No';
}

const result = testAnd(4);
console.log(result);
