document.addEventListener('DOMContentLoaded', () => {
  const startedBtn = document.getElementById('get-started-btn');
  if (startedBtn) {
    startedBtn.addEventListener('click', e => {
      e.preventDefault();

      if (
        startedBtn.parentNode.children[1].value === '' ||
        startedBtn.parentNode.children[3].value === ''
      ) {
        return alert('Please give your name');
      }

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
