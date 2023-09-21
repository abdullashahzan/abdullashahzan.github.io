const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

function handleKeyPress(event) {
    if (event.key === "Enter") {
        generateResponse()
    }
}

function generateResponse() {
    const message = document.getElementById('messageInput').value;
    document.getElementById('chatMessages').innerHTML = "Loading response, please wait..."
    const inputElement = document.getElementById("messageInput");
    inputElement.value = "";
    inputElement.disabled = true;
    document.getElementById("sendButton").disabled = true;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'It is Saudi National day and you are here to teach people about saudi national day and saudi arabian history' },
                { role: 'user', content: message },
            ],
        }),
    })
        .then(response => response.json())
        .then(data => {
            const assistantReply = data.choices[0].message.content;
            // Display the assistant's reply in your chat interface
            // You can append it to the chat container, for example.
            document.getElementById('chatMessages').innerHTML = assistantReply;
            inputElement.disabled = false;
            document.getElementById("sendButton").disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            inputElement.disabled = false;
            document.getElementById("sendButton").disabled = false;
        });
};
