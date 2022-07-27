function testAnd(num) {
	if (num > 5 && num < 10) {
		return 'Yes';
	}
	return 'No';
}

const result = testAnd(4);
console.log(result);

////////////////////////// Assignmment for AND operator   //////////////////////////

function testLogicalAnd(val) {
	// Only change code below this line

	if (val) {
		if (val) {
			return 'Yes';
		}
	}

	// Only change code above this line
	return 'No';
}

testLogicalAnd(10);
