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

const sentences = [
    "Join us in celebrating Saudi Arabia's rich heritage and culture on this special day!",
    "Celebrate the spirit of unity and pride on Saudi National Day.",
    "On this special day, we honor the Kingdom of Saudi Arabia and its people.",
    "From the deserts of Arabia to the forefront of AI technology.",
    "Saudi Arabia, where history's echoes whisper through the ages.",
    "A land where traditions are woven into the very fabric of life.",
    "A tapestry of culture, customs, and history."
];

const typedTextElement = document.getElementById("typed-text");
let currentSentenceIndex = 0;
const typingSpeed = 20;
const delayBetweenLoops = 3000;

function typeSentence(index) {
    const sentence = sentences[index];
    typedTextElement.textContent = "";
    let charIndex = 0;

    function typeCharacter() {
        if (charIndex < sentence.length) {
            typedTextElement.textContent += sentence[charIndex];
            charIndex++;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            setTimeout(() => typeSentence((index + 1) % sentences.length), delayBetweenLoops);
        }
    }

    typeCharacter();
}

typeSentence(currentSentenceIndex);

const imageUrls = [
    "./misc/saudi_flag.jpg",
    "./misc/Riyadh.jpg",
    "./misc/makkah.jpg",
    "./misc/beach.jpg",
    "./misc/castle.jpg",
    "./misc/mountain.jpg",
    "./misc/sidewalk.jpg",
    "./misc/tech.jpg"
];
const colors = [
    "#344e415d",
    "#375971a1",
    "#e5c0635d",
    "#4f617d5d",
    "#e5c0635d",
    "#e5c0635d",
    "#344e415d",
    "#375971a1"
]
const darkColors = [
    "#f7f7f7",
    "#f7f7f7",
    "#e5c063",
    "#f7f7f7",
    "#e5c063",
    "#e5c063",
    "#f7f7f7",
    "#f7f7f7"
]

const backgroundElement = document.querySelector(".backgroundimage");
const secondaryElement = document.querySelector(".bg");
const overlay = document.querySelector(".overlay");
const quote = document.querySelector(".quote");
let currentImageIndex = 0;
let currentColorIndex = 0;
const imageChangeInterval = 5000;
const slideDuration = 2000; // Adjust the slide animation duration (in milliseconds)

function changeBackgroundImage() {
    const imageUrl = imageUrls[currentImageIndex];

    // Create a new element for the animation
    const slideElement = document.createElement("div");
    slideElement.classList.add("background-slide");
    slideElement.style.backgroundImage = `url(${imageUrl})`;

    // Add the slide element to the background container
    backgroundElement.appendChild(slideElement);

    // Trigger the slide animation
    setTimeout(() => {
        slideElement.classList.add("slide-left");
    }, 100); // Delay the animation slightly to ensure it starts correctly

    // Remove the slide element after the animation completes
    setTimeout(() => {
        backgroundElement.style.backgroundImage = `url(${imageUrl})`;
        slideElement.remove();
    }, slideDuration);

    // Update the background color and text color as before
    secondaryElement.style.backgroundColor = colors[currentColorIndex];
    secondaryElement.style.color = darkColors[currentColorIndex];
    quote.style.color = darkColors[currentColorIndex];

    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Initial background image setup
changeBackgroundImage();

// Schedule background image changes
setInterval(changeBackgroundImage, imageChangeInterval);
