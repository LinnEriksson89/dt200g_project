/* DT200G - Grafisk teknik för webb
 * Project
 * Linn Eriksson, HT25
 */

"use strict;"

let slideIndex = 1;

showSlides(slideIndex);

//Control for next/previous
function plusSlides(i) {
    slideIndex += i;
    showSlides(slideIndex);
}

//Control for images
function currentSlide(i) {
    slideIndex = i;
    showSlides(slideIndex);
}

//Showing slides
function showSlides(i) {
    let numberOfSlides;
    let slides = document.getElementsByClassName("slideshowitem");
    let dots = document.getElementsByClassName("slideshowdot");

    //Check if we're on the last slide and if so circle back to start.
    if(i > slides.length) {
        slideIndex = 1;
    }

    //If clicking previous on first slide, circle to end.
    if(i < 1) {
        slideIndex = slides.length;
    }

    //Circle through all slides and hide them
    for (numberOfSlides = 0; numberOfSlides < slides.length; numberOfSlides++) {
        slides[numberOfSlides].style.display = "none";
    }

    //Circle through all dots and set as inactive
    for (numberOfSlides = 0; numberOfSlides < dots.length; numberOfSlides++) {
        dots[numberOfSlides].className = dots[numberOfSlides].className.replace("active", "");
    }

    //Set current slide to display and current dot to active
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}