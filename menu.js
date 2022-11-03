// Create a menu button. When clicked, it opens a menu with two links. Clicking either of the menu options shows the appropriate page content and hides the other. (Note: this does not link to a new page; it uses JavaScript to show/hide different contents. You will have to prevent the default <a> behavior.) The menu also closes when a menu option is clicked.

const label = document.getElementById("options");
const resultDiv = document.getElementById("result")

label.addEventListener('click', chooseOption);

function chooseOption(event){
  event.preventDefault();

}