// Hello App JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');

    // Array of fun greetings
    const greetings = [
        'Hello', 'Hi', 'Hey there', 'Greetings', 'Welcome'
    ];

    // Function to get random greeting
    const getRandomGreeting = () => {
        return greetings[Math.floor(Math.random() * greetings.length)];
    };

    // Function to display greeting
    const showGreeting = () => {
        const name = nameInput.value.trim();
        if (name) {
            const greeting = getRandomGreeting();
            greetingMessage.textContent = `${greeting}, ${name}! 👋`;
            greetingMessage.classList.remove('show');
            // Force reflow
            void greetingMessage.offsetWidth;
            greetingMessage.classList.add('show');
        } else {
            greetingMessage.textContent = 'Please enter your name! 😊';
            greetingMessage.classList.remove('show');
            // Force reflow
            void greetingMessage.offsetWidth;
            greetingMessage.classList.add('show');
        }
    };

    // Event listeners
    greetButton.addEventListener('click', showGreeting);
    
    // Allow Enter key to trigger greeting
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            showGreeting();
        }
    });

    // Focus input on page load
    nameInput.focus();
});