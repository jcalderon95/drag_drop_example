(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonHolder img");

	function changeHeadLine() {
		document.querySelector("h1").textContent = "Hey There from JS!";

		document.querySelector("p").textContent = "This is a subhead";
	}
	// set up the puzzle pieces and boards
	// 
	theButton.addEventListener("click", changeHeadLine);


})();
