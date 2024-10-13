
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

const TEXTURE_PATH = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123879/';

/**
 * Create the animation request.
 */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {
    return window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback, element) {
      // 60 FPS
      window.setTimeout(callback, 1000 / 60);
    };
  })();
}

/**
 * Set our global variables.
 */
var camera,
    scene,
    renderer,
    effect,
    controls,
    element,
    container,
    sphere,
    sphereCloud,
    rotationPoint;
var degreeOffset = 90;
var earthRadius = 80;

var getEarthRotation = function() {
  // Get the current time.
  var d = new Date();
  var h = d.getUTCHours();
  var m = d.getUTCMinutes();

  // Calculate total minutes.
  var minutes = h * 60;
  minutes += m;

  // Turn minutes into degrees.
  degrees = minutes/3.9907;

  // Add an offset to match UTC time.
  degrees += degreeOffset;
  return degrees;
}

var degrees = getEarthRotation();

// Calculate Earth's rotation position.
setInterval(function() {
  // Get the current time.
  var d = new Date();
  var h = d.getUTCHours();
  var m = d.getUTCMinutes();

  // Calculate total minutes.
  var minutes = h * 60;
  minutes += m;

  // Turn minutes into degrees.
  degrees = minutes/3.9907;

  // Add an offset to match UTC time.
  degrees += degreeOffset;
}, 60000);

init();
animate();

/**
 * Initializer function.
 */
function init() {
  // Build the container
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  // Create the scene.
  scene = new THREE.Scene();

  // Create a rotation point.
  baseRotationPoint = new THREE.Object3D();
  baseRotationPoint.position.set( 0, 0, 0 );
  scene.add( baseRotationPoint );
  
  // Create world rotation point.
  worldRotationPoint = new THREE.Object3D();
  worldRotationPoint.position.set( 0, 0, 0 );
  scene.add( worldRotationPoint );

  rotationPoint = new THREE.Object3D();
  rotationPoint.position.set( 0, 0, earthRadius * 4 );
  baseRotationPoint.add( rotationPoint );

  // Create the camera.
  camera = new THREE.PerspectiveCamera(
   45, // Angle
    window.innerWidth / window.innerHeight, // Aspect Ratio.
    1, // Near view.
    10000 // Far view.
  );
  rotationPoint.add( camera );

  // Build the renderer.
  renderer = new THREE.WebGLRenderer();
  element = renderer.domElement;
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled;
  container.appendChild( element );

  // Build the controls.
  controls = new THREE.OrbitControls( camera, element );
  controls.enablePan = true;
  controls.enableZoom = true; 
  controls.maxDistance = earthRadius * 8;
  controls.minDistance = earthRadius * 2;
  controls.target.copy( new THREE.Vector3( 0, 0, -1 * earthRadius * 4 ));

  function setOrientationControls(e) {
    if (!e.alpha) {
     return;
    }

    controls = new THREE.DeviceOrientationControls( camera );
    controls.connect();

    window.removeEventListener('deviceorientation', setOrientationControls, true);
  }
  window.addEventListener('deviceorientation', setOrientationControls, true);

  // Ambient lights
  var ambient = new THREE.AmbientLight( 0x222222 );
  scene.add( ambient );

  // The sun.
  var light = new THREE.PointLight( 0xffeecc, 1, 5000 );
  light.position.set( -400, 0, 100 );
  scene.add( light );

  // Since the sun is much bigger than a point of light, add four fillers.
  var light2 = new THREE.PointLight( 0xffffff, 0.6, 4000 );
  light2.position.set( -400, 0, 250 );
  scene.add( light2 );

  var light3 = new THREE.PointLight( 0xffffff, 0.6, 4000 );
  light3.position.set( -400, 0, -150 );
  scene.add( light3 );

  var light4 = new THREE.PointLight( 0xffffff, 0.6, 4000 );
  light4.position.set( -400, 150, 100 );
  scene.add( light4 );

  var light5 = new THREE.PointLight( 0xffffff, 0.6, 4000 );
  light5.position.set( -400, -150, 100 );
  scene.add( light5 );

  // Add the Earth sphere model.
  var geometry = new THREE.SphereGeometry( earthRadius, 128, 128 );

  // Create the Earth materials. 
  loader = new THREE.TextureLoader();
  loader.setCrossOrigin( 'https://s.codepen.io' );
  var texture = loader.load( TEXTURE_PATH + 'ColorMap.jpg' );

  var bump = null;
  bump = loader.load( TEXTURE_PATH + 'Bump.jpg' );

  var spec = null;
  spec = loader.load( TEXTURE_PATH + 'SpecMask.jpg' );

  var material = new THREE.MeshPhongMaterial({
    color: "#ffffff",
    shininess: 5,
    map: texture,
    specularMap: spec,
    specular: "#666666",
    bumpMap: bump,
  });

  sphere = new THREE.Mesh( geometry, material );
  sphere.position.set( 0, 0, 0 );
  sphere.rotation.y = Math.PI;

  // Focus initially on the prime meridian.
  sphere.rotation.y = -1 * (8.7 * Math.PI / 17);

  // Add the Earth to the scene.https://s3-us-west-2.amazonaws.com/s.cdpn.io/123879/Bump.jpg
  worldRotationPoint.add( sphere );

  // Add the Earth sphere model.
  var geometryCloud = new THREE.SphereGeometry( earthRadius + 0.2, 128, 128 );

  loader = new THREE.TextureLoader();
  loader.setCrossOrigin( 'https://s.codepen.io' );
  var alpha = loader.load( TEXTURE_PATH + "alphaMap.jpg" );

  var materialCloud = new THREE.MeshPhongMaterial({
    alphaMap: alpha,
  });

  materialCloud.transparent = true;

  sphereCloud = new THREE.Mesh( geometryCloud, materialCloud );
  scene.add( sphereCloud );

  // Create a glow effect.
  loader = new THREE.TextureLoader();
  loader.setCrossOrigin( 'https://s.codepen.io' );
  var glowMap = loader.load( TEXTURE_PATH + "glow.png" );
  
  // Create the sprite to add the glow effect.
  var spriteMaterial = new THREE.SpriteMaterial({
    map: glowMap,
    color: 0x0099ff,
    transparent: false,
    blending: THREE.AdditiveBlending
  });
  var sprite = new THREE.Sprite( spriteMaterial );
  sprite.scale.set( earthRadius * 2.5, earthRadius * 2.5, 1.0);
  sphereCloud.add(sprite);

  // Add the skymap.
  addSkybox();

  window.addEventListener('resize', onWindowResize, false);
}

