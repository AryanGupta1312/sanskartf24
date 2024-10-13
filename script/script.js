
// //  Lottie Animation for Jellyfish
// lottie.loadAnimation({
//     container: document.getElementById('jellyfish-lottie'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'https://assets6.lottiefiles.com/packages/lf20_k8fneg5w.json' // Lottie animation for jellyfish
// });

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
        const randomTop = Math.random() * 100 + 'vh'; // Random vertical position
        const direction = Math.random() > 0.5 ? 'left' : 'right';
        const animationDuration = Math.random() * 10 + 10; // Random duration between 10-20s

        fish.style.top = randomTop;

        // Apply appropriate swim animation
        if (direction === 'left') {
            fish.style.animation = `swim-left-to-right ${animationDuration}s linear infinite`;
        } else {
            fish.style.animation = `swim-right-to-left ${animationDuration}s linear infinite`;
        }
    });
}

// Function to create random positions for jellyfish
function createJellyfish() {
    const jellyfish = document.querySelectorAll('.jellyfish');
    jellyfish.forEach((jelly) => {
        const randomTop = Math.random() * 90 + 'vh'; // Random vertical position
        const randomLeft = Math.random() * 100 + 'vw'; // Random horizontal position
        jelly.style.top = randomTop;
        jelly.style.left = randomLeft;
    });
}

// Function to create random positions and animations for bubbles
function createBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
        const randomLeft = Math.random() * 100 + 'vw'; // Random horizontal position
        const animationDuration = Math.random() * 5 + 5 + 's'; // Random duration 5-10s
        bubble.style.left = randomLeft;
        bubble.style.animationDuration = animationDuration;
    });
}

// Initialize animations
createFish();
createJellyfish();
createBubbles();