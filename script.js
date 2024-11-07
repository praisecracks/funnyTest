const carry = document.querySelector(".icon-carry");
var one = document.getElementById("oner")
var two = document.getElementById("twoner")
var three = document.getElementById("threener")
var ul  = document.getElementById("list")

carry.addEventListener("click", e => {
    // ul.style.display = ul.style.display === "none" ? 'grid': 'none';

    if ( ul.style.display = ul.style.display === "none") {
            ul.style.transition = "2s"
        ul.style.display = "grid",
            three.style.transform = "rotate(-50deg)",
            two.style.transform = "rotate(50deg)",
            one.style.filter = "opacity(0)"
            // two.style.transform = "rotate(50deg)",
            
            
        }
        else{
            ul.style.display = "none"
            one.style.filter = "opacity(1)"
            three.style.transform = "rotate(0deg)",
            two.style.transform = "rotate(0deg)"
            // two.style.transform = "translateY(-10px)"   
    }
})

// carry.addEventListener("click", e => {


//     ul.style.display = "grid"
//     e.preventDefault();
// })

const logo = document.querySelector(".logo")

logo.addEventListener("click", e => {
    alert("Thanks for checking")
    one.style.transform = "translateY(0px)",
    three.style.marginTop = "0px"
    ul.style.display = "none"
})