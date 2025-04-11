// details.js

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://localhost:1100/api/contacts"); // Adjust the URL as necessary
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        displayUserDetails(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("userDetails").innerHTML = "An error occurred while fetching data.";
    }
});

function displayUserDetails(users) {
    const userDetailsContainer = document.getElementById("userDetails");
    userDetailsContainer.innerHTML = ""; // Clear the container

    if (users.length === 0) {
        userDetailsContainer.innerHTML = "<p>No users found.</p>";
        return;
    }

    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className = "user"; // Optional: add a class for styling
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;
        userDetailsContainer.appendChild(userDiv);
    });
}
