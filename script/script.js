
// Lottie Animation for Jellyfish
lottie.loadAnimation({
    container: document.getElementById('jellyfish-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_k8fneg5w.json' // Lottie animation for jellyfish
});

// GSAP for smooth scrolling animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".challenge", {
    scrollTrigger: {
        trigger: ".challenge",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
});

 // Function to create random positions and animations for fish
 function createFish() {
    const fishes = document.querySelectorAll('.fish');
    fishes.forEach((fish) => {
        // Set random vertical position for the fish
        fish.style.top = Math.random() * 100 + 'vh';
        // Randomize animation direction and duration
        const direction = Math.random() > 0.5 ? 'left' : 'right';
        const animationDuration = Math.random() * 10 + 10; // Between 10s and 20s for slower speed
        fish.style.animation = `swim-${direction}-to-${direction === 'left' ? 'right' : 'left'} ${animationDuration}s linear infinite`;
        // Initial Position
        fish.style.transform = direction === 'left' ? 'translateX(10000px)' : 'translateX(1000vw)';
    });
}

// Function to create random positions and animations for jellyfish
function createJellyfish() {
    const jellyfish = document.querySelectorAll('.jellyfish');
    jellyfish.forEach((jelly) => {
        // Set random horizontal position for the jellyfish
        const randomY = Math.random() * 100 + 'vh'; // Randomize vertical position
        jelly.style.left = Math.random() * 100 + 'vw';
        jelly.style.top = randomY;
    });
}

// Function to create bubbles at random positions
function createBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = (Math.random() * 5 + 3) + 's'; // 3s to 8s
    });
}

// Initialize animations
createFish();
createJellyfish();
createBubbles();

