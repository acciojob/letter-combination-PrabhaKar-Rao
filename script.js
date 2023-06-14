function letterCombinations(input_digit) {
  //Complete the function
	let mapping={
	    "2":"abc",
	    "3":"def",
	    "4":"ghi",
	    "5":"jkl",
	    "6":"mno",
	    "7":"pqrs",
	    "8":"tuv",
	    "9":"wxyz"
	}
	let result=[];
	let searchString = input_digit
	function solve(index,calculatedString){
    //index=0 , calculatedString = ";"
	    if(index>=searchString.length){
	        result.push(calculatedString);
	        return;
	    }

	    let currString = mapping[searchString[index]]
	    for(let i=0;i<currString.length;i++){
        solve(index+1, calculatedString+currString[i])
	    }
	}

	solve(0,"")
	return result;
}

module.exports = letterCombinations;
