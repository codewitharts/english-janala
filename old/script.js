document.addEventListener('DOMContentLoaded', () => {
  const startedBtn = document.getElementById('get-started-btn');
  if (startedBtn) {
    startedBtn.addEventListener('click', e => {
      e.preventDefault();

      const nameInput = startedBtn.parentNode.children[1].value.trim();
      const anotherInput = startedBtn.parentNode.children[3].value.trim();

      if (nameInput === '' || anotherInput === '') {
        return alert('Please give your name');
      }
      localStorage.setItem('userName', nameInput);

      window.location = 'home.html';
    });
  }

  const logOut = document.getElementById('logout-btn');
  if (logOut) {
    logOut.addEventListener('click', e => {
      e.preventDefault();
      window.location = 'index.html';
    });
  }
});
