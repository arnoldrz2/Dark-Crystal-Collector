//Starting Stats
var wins = 0;
var losses = 0;

$(document).ready(function(){
	$("#game-area").hide();
	
	$(".start-button").one("click", function(){
	$(".start-button").remove();
	$("#game-area").show();
	gameStart();
	})

	function gameStart() {

		var userNumber = 0;
		// Random Target Number Generator
		var targetNumber = Math.floor(Math.random() * (121 - 19) + 19);
		$('#target-number').html(targetNumber);

		// Random Button Number Generator
		var images = ['assets/images/DC1.jpg', 'assets/images/DC2.jpg', 'assets/images/DC3.png', 'assets/images/DC4.jpg']

		var numberOptions1 = [1, 5, 9];
		var numberOptions2 = [2, 6, 10];
		var numberOptions3 = [3, 7, 11];
		var numberOptions4 = [4, 8, 12];

		var number1 = numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
		var number2 = numberOptions2[Math.floor(Math.random() * numberOptions2.length)];
		var number3 = numberOptions3[Math.floor(Math.random() * numberOptions3.length)];
		var number4 = numberOptions4[Math.floor(Math.random() * numberOptions4.length)];

		for (var i = 0; i < images.length; i++) {
			var imgCharacter = $('<img>');
			$(imgCharacter).addClass('button');
			$(imgCharacter).attr('src', images[i]);
			$(imgCharacter).attr('value', number1);
			$('#button-box').append(imgCharacter);
		}


		//Assign Numbers to Buttons



		// Button Click Functions
		// $("#box-1").on("click", function(){

		// 	userNumber += this.value;
		// 	$("#your-number").html(userNumber);
		// });


		// User Number
	




		// Win/Lose Condition


	}	

});

	// Wins/Losses Counters





//Experimental Code
	// function setNumVal1 () {
	// 	document.getElementById("#box-1").value = box1;
	// }

	// function setNumVal2 () {
	// 	document.getElementById("#box-2").value = box2;
	// }

	// function setNumVal3 () {
	// 	document.getElementById("#box-3").value = box3;
	// }

	// function setNumVal4 () {
	// 	document.getElementById("#box-4").value = box4;
	// }


	// var numBox1 = [1, 3, 5];
	// var numBox2 = [2, 4, 6];
	// var numBox3 = [7, 9, 11];
	// var numBox4 = [8, 10, 12];
	// var box1 = numBox1[Math.floor(Math.random() * numBox1.length)];
	// var box2 = numBox2[Math.floor(Math.random() * numBox2.length)]; 
	// var box3 = numBox3[Math.floor(Math.random() * numBox3.length)]; 
	// var box4 = numBox4[Math.floor(Math.random() * numBox4.length)];