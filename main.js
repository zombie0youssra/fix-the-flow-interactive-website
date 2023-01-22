let li = document.querySelector("a");

li.addEventListener("click", colorchange);

function colorchange() {
  li.classList.toggle("i");
}
