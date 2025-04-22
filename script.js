/* 
  SOBIE Site - Global JavaScript
  Author: Luke Moats
  Description:
    - Highlights active page link
    - Handles user name storage with localStorage
    - Displays greeting on account page
*/

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  let username = localStorage.getItem("sobieUsername");

  if (!username) {
    username = prompt("Welcome! Please enter your name:");
    if (username) {
      localStorage.setItem("sobieUsername", username);
    } else {
      username = "Guest";
    }
  }

  const userNameSpans = document.querySelectorAll(".user-name");
  userNameSpans.forEach(span => {
    span.textContent = username;
  });

  if (currentPage === "account.html") {
    alert(`👋 Welcome back, ${username}!`);
  }

  console.log("SOBIE JS active on:", currentPage);
});
