document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for home button
    const homeButton = document.getElementById('home-btn');

    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#top').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Navbar toggle
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    // Initialize cart count
    let cartCount = 0;

    // Function to add an item to the cart
    function addToCart() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    }

    // Attach the function to the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profile-pic');
    const imageUpload = document.getElementById('image-upload');
    const changePictureBtn = document.getElementById('change-picture-btn');

    // Trigger file input when the button is clicked
    changePictureBtn.addEventListener('click', function() {
        imageUpload.click();
    });

    // Handle file selection
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
                // Here you would typically upload the image to your server
                // and update the user's profile with the new image URL
                uploadImageToServer(file);
            };
            reader.readAsDataURL(file);
        }
    });

    // Function to upload image to server (placeholder)
    function uploadImageToServer(file) {
        // This is where you would implement the actual upload logic
        console.log('Uploading file:', file.name);
        // Example: 
        // const formData = new FormData();
        // formData.append('profile_image', file);
        // fetch('/upload-profile-image', { method: 'POST', body: formData })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-info-form');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const inputs = form.querySelectorAll('input');

    // Function to toggle edit mode
    function toggleEditMode(editable) {
        inputs.forEach(input => {
            input.readOnly = !editable;
            if (editable) {
                input.classList.add('editable');
            } else {
                input.classList.remove('editable');
            }
        });
        editBtn.style.display = editable ? 'none' : 'inline-block';
        saveBtn.style.display = editable ? 'inline-block' : 'none';
    }

    // Edit button click handler
    editBtn.addEventListener('click', function() {
        toggleEditMode(true);
    });

    // Form submit handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the updated data to your server
        // For this example, we'll just log it to the console
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        console.log('Updated user data:', userData);

        // Simulating a server request
        setTimeout(() => {
            alert('User information updated successfully!');
            toggleEditMode(false);
        }, 1000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const homeBtn = document.getElementById('home-btn');
    
    if (homeBtn) {
        homeBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = 'index.html'; // Navigate to index.html
        });
    }
});
