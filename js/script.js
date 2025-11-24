
// Buy button confirmation
  const buyButton = document.querySelector('#buy button');
  buyButton.addEventListener('click', (e) => {
    e.preventDefault(); // prevent actual form submission
    const selectedBook = document.querySelector('#buy select').value;
    alert(`Thank you! You added "${selectedBook}" to your cart.`);
  });
  
  // Publisher Button Switcher
  const buttons = document.querySelectorAll('.publisher-btn');
  const contents = document.querySelectorAll('.content-item');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      contents[index].classList.add('active');
    });
  });

  

