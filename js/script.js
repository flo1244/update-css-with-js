// JavaScript Document
	
const inputs = document.querySelectorAll(".controls input");//selects all inputs.

const handleUpdate = function() {
	// console.log(this.value);
	  const suffix = this.dataset.sizing || ''; //dataset is a object that contains all the data attributes for a specific element.
	  //console.log(suffix);
	  //console.log(name):
	  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //allows the value to be updated.
};
  
/*ARROW EXPRESSION ES6*/	
//inputs.forEach(input => input.addEventListener("change", handleUpdate));
//inputs.forEach(input => input.addEventListener("mouseover", handleUpdate));	

	
// Loops through each inputs blur, spacing, base color.
inputs.forEach(function(input){
	input.addEventListener("change", handleUpdate);
	input.addEventListener("mousemove", handleUpdate);
});
	
