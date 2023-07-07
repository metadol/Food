console.log("helo")
let menu = document.querySelector("#menu-icon");
let navb = document.querySelector(".navbar");
console.log(navb)

menu.addEventListener('click',function(){
    console.log("clicked")
    navb.classList.toggle("active");/*togggle is important*/
});


window.onscroll=()=>{
    navb.classList.remove("active");
};


//navb.classList.toggle("active");
/*toggles the "active" class on the classList property of an element with the ID "navb." Here's how it works:
navb refers to the element with the ID "navb" in the HTML document. It could be a navigation bar or any other element you have in your HTML.

classList is a property of DOM elements that provides access to the list of CSS classes applied to the element.

toggle("active") is a method of the classList object. It adds the "active" class to the element if it doesn't have it, and removes it if it already has it.

So, when this code is executed, it checks if the element with the ID "navb" has the class "active." If it has the class, it is removed, and if it doesn't 
have the class, it is added.This code is commonly used in JavaScript to create interactive behavior, such as toggling a class to show or hide an element, ch
ange its appearance, or trigger animations.*/