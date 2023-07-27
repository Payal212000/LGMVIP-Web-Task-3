document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const profileImage = document.getElementById('profileImage').files[0];

    // Display data on the page
    const displayDataElement = document.getElementById('displayData');
    displayDataElement.innerHTML = `
      <h2>Registration Successful!</h2>
      <img src="${URL.createObjectURL(profileImage)}" alt="Profile Image" id="uploadedImage">
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Age:</strong> ${age}</p>
    `;

    // Show the success box
    const successBox = document.getElementById('successBox');
    successBox.style.display = 'block';

    // Optional: Scroll to the success box for better user experience
    successBox.scrollIntoView();
  });