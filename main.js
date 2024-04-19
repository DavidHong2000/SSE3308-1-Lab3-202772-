$(document).ready(function () {
  $(".header").height($(window).height());
});

document.addEventListener("DOMContentLoaded", function () {
  const btnTellMeMore = document.querySelector("#btnTellMeMore");

  // click event listener for btnTellMeMore
  btnTellMeMore.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=10kJ47UvkU0";
  });

  // select the contact section
  const contactSection = document.querySelector("#contact");

  // navigation link for Contact
  const contactNavLink = document.querySelector('a[href="#contact"]');

  // event listener (click) to the Contact navigation link
  contactNavLink.addEventListener("click", function () {
    // scroll to the contact section
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  // select the about section
  const aboutSection = document.querySelector("#about");

  // navigation link for about
  const aboutNavLink = document.querySelector('a[href="#about"]');

  // event listener (click) to the about navigation link
  aboutNavLink.addEventListener("click", function () {
    // scroll to the about section
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});
