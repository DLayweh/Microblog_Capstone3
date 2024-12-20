// Function to load saved data from localStorage
function loadProfileData() {
    const name = localStorage.getItem('name');
    const bio = localStorage.getItem('bio');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
   
    if (name) document.getElementById('name').value = name;
    if (bio) document.getElementById('bio').value = bio;
    if (email) document.getElementById('email').value = email;
    if (password) document.getElementById('password').value = password;
  }
   
  // Function to save data to localStorage
  function saveProfileData(event) {
    event.preventDefault(); // Prevent the form from reloading the page
   
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    localStorage.setItem('name', name);
    localStorage.setItem('bio', bio);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
   
    
  }
   
  // Function to handle logout
  function handleLogout() {
    // Optionally, clear localStorage if needed
    // localStorage.clear();
    window.location.href = 'login.html'; // Redirect to the logout page
  }
   
  // Attach event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Load profile data on page load
    loadProfileData();
   
    // Save button functionality
    document.getElementById('editable-profile-form').addEventListener('submit', saveProfileData);
   
    // Log-Out button functionality
    document.getElementById('logout').addEventListener('click', handleLogout);
  });
  