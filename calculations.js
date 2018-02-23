
function compute() {
	var sample1 = document.getElementById("sample1")
	var result2 = document.getElementById("result2")
	var sample2 = document.getElementById("sample2")
	var result2 = document.getElementById("result2")
	console.log("is this right")
	// console.log(sample1.value, result2.value, sample2.value, result2.value)
	// console.log(par	seInt(sample1.value) + parseInt(result2.value))
	// console.log(parseInt(sample2.value) + parseInt(sample2.value))
	return {
		sum1: (parseInt(sample1.value) + parseInt(result1.value)),
		sum2: (parseInt(sample2.value) + parseInt(result2.value))
	}
}

function showSum() {
	var sums = compute()
	document.getElementById("display").innerHTML = "Sums: " + sums.sum1 + "  " + sums.sum2;
}