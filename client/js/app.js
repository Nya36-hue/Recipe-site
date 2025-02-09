document.addEventListener("DOMContentLoaded", () => {
	// Check if the user is logged in by looking for a token in localStorage
	const token = localStorage.getItem("token");

	// Select the user link
	const userLink = document.getElementById("user-link");

	// Update the navigation link based on login status
	if (token) {
		userLink.href = "dash/index.html";
		userLink.textContent = "Dashboard";
	} else {
		userLink.href = "signin.html";
		userLink.textContent = "Login";
	}
});

// Utility function to get an element by selector
const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	console.error(`Element with selector "${selector}" not found.`);
	return null; // Avoid throwing an error
};

// Navbar toggle functionality
const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

// Setting the current year in the footer
const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

// Fetch and display recipes from the API
document.addEventListener("DOMContentLoaded", () => {
	const recipesList = document.getElementById("recipes-list");

	// Fetch recipes from the API
	fetch("http://localhost:8001/api/recipes")
		.then((response) => response.json())
		.then((data) => {
			// Clear the recipes list
			recipesList.innerHTML = "";

			// Loop through each recipe and create the HTML structure
			data.forEach((recipe) => {
				const recipeHTML = `
          <a href="recipe.html?id=${recipe._id}" class="recipe">
            <img
              src="${recipe.image}"
              class="img recipe-img"
              alt="${recipe.name}"
            />
            <h5>${recipe.name}</h5>
            <p>Servings: ${recipe.servings} | Cook: ${recipe.cookingTime}min</p>
          </a>
        `;
				// Insert the recipe into the recipes list
				recipesList.insertAdjacentHTML("beforeend", recipeHTML);
			});
		})
		.catch((error) => {
			console.error("Error fetching recipes:", error);
			recipesList.innerHTML = "<p>Failed to load recipes.</p>";
		});
});

document.addEventListener("DOMContentLoaded", () => {
	const categoriesList = document.querySelector(".categories-list");
	if (!categoriesList) {
		console.error("Categories list element not found.");
		return;
	}

	fetch("http://localhost:8001/api/recipes/categories")
		.then((response) => response.json())
		.then((data) => {
			categoriesList.innerHTML = "";
			data.forEach((category) => {
				const categoryHTML = `
                    <a href="categories-template.html?category=${category._id}">
                        ${category._id} (${category.count})
                    </a>
                `;
				categoriesList.insertAdjacentHTML("beforeend", categoryHTML);
			});
		})
		.catch((error) => {
			console.error("Error fetching categories:", error);
			categoriesList.innerHTML = "<p>Failed to load categories.</p>";
		});
});
