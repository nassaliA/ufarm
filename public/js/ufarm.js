function validate() {
  // Get form fields by their IDs
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const password = document.getElementById('new-password');
  const gender = document.querySelector('input[name="gender"]:checked');
  const profilePicture = document.getElementById('profile-picture');
  const age = document.getElementById('age');
  const role = document.getElementById('role');
  const ward = document.getElementById('ward');
  const bio = document.getElementById('bio');
  const termsAndConditions = document.getElementById('terms-and-conditions');

  // Validate each field
  let isValid = true;
  if (firstName.value.trim() === '') {
    document.getElementById('fnameError').innerHTML = 'Please enter your first name';
    isValid = false;
  }
  if (lastName.value.trim() === '') {
    document.getElementById('lnameError').innerHTML = 'Please enter your last name';
    isValid = false;
  }
  if (email.value.trim() === '') {
    document.getElementById('emailError').innerHTML = 'Please enter your email';
    isValid = false;
  }
  if (password.value.trim() === '') {
    document.getElementById('passwordError').innerHTML = 'Please enter a password';
    isValid = false;
  }
  if (!gender) {
    document.getElementById('genderError').innerHTML = 'Please select a gender';
    isValid = false;
  }
  if (!profilePicture.value) {
    document.getElementById('profilePictureError').innerHTML = 'Please upload a profile picture';
    isValid = false;
  }
  if (age.value < 13 || age.value > 120) {
    document.getElementById('ageError').innerHTML = 'Please enter a valid age (between 13 and 120)';
    isValid = false;
  }
  if (role.value === 'Default') {
    document.getElementById('roleError').innerHTML = 'Please select a role';
    isValid = false;
  }
  if (ward.value === 'selected') {
    document.getElementById('wardError').innerHTML = 'Please select a ward';
    isValid = false;
  }
  if (bio.value.trim() === '') {
    document.getElementById('bioError').innerHTML = 'Please provide a bio';
    isValid = false;
  }
  if (!termsAndConditions.checked) {
    document.getElementById('termsAndConditionsError').innerHTML = 'Please accept the terms and conditions';
    isValid = false;
  }

  return isValid;
}
