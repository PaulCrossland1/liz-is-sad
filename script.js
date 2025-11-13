// Cheerful JavaScript for Liz! 🌈

// Array of motivational messages
const motivationalMessages = [
    "You are stronger than you think! 💪",
    "Today is your day to shine! ✨",
    "Beautiful things happen when you believe in yourself! 🌟",
    "You have the power to create amazing things! 🎨",
    "Every step forward is progress! 🚶‍♀️",
    "You are capable of more than you know! 🌺",
    "Your smile lights up the world! 😊",
    "You are braver than yesterday! 🦁",
    "Great things take time, be patient! ⏰",
    "You are a fantastic person! 🦄",
    "Keep going, you're doing great! 🌈",
    "You bring joy to those around you! 🎉",
    "Your potential is endless! 🚀",
    "You are worthy of all the good things! 💝",
    "Today is a new opportunity! 🌅",
    "You are loved more than you know! 💕",
    "Your strength is inspiring! 🌟",
    "You make the world a better place! 🌍",
    "Believe in your magic! ✨",
    "You are exactly where you need to be! 🧭",
    "Your clubbed hand makes you perfectly unique! 🌺",
    "Your uniqueness is your superpower! ⭐",
    "Being different makes you extraordinary! 🌈",
    "Your clubbed hand is your special superpower! 💝",
    "You're perfect exactly as you are! ✨",
    "Your differences make you shine brighter! 🌟",
    "Your clubbed hand makes you one-of-a-kind! 🦋",
    "What makes you different makes you special! ❤️"
];

// Array of positive affirmations
const affirmations = [
    "I am worthy of love and happiness",
    "I choose to be happy and confident",
    "I am grateful for all the good in my life",
    "I am surrounded by love and support",
    "I believe in myself and my abilities",
    "I am strong and resilient",
    "I radiate positive energy",
    "I am deserving of success and joy",
    "I face challenges with courage",
    "I am becoming the best version of myself",
    "I attract good things into my life",
    "I am at peace with who I am",
    "I have the power to create change",
    "I am confident and capable",
    "I choose to focus on the positive",
    "I am creating a beautiful life",
    "I am grateful for this moment",
    "I trust the process of life",
    "I am exactly where I need to be",
    "I am overflowing with joy and gratitude"
];

// Get elements
const motivationBtn = document.getElementById('motivation-btn');
const motivationText = document.getElementById('motivation-text');
const newAffirmationBtn = document.getElementById('new-affirmation-btn');
const affirmation = document.getElementById('affirmation');
const dancingKitten = document.querySelector('.dancing-kitten');

// Function to get random message
function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Function to add bounce effect
function addBounceEffect(element) {
    element.classList.add('bounce');
    setTimeout(() => {
        element.classList.remove('bounce');
    }, 1000);
}

// Motivation button click event
motivationBtn.addEventListener('click', function() {
    const randomMessage = getRandomMessage(motivationalMessages);
    motivationText.textContent = randomMessage;
    addBounceEffect(motivationText);
    
    // Add some sparkle to the button
    motivationBtn.classList.add('pulse');
    setTimeout(() => {
        motivationBtn.classList.remove('pulse');
    }, 2000);
});

// New affirmation button click event
newAffirmationBtn.addEventListener('click', function() {
    const randomAffirmation = getRandomMessage(affirmations);
    affirmation.textContent = randomAffirmation;
    addBounceEffect(affirmation.parentElement);
    
    // Add some sparkle to the button
    newAffirmationBtn.classList.add('pulse');
    setTimeout(() => {
        newAffirmationBtn.classList.remove('pulse');
    }, 2000);
});

// Dancing kitten hover effect
if (dancingKitten) {
    dancingKitten.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 1s ease-in-out infinite';
    });
    
    dancingKitten.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
}

// Add some fun confetti-like effects on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle entrance animation to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
});

// Add keyboard support for accessibility
motivationBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
    }
});

newAffirmationBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
    }
});

// Add some encouraging messages to the console
console.log('%c✨ Hey Liz! You got this! ✨', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
console.log('%c🌈 You are amazing, brave, and wonderful! 🌈', 'color: #4ecdc4; font-size: 16px;');
console.log('%c💕 Today is going to be a great day! 💕', 'color: #45b7d1; font-size: 16px;');

// Add a fun easter egg - press 'L' for Liz!
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'l') {
        const specialMessages = [
            "Liz is LOVED! 💕",
            "Liz is LOVELY! 🌸",
            "Liz is LUMINOUS! ✨",
            "Liz is LEGENDARY! 🌟",
            "Liz is LIFE-CHANGING! 🌺"
        ];
        const message = getRandomMessage(specialMessages);
        alert(`🌈 ${message} 🌈`);
    }
});

// Function to add floating hearts (because why not!)
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = '20px';
    heart.style.opacity = '0.8';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'float 3s ease-in forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Add floating hearts on click (optional fun feature)
