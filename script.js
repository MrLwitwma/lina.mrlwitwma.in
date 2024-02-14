// JS for uploading user input
document.addEventListener('DOMContentLoaded', () => {
    const chatDisplay = document.getElementById('chat');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault(); // Prevent the default form submission behavior
        }
    });

    function loading_message() {
        const loaderDiv = document.createElement('div');
        loaderDiv.classList.add('loader');
        chatDisplay.appendChild(loaderDiv);
    }
    
    function loaded_message() {
        const loaderDiv = chatDisplay.querySelector('.loader');
        if (loaderDiv) {
            chatDisplay.removeChild(loaderDiv);
        }
    }

    async function sendMessage() {
        const userMessage = userInput.value;
        userInput.value = '';
        if (userMessage.trim() !== '') {
            // Display user message
            displayMessage(`<b style="font-size:16px"> User </b><br>${escapeHTML(userMessage)}`, 'user');
            loading_message();
            // Send user message to the server
            const response = await fetch('https://mrlwitwma.pythonanywhere.com/get_response', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `user_input=${encodeURIComponent(userMessage)}`
            });
            // Parse AI response as JSON
            const responseData = await response.json();
        
            // Display AI response
            displayMessage(responseData.response, 'ai');
            loaded_message()
        }
    }



    function escapeHTML(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }

    function scrollToBottom() {
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    function displayMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender);
        messageDiv.innerHTML = message; // Allow HTML responses to work
        chatDisplay.appendChild(messageDiv);

        // Scroll to the bottom after adding a new message
        scrollToBottom();
    }
});