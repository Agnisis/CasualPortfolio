

//smooth scroll facility

document.addEventListener("DOMContentLoaded", () => {
  // Get all the links with the "nav-link" class
  const listOfLinks = document.querySelectorAll(".nav-link");

  // Loop over all the links
  listOfLinks.forEach(function (link) {
    // Listen for a click
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const targetId = link.getAttribute("href").substring(1); // Get the target ID

      // Scroll to the target section with smooth behavior
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});



//hamburger menu