document.addEventListener('DOMContentLoaded', () => {
    const helloElement = document.getElementById('hello');
    const buttonElement = document.getElementById('click-me');
    const additionalMessage = document.getElementById('additional-message');

    buttonElement.addEventListener('click', () => {
        helloElement.innerHTML = 'Hello JavaScript InnerHTML!';
        additionalMessage.classList.remove('hidden');
    });
});
