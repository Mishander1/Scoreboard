// When the user clicks the purchase button, render out
let home = 0
let guest = 0
let homeEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")

function homePlusOne() {
	home += 1
	homeEl.textContent =  home
	console.log(home)
}
function homePlusTwo() {
	home += 2
	homeEl.textContent =  home
	console.log(home)
}
function homePlusThree() {
	home += 3
	homeEl.textContent =  home
	console.log(home)
}
function guestPlusOne() {
	guest += 1
	guestEl.textContent =  guest
	console.log(guest)
}
function guestPlusTwo() {
	guest += 2
	guestEl.textContent =  guest
	console.log(guest)
}
function guestPlusThree() {
	guest += 3
	guestEl.textContent =  guest
	console.log(guest)
}

// "Something went wrong, please try again" in the paragraph
// that has the id="error".


