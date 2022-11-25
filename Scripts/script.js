// This is some code I, for the most part, took from a tutorial and revised to work with my page. Doing nav has gotta be the hardest thing for me for some reason!
$(document).ready(function () {
    $('nav ul li').hover(
        function () {
            $("ul", this).show("fast");
        }, function () {
            $("ul", this).hide("fast");
        });
});
$(document).ready(function () {
    $('#sources ul li').click(
        function () {
            $("li", this).show("fast");
        }, function () {
            $("li", this).hide("fast");
        });
});
// End of copied code.
const aboutNav = document.getElementById("aboutNav");
const aboutUs = document.getElementById("aboutUs");
const sourceExpand = document.getElementById("sourceExpand");
const sourceList = document.getElementById("sourceList");
aboutNav.addEventListener("click", () => {
    aboutUs.classList.toggle("active");
});
sourceExpand.addEventListener("click", () => {
    sourceList.classList.toggle("active");
});