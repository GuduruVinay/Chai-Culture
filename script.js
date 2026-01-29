// Email form handling
document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('emailInput').value;
  const successMessage = document.getElementById('successMessage');
  
  // Simple email validation
  if (email && email.includes('@')) {
    // Store email (in a real app, this would send to a backend)
    console.log('Email submitted:', email);
    
    // Show success message
    successMessage.classList.add('show');
    
    // Clear form
    document.getElementById('emailInput').value = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  }
});
