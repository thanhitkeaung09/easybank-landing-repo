import './style.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import ScrollReveal from "scrollreveal";
import 'waypoints/lib/noframework.waypoints.min'



let navBar = document.getElementById("navBar");

var waypoint = new Waypoint({
    element: document.getElementById('waypointSection'),
    handler: function(direction) {
        if(direction == "down"){
            navBar.style.display = "block";
            navBar.classList.add("position-fixed");
            navBar.classList.add("w-100");
            navBar.classList.add("animate__fadeInDown")
            navBar.classList.add("header")

            console.log(direction)
        }
        else{
            navBar.style.display = "block";
            navBar.classList.remove("position-fixed");
            navBar.classList.remove("w-100");
            navBar.classList.remove("animate__fadeInDown")
            navBar.classList.remove("header")
            console.log(direction)
        }


    },
    offset: '50%'
})


let slideDown = {
    distance: '70px',
    duration : 1000,
    origin: 'top',
    interval : 500
};

ScrollReveal().reveal('.content', slideDown);