motivationBtn.addEventListener('click', function() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createFloatingHeart(), i * 200);
    }
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Memory Game Implementation 🎮
class MemoryGame {
    constructor() {
        this.gridElement = document.getElementById('game-grid');
        this.movesCounter = document.getElementById('moves-count');
        this.pairsFoundElement = document.getElementById('pairs-found');
        this.resetButton = document.getElementById('reset-game-btn');
        
        // Fun, positive emojis for Liz!
        this.emojis = ['🌸', '🌈', '🌟', '🌺', '🦋', '🌞', '🦄', '🎉'];
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.isProcessing = false;
        
        this.init();
    }
    
    init() {
        this.createCards();
        this.shuffleCards();
        this.renderCards();
        this.attachEventListeners();
    }
    
    createCards() {
        // Create pairs for each emoji
        this.cards = [];
        this.emojis.forEach(emoji => {
            this.cards.push({ id: emoji, emoji: emoji, isFlipped: false, isMatched: false });
            this.cards.push({ id: emoji, emoji: emoji, isFlipped: false, isMatched: false });
        });
    }
    
    shuffleCards() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    renderCards() {
        this.gridElement.innerHTML = '';
        this.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.index = index;
            
            if (card.isFlipped || card.isMatched) {
                cardElement.textContent = card.emoji;
                cardElement.classList.add('flipped');
            } else {
                cardElement.textContent = '?';
            }
            
            if (card.isMatched) {
                cardElement.classList.add('matched');
            }
            
            this.gridElement.appendChild(cardElement);
        });
    }
    
    attachEventListeners() {
        this.gridElement.addEventListener('click', (e) => this.handleCardClick(e));
        this.resetButton.addEventListener('click', () => this.resetGame());
        
        // Add keyboard support for accessibility
        this.gridElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const target = e.target.closest('.card');
                if (target) this.handleCardClick({ target });
            }
        });
    }
    
    handleCardClick(e) {
        const cardElement = e.target;
        if (cardElement.classList.contains('card') && !cardElement.classList.contains('flipped') && !this.isProcessing) {
            const index = parseInt(cardElement.dataset.index);
            this.flipCard(index);
        }
    }
    
    flipCard(index) {
        const card = this.cards[index];
        if (card.isFlipped || card.isMatched) return;
        
        card.isFlipped = true;
        this.flippedCards.push(index);
        this.moves++;
        this.updateDisplay();
        
        this.renderCards();
        
        if (this.flippedCards.length === 2) {
            this.isProcessing = true;
            setTimeout(() => this.checkForMatch(), 600);
        }
    }
    
    checkForMatch() {
        const [index1, index2] = this.flippedCards;
        const card1 = this.cards[index1];
        const card2 = this.cards[index2];
        
        if (card1.id === card2.id) {
            // Match found!
            card1.isMatched = true;
            card2.isMatched = true;
            this.matchedPairs++;
            
            // Add celebration animation
            const cardElements = document.querySelectorAll('.card');
            cardElements[index1].classList.add('celebration');
            cardElements[index2].classList.add('celebration');
            
            if (this.matchedPairs === 8) {
                setTimeout(() => this.celebrateWin(), 500);
            }
        } else {
            // No match
            card1.isFlipped = false;
            card2.isFlipped = false;
        }
        
        this.flippedCards = [];
        this.isProcessing = false;
        this.renderCards();
    }
    
    updateDisplay() {
        this.movesCounter.textContent = this.moves;
        this.pairsFoundElement.textContent = this.matchedPairs;
    }
    
    celebrateWin() {
        // Create confetti effect
        for (let i = 0; i < 20; i++) {
            setTimeout(() => this.createConfetti(), i * 50);
        }
        
        // Show win message
        setTimeout(() => {
            alert(`🎉 AMAZING JOB LIZ! 🎉\nYou completed the game in ${this.moves} moves!\nYou're an emoji matching superstar! ✨`);
        }, 500);
    }
    
    createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🎊', '🎈', '✨', '🌟', '💖'][Math.floor(Math.random() * 5)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.fontSize = '24px';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'fall 3s ease-out forwards';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
    
    resetGame() {
        this.matchedPairs = 0;
        this.moves = 0;
        this.flippedCards = [];
        this.isProcessing = false;
        this.createCards();
        this.shuffleCards();
        this.updateDisplay();
        this.renderCards();
    }
}

// Enhanced mobile touch support
document.addEventListener('DOMContentLoaded', function() {
    // Initialize memory game
    const memoryGame = new MemoryGame();
    
    // Add CSS for confetti animation
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    // Make cards more touch-friendly for mobile
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @media (hover: none) {
            .card {
                min-height: 50px;
            }
            .card:active {
                transform: scale(0.95);
            }
        }
    `;
    document.head.appendChild(styleElement);
});
