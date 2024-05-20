document.addEventListener('DOMContentLoaded', () => {
    const helloElement = document.getElementById('hello');
    const buttonElement = document.getElementById('click-me');
    const additionalMessage = document.getElementById('additional-message');

    buttonElement.addEventListener('click', () => {
        helloElement.textContent = 'Have Room Have WiFi';
        buttonElement.textContent = 'Room39!';
        additionalMessage.classList.remove('hidden');
    });
});
