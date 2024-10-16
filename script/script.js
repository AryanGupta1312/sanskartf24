
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

    const jellyfish = document.querySelector('.jellyfish');

// Function to create random movement
function moveJellyfish() {
    const randomX = Math.random() * window.innerWidth; // Random X position
    jellyfish.style.left = `${randomX}px`; // Set random X position

    jellyfish.style.transition = 'transform 5s linear';
    jellyfish.style.transform = 'translateY(-100vh)'; // Move jellyfish upwards

    // Reset position after animation
    setTimeout(() => {
        jellyfish.style.transform = 'translateY(100vh)'; // Reset to start position
        moveJellyfish(); // Call function again for continuous movement
    }, 5000); // Duration of the animation
}

// Start the movement
moveJellyfish();

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
            const messageElement = document.getElementById('message');
            messageElement.textContent = 'Link copied to clipboard!';
            messageElement.style.display = 'block'; // Show the message
            
            // Hide the message after 3 seconds
            setTimeout(() => {
                messageElement.style.opacity = 0; // Fade out effect
                setTimeout(() => {
                    messageElement.style.display = 'none'; // Hide after fade out
                }, 500); // Match this timeout with the fade out duration
            }, 3000); // Message will disappear after 3 seconds
        })
        .catch(err => {
            const messageElement = document.getElementById('message');
            messageElement.textContent = 'Failed to copy link.';
            messageElement.style.display = 'block'; // Show the error message
            
            // Hide the message after 3 seconds
            setTimeout(() => {
                messageElement.style.opacity = 0; // Fade out effect
                setTimeout(() => {
                    messageElement.style.display = 'none'; // Hide after fade out
                }, 500); // Match this timeout with the fade out duration
            }, 3000); // Message will disappear after 3 seconds

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

