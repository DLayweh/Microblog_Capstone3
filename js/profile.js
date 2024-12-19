const API_BASE_URL = "http://microbloglite.us-east-2.elasticbeanstalk.com/api";
const token = "YOUR_API_TOKEN"; // Replace with the user's authentication token

// Function to fetch user data
async function fetchUserData() {
    try {
        const response = await fetch(`${API_BASE_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const userData = await response.json();
            displayUserData(userData);
        } else {
            console.error("Failed to fetch user data");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Function to display user data on the profile page
function displayUserData(user) {
    document.getElementById("name").value = user.name || "";
    document.getElementById("bio").value = user.bio || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("profile-photo").src = user.profilePhoto || "images/default-profile.jpg";
    document.getElementById("cover-photo").src = user.coverPhoto || "images/default-cover.jpg";
}

// Function to update user data
async function updateUserData(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const updatedData = { name, bio, email };
    if (password) {
        updatedData.password = password; // Only send password if it was updated
    }

    try {
        const response = await fetch(`${API_BASE_URL}/users/me`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            alert("Profile updated successfully!");
            const updatedUser = await response.json();
            displayUserData(updatedUser);
        } else {
            console.error("Failed to update user data");
        }
    } catch (error) {
        console.error("Error updating user data:", error);
    }
}

// Fetch user data on page load
fetchUserData();

// Add event listener for form submission
document.getElementById("editable-profile-form").addEventListener("submit", updateUserData);
