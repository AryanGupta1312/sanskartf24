
// //  Lottie Animation for Jellyfish
// lottie.loadAnimation({
//     container: document.getElementById('jellyfish-lottie'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'https://assets6.lottiefiles.com/packages/lf20_k8fneg5w.json' // Lottie animation for jellyfish
// });

// GSAP for smooth scrolling animations

document.addEventListener("DOMContentLoaded", function() {
    // Function to create random positions and animations for fish
    function createFish() {
        const fishes = document.querySelectorAll('.fish');
        fishes.forEach((fish) => {
            const randomTop = Math.random() * 90 + 'vh'; // Random vertical position
            const direction = Math.random() > 0.5 ? 'left' : 'right';
            const animationDuration = Math.random() * 5 + 5; // Random duration between 5-10s

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
            jelly.style.animationDelay = Math.random() * 5 + 's'; // Random delay for each jellyfish
        });
    }

    // Function to create random positions and animations for bubbles
    function createBubbles() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach((bubble) => {
            const randomLeft = Math.random() * 100 + 'px'; // Random horizontal position
            bubble.style.left = randomLeft;
            bubble.style.animationDelay = Math.random() * 3 + 's'; // Random delay for bubbles
        });
    }

    // Initialize animations
    createFish();
    createJellyfish();
    createBubbles();
});

document.addEventListener("DOMContentLoaded", function() {
    // Make all elements appear smoothly
    const textElements = document.querySelectorAll('h1, p');
    const jellyfishElements = document.querySelectorAll('.jellyfish');
    const fishElements = document.querySelectorAll('.fish');
    const bubbleElements = document.querySelectorAll('.bubble');

    // Function to make elements appear
    function makeElementsAppear() {
        textElements.forEach((el) => {
            el.style.opacity = 1;
        });
        jellyfishElements.forEach((jelly) => {
            jelly.style.opacity = 1;
        });
        fishElements.forEach((fish) => {
            fish.style.opacity = 1;
        });
        bubbleElements.forEach((bubble) => {
            bubble.style.opacity = 1;
        });
    }

    // Delay the appearance for smoother experience
    setTimeout(makeElementsAppear, 1000);
});
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
