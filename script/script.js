
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



document.addEventListener("DOMContentLoaded", function () {
    // Add floating effect after the fade-in animation is done
    setTimeout(function() {
        const head = document.querySelector('.heading');
        head.classList.add('float');
        head.style.opacity = "1"; // Ensure it remains visible
        const Head = document.querySelector('.subheading');
        Head.classList.add('float');
        Head.style.opacity = "1";
        const hEad = document.querySelector('.scrollIcon');
        hEad.classList.add('float');
        hEad.style.opacity = "1";
    }, 1200) // 1.2 seconds delay after fade-in animation
});

 // JavaScript to hide icon on scroll
 window.addEventListener('scroll', function() {
    var scrollIcon = document.getElementById('scrollIcon');
    if (window.scrollY > 10) { // Hide the icon after scrolling 100px
        scrollIcon.classList.add('hidden');
    } else {
        scrollIcon.classList.remove('hidden');
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const linkToCopy = 'https://example.com'; // Replace this with your link
    navigator.clipboard.writeText(linkToCopy)
        .then(() => {
            document.getElementById('message').textContent = 'Link copied to clipboard!';
        })
        .catch(err => {
            document.getElementById('message').textContent = 'Failed to copy link.';
            console.error('Error copying link: ', err);
        });
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
