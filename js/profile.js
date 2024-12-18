
// JavaScript for updating the profile photo
const photoInput = document.getElementById('profile-photo-upload');
photoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-photo').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// JavaScript for handling form submission
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    
    alert(`Profile updated! \nName: ${name} \nBio: ${bio}`);
});