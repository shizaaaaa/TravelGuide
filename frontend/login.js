// document.getElementById('signup-form').addEventListener('submit', async function (e) {
//     e.preventDefault(); // Prevent form submission

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const signupMessage = document.getElementById('signup-message');

//     try {
//         const response = await fetch('/api/auth/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         });

//         const data = await response.json();
//         if (response.ok) {
//             signupMessage.textContent = 'Signup successful!'; // Show success message
//             loadUsers(); // Refresh the user list
//         } else {
//             signupMessage.textContent = data.message || 'Signup failed. Please try again.';
//         }
//     } catch (error) {
//         console.error('Error during signup:', error);
//         signupMessage.textContent = 'An error occurred. Please try again later.';
//     }
// });

// // Function to load users
// async function loadUsers() {
//     try {
//         const response = await fetch('/api/auth/users');
//         const users = await response.json();

//         const userList = document.getElementById('user-list');
//         userList.innerHTML = ''; // Clear existing users
//         users.forEach(user => {
//             const listItem = document.createElement('li');
//             listItem.textContent = user.email; // Display email
//             userList.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error('Error loading users:', error);
//     }
// }

// // Load users on page load
// loadUsers();
