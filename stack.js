<!DOCTYPE html>
<html>
<body>
/* stacks */
//functions push-placing data in to the stack, pop-removing the top element of a stack, peek-dispalying the top element of a stack, length/size-to determine the number of elements in a stack
var letters = [] //This is our stack

var word = "racecar" //this is a palindrome

var rword = ""  //reversed word for our palindrome

//put the letters of the word in to a stack
for (var i=0; i < word.length; i++){
	lwtters.push(word[i]);
}
//pop off the stack in reverse order
for (var i=0; i<word.length; i++){
	//we add one letter at a time from the stack by poping the top letter 
	rword += letters.pop();
}

if(rword === word){
	console.log(word+"is a palindrome")
}
else{
	console.log(word+ "is not a palindrome")
}
</body>
</html>