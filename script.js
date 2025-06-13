// Wait for everything to load
window.addEventListener('load', function() {
    // Hide loading screen
    document.querySelector('.loading-screen').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 1000);
    
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // Create twinkling stars
    function createStars() {
        const starsContainer = document.querySelector('.stars');
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 3 + 1;
            
            // Random animation duration
            const duration = Math.random() * 5 + 5;
            const delay = Math.random() * 5;
            
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            star.style.setProperty('--duration', `${duration}s`);
            
            starsContainer.appendChild(star);
        }
    }
    
    createStars();
    
    // Create floating balloons
    function createBalloons() {
        const colors = ['#ff4d4d', '#f9cb28', '#6a11cb', '#2575fc', '#4dff4d'];
        const balloonCount = 10;
        
        for (let i = 0; i < balloonCount; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            
            // Random position
            const left = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 30 + 30;
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random animation duration and delay
            const duration = Math.random() * 15 + 15;
            const delay = Math.random() * 10;
            
            balloon.style.left = `${left}%`;
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.2}px`;
            balloon.style.background = color;
            balloon.style.animationDuration = `${duration}s`;
            balloon.style.animationDelay = `-${delay}s`;
            
            // Pop balloon on click
            balloon.addEventListener('click', function() {
                this.style.animation = 'none';
                this.style.transform = 'scale(1.2)';
                this.style.opacity = '0';
                setTimeout(() => {
                    this.remove();
                }, 300);
            });
            
            document.body.appendChild(balloon);
        }
    }
    
    createBalloons();
    
    // Create confetti explosion
    function createConfetti() {
        const colors = ['#ff4d4d', '#f9cb28', '#6a11cb', '#2575fc', '#4dff4d'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random position
            const left = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 10 + 5;
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random animation duration and delay
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            confetti.style.left = `${left}%`;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.background = color;
            confetti.style.animationDuration = `${duration}s`;
            confetti.style.animationDelay = `${delay}s`;
            
            document.body.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
    
    // Trigger confetti on load
    setTimeout(createConfetti, 1000);
    
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate cards on scroll
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2
        });
    });
    
    // Cake interaction
    const cake = document.querySelector('.cake');
    const flame = document.querySelector('.flame');
    const finalMessage = document.querySelector('.final-message');
    const audio = document.getElementById('birthdayAudio');
    
    // Set audio volume lower for softer music
    audio.volume = 0.6;
    
    let candleLit = true;
    
    cake.addEventListener('click', function() {
        if (candleLit) {
            // Blow out candle
            flame.style.animation = 'none';
            flame.style.opacity = '0';
            finalMessage.textContent = 'Your wish will come true!';
            createConfetti();
            
            // Play audio if not already playing
            if (audio.paused) {
                audio.play().catch(e => console.log('Audio play prevented:', e));
            }
        } else {
            // Relight candle
            flame.style.animation = 'flicker 2s infinite alternate';
            flame.style.opacity = '1';
            finalMessage.textContent = 'Make a wish and blow out the candle!';
        }
        
        candleLit = !candleLit;
    });
    
    // Enable audio on first interaction
    document.body.addEventListener('click', function enableAudio() {
        audio.play().catch(e => console.log('Audio play prevented:', e));
        document.body.removeEventListener('click', enableAudio);
    }, { once: true });
});