/**
 * Events to fire upon window resizing.
 */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Add the sun to the scene.
 */
function createSun() {
  // Add the Sun sphere model.
  var sunGeometry = new THREE.SphereGeometry( 100, 16, 16 );

  // Create the Sun materials.
  var sunMaterial = new THREE.MeshLambertMaterial({
    color: '#ffff55',
    emissive: '#ffff55',
  });

  sun = new THREE.Mesh( sunGeometry, sunMaterial );
  sun.castShadow = false;
  sun.receiveShadow = false;
  sun.position.set( -9500, 0, 0 );
  sun.rotation.y = Math.PI;

  // Add the Sun to the scene.
  scene.add( sun );
}

createSun();

/**
 * Updates to apply to the scene while running.
 */
function update() {
  camera.updateProjectionMatrix();
  worldRotationPoint.rotation.y = degrees * Math.PI/180;
  sphereCloud.rotation.y += 0.00025;
  baseRotationPoint.rotation.y -= 0.00025;
}

/**
 * Render the scene.
 */
function render() {
  renderer.render(scene, camera);
}

/**
 * Animate the scene.
 */
function animate() {
  requestAnimationFrame(animate);
  update();
  render();
}

function addSkybox() {
  var urlPrefix = TEXTURE_PATH;
  var urls = [
    urlPrefix + 'test.jpg',
    urlPrefix + 'test.jpg',
    urlPrefix + 'test.jpg',
    urlPrefix + 'test.jpg',
    urlPrefix + 'test.jpg',
    urlPrefix + 'test.jpg',
  ];

  var loader = new THREE.CubeTextureLoader();
  loader.setCrossOrigin( 'https://s.codepen.io' );
  
  var textureCube = loader.load( urls );
  textureCube.format = THREE.RGBFormat;

  var shader = THREE.ShaderLib[ "cube" ];
  shader.uniforms[ "tCube" ].value = textureCube;

  var material = new THREE.ShaderMaterial( {
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: THREE.BackSide
  } );

  var geometry = new THREE.BoxGeometry( 2000, 2000, 2000 );

  var skybox = new THREE.Mesh( geometry, material );
  //skybox.position.x = -30;

  scene.add( skybox );
}