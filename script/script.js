
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

// 3D Model Integration (if you have a 3D model, you can integrate here using Three.js or similar)
// Example: Three.js setup for fish model
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('fish-3d-model').appendChild(renderer.domElement);

// Add a simple geometry (a fish) for demonstration
const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x94d2bd });
const fish = new THREE.Mesh(geometry, material);
scene.add(fish);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    fish.rotation.x += 0.01;
    fish.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

