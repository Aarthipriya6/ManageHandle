"use strict";

const nav = document.querySelector(".nav");

const navlinks = document.querySelector(".nav__links");

const navLink = document.querySelectorAll(".nav__link");
const footerNav = document.querySelector(".footer-nav");
const footerLinks = document.querySelector(".footer__links");
const footerLink = document.querySelectorAll(".footer__link");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav__links").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el === link) el.style.opacity = this;
    });
  }
};

navlinks.addEventListener("mouseover", handleHover.bind(0.5));

navlinks.addEventListener("mouseout", handleHover.bind(1));

// const handlefooter = function (e) {
//   if (e.target.classList.contains("footer__link")) {
//     const link = e.target;
//     const siblings = link
//       .closest(".footer__links")
//       .querySelectorAll(".footer__link");

//     siblings.forEach((el) => {
//       if (el === link) el.style.color = this;
//     });
//   }
// };

// footerLinks.addEventListener("mouseover", handlefooter.bind("#f25f3a"));
// footerLinks.addEventListener("mouseout", handlefooter.bind("#fff"));

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const form = document.getElementById("form");
const text = document.querySelector(".text-type");
const error = document.querySelector(".error");
const btn = document.querySelector(".footer-btn");

btn.addEventListener("click", (e) => {
  let msg = [];
  if (text.value.length <= 6) {
    msg.push("Please enter the valid email");
  }
  if (msg.length > 0) {
    e.preventDefault();
    error.innerHTML = msg.join(",");
  }
});
