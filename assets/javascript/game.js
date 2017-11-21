$(document).ready(function(){
	//Starting Stats
	var wins = 0;
	var losses = 0;

	function gameStart() {
		var userNumber = 0;
		// Random Target Number Generator
		var targetNumber = Math.floor(Math.random() * (121 - 19) + 19);
		$('#target-number').html(targetNumber);

		// Random Button Number Generator
		var numBox1 = [1, 3, 5];
		var numBox2 = [2, 4, 6];
		var numBox3 = [7, 9, 11];
		var numBox4 = [8, 10, 12];
		var box1 = numBox1[Math.floor(Math.random() * numBox1.length)];
		var box2 = numBox2[Math.floor(Math.random() * numBox2.length)]; 
		var box3 = numBox3[Math.floor(Math.random() * numBox3.length)]; 
		var box4 = numBox4[Math.floor(Math.random() * numBox4.length)];

		//Assign Numbers to Buttons
		function setNumVal1 () {
			document.getElementById("#box-1").value = box1;
		}

		function setNumVal2 () {
			document.getElementById("#box-2").value = box2;
		}

		function setNumVal3 () {
			document.getElementById("#box-3").value = box3;
		}

		function setNumVal4 () {
			document.getElementById("#box-4").value = box4;
		}

		// Button Click Functions
		$("#box-1").on("click", function(){

			userNumber += this.value;
			$("#your-number").html(userNumber);
		});


		// User Number
	



		// Wins/Losses Counters



		// Win/Lose Condition




	};
gameStart();
})