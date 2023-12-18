// myapp/static/js/script.js

document.addEventListener("DOMContentLoaded", function () {
  // Code that runs after the HTML document has been loaded

  // Example: Display a message when the user clicks on a navigation link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert(`You clicked on ${link.innerText}`);
    });
  });

  // Example: Fetch data from the server and update the content dynamically
  const featuredDishesSection = document.getElementById("content");
  fetch("/api/menu/") // Assuming you have a menu API endpoint
    .then((response) => response.json())
    .then((menuItems) => {
      // Update the featured dishes section with the fetched data
      menuItems.forEach((item) => {
        const dishElement = document.createElement("div");
        dishElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
        featuredDishesSection.appendChild(dishElement);
      });
    })
    .catch((error) => console.error("Error fetching menu:", error));
});
