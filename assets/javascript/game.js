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

		// Random Number Generator for Buttons/Images
		var img1 = 'assets/images/DC1.jpg'
		var img2 = 'assets/images/DC2.jpg'
		var img3 = 'assets/images/DC3.png'
		var img4 = 'assets/images/DC4.jpg'

		var numberOptions1 = [11, 3, 5];
		var numberOptions2 = [12, 4, 6];
		var numberOptions3 = [7, 9, 1];
		var numberOptions4 = [8, 10, 2];

		var number1 = numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
		var number2 = numberOptions2[Math.floor(Math.random() * numberOptions2.length)];
		var number3 = numberOptions3[Math.floor(Math.random() * numberOptions3.length)];
		var number4 = numberOptions4[Math.floor(Math.random() * numberOptions4.length)];

		//Assign Number Value and Image to Buttons
		var imgCharacter1 = $('<img>');
			$(imgCharacter1).addClass('button');
			$(imgCharacter1).attr('src', img1);
			$(imgCharacter1).attr('value', number1);
			$('#button-box').append(imgCharacter1);

		var imgCharacter2 = $('<img>');
			$(imgCharacter2).addClass('button');
			$(imgCharacter2).attr('src', img2);
			$(imgCharacter2).attr('value', number2);
			$('#button-box').append(imgCharacter2);

		var imgCharacter3 = $('<img>');
			$(imgCharacter3).addClass('button');
			$(imgCharacter3).attr('src', img3);
			$(imgCharacter3).attr('value', number3);
			$('#button-box').append(imgCharacter3);

		var imgCharacter4 = $('<img>');
			$(imgCharacter4).addClass('button');
			$(imgCharacter4).attr('src', img4);
			$(imgCharacter4).attr('value', number4);
			$('#button-box').append(imgCharacter4);


		// Button Click Functions
		$(".button").on("click", function(){
			var imgValue = ($(this).attr('value'));
			imgValue = parseInt(imgValue);
			userNumber += imgValue;
			$("#user-number").html(userNumber);
		});


		// Win/Lose Condition
		function winCondition() {
			if (usernumber === targetnumber) {
				alert("You win! The dark powers of the Crytals is now yours!");

			}
		}




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