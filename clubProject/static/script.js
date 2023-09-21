var apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

document.getElementById('sendButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
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
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const promptInput = document.getElementById('prompt');
const generateButton = document.getElementById('generate');
const imageContainer = document.getElementById('image-container');
const generatedImage = document.getElementById('generated-image');

generateButton.addEventListener('click', function () {
    const prompt = promptInput.value;

    if (prompt) {
        generateDALLEResponse(prompt)
            .then(imageUrl => {
                generatedImage.src = imageUrl;
                imageContainer.style.display = 'block';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Please enter a DALL·E prompt.');
    }
});

async function generateDALLEResponse(prompt) {
    var apiKey = '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'; // Replace with your actual API key
    const apiUrl = 'https://api.openai.com/v1/davinci/images';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result.data.url;
}
