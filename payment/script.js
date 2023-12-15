document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let cardNumber = document.getElementById('card-number').value;
    let expirationDate = document.getElementById('expiration-date').value;
    let cvv = document.getElementById('cvv').value;
    
    if (cardNumber.length !== 16 || expirationDate.length !== 5 || cvv.length !== 3) {
      alert('Please fill in all fields correctly.');
      return;
    }
    
    console.log('Payment Successful!');
  });