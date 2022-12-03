const aboutNav = document.getElementById("aboutNav");
const menuNav = document.getElementById("menuNav");
const contactsNav = document.getElementById('contactsNav');
const sourcesNav = document.getElementById('sourcesNav');
const aboutUs = document.getElementById("aboutUs");
const sourceExpand = document.getElementById("sourceExpand");
const sourceList = document.getElementById("sourceList");
const title = document.getElementById("title");
aboutNav.addEventListener("click", () => {
    aboutUs.classList.toggle("active");
});
sourceExpand.addEventListener("click", () => {
    sourceList.classList.toggle("active");
});
// This is some code I, for the most part, took from a tutorial and revised to work with my page. Doing nav has gotta be the hardest thing for me for some reason!
$(document).ready(function () {
    $('nav ul li').hover(
        function () {
            $("ul", this).show("fast");
            slogan.classList.add('active');
        }, function () {
            $("ul", this).hide("fast");
            slogan.classList.remove('active');
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
$(document).ready(function () {
    $(menuNav).hover(
        function () {
            title.classList.add('activeMenu');
        }, function () {
            title.classList.remove('activeMenu');
        });
});
$(document).ready(function () {
    $(contactsNav).hover(
        function () {
            title.classList.add('activeContacts');
        }, function () {
            title.classList.remove('activeContacts');
        });
});
$(document).ready(function () {
    $(sourcesNav).hover(
        function () {
            title.classList.add('activeSources');
        }, function () {
            title.classList.remove('activeSources');
        });
});
//End of helper code