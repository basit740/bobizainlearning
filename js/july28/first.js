function testOr(num) {
	if (num > 10 || num < 5) {
		return 'No';
	}
	return 'Yes';
}

const result = testOr(6);

console.log(result);

//////////////////////////////////////////////////////////// Assignment Number 1 //////////////////////////////////////////////////////////////

function testLogicalOr(val) {
	// Only change code below this line

	if (val) {
		return 'Outside';
	}

	if (val) {
		return 'Outside';
	}

	// Only change code above this line
	return 'Inside';
}

testLogicalOr(15);
