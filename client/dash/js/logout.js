function handleLogout() {
	// Clear the token from localStorage
	localStorage.removeItem("token");

	// Redirect to login page
	window.location.href = "../../client/index.html"; // Adjust path if needed
}

// Add event listener to the logout button
document.addEventListener("DOMContentLoaded", () => {
	const logoutButton = document.getElementById("logout-button");
	if (logoutButton) {
		logoutButton.addEventListener("click", handleLogout);
	}
});

// document.addEventListener("DOMContentLoaded", async () => {
// 	const token = localStorage.getItem("token");
// 	if (!token) {
// 		// Redirect to login if token is missing
// 		window.location.href = "client/index.html";
// 	}

// 	try {
// 		const response = await fetch("http://localhost:8001/api/dashboard", {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		});
// 		const data = await response.json();

// 		if (response.ok) {
// 			// Update the DOM with username and recipe count
// 			document.getElementById("welcomeUser").textContent =
// 				`Welcome ${data.username}`;
// 			document.getElementById("username").textContent = data.username;
// 			document.getElementById("totalRecipes").textContent = data.totalRecipes;
// 		} else {
// 			console.error("Error fetching dashboard data:", data.message);
// 		}
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// });

// // Logout functionality
// document.getElementById("logout-btn").addEventListener("click", () => {
// 	localStorage.removeItem("token"); // Remove the token from localStorage
// 	window.location.href = "signin.html"; // Redirect to the sign-in page
// });
