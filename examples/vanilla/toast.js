const toast = (message) => {
  let toastContainer = document.getElementById('toast-container')
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  let popup = document.createElement('div');
  popup.className = 'toast';
  popup.innerHTML = message;
  toastContainer.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, (2000 + message.length * 30));
}
