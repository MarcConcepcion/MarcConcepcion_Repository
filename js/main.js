document.addEventListener('DOMContentLoaded', function() {

    initPreloader();
    initNavigation();
    initHeroSlider();
    initPortfolio();
    initTestimonials();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
    initLightbox();
});

function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1000);
    });
} document.addEventListener('DOMContentLoaded', function() {
                    const navLogo = document.getElementById('nav-logo-text');
                    function updateLogoText() {
                        if (window.scrollY > 10) {
                            navLogo.textContent = 'Return to Top';
                        } else {
                            navLogo.textContent = 'Home';
                        }
                    }
                    window.addEventListener('scroll', updateLogoText);
                    updateLogoText();
                });

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    

    slides.forEach(slide => {
        const bgImage = slide.getAttribute('data-bg');
        slide.style.backgroundImage = `url(${bgImage})`;
    });
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    

    setInterval(nextSlide, 5000);
}


function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('load-more');
    let currentFilter = 'all';
    let loadedItems = 6;
    
// do not touch
    const portfolioData = [
        {
            id: 1,
            title: 'Trap Edit',
            category: 'VideoEditing',
            mediaType: 'video',
            media:'Assets/videos/Work.mp4', 
            description: 'Satus:Private Posted:2023'
        },
        {
            id: 2,
            title: 'Blur Shot',
            category: 'Photography',
            mediaType: 'image',
            media:'Assets/images/Photography1.jpg', 
            description: 'Portrait Shot'
        },
        {
            id: 3,
            title: 'Character Showcase Gameplay',
            category: 'Gaming',
            mediaType: 'video',
            media:'Assets/videos/Gaming1.mp4', 
            description: 'Testing an Special access Unreleased Characrter'
        },
        {
            id: 4,
            title: 'IHCI project',
            category: 'School',
            mediaType: 'image',
            media:'Assets/images/school1.png',
            description: 'UI design for IHCI'
        },
        {
            id: 5,
            title: 'Landscape Night Shot',
            category: 'Photography',
            mediaType: 'image',
            media:'Assets/images/Photography2.jpg',
            description: 'Landscape Night Photography'
        },
        {
            id: 6,
            title: 'Special Event Edit',
            category: 'VideoEditing',
            mediaType: 'video',
            media:'Assets/videos/work2.mp4', 
            description: 'Satus:Private Posted:2024'
        },
        {
            id: 7,
            title: 'Honkai Star Rail Gameplay',
            category: 'Gaming',
            mediaType: 'video',
            media:'Assets/videos/Gaming2.mp4',
            description: 'Honkai Star Rail Character Gameplay'
        },
        {
            id: 8,
            title: 'ITC Project',
            category: 'School',
            mediaType: 'image',
            media: 'Assets/images/school2.png',
            description: 'ITC Project - Old Web Portfolio'
        },
        {
            id: 9,
            title: 'Close-up shot',
            category: 'Photography',
            mediaType: 'image',
            media:'Assets/images/Photography3.jpg',
            description: 'Macro / Close-up with shallow depth of field'
        },
        {
            id: 10,
            title: 'Genshin Impact Gameplay',
            category: 'Gaming',
            mediaType: 'video',
            media:'Assets/videos/Gaming3.mp4',
            description: 'Genshin Impact Exploration'
        },
        {
            id: 11,
            title: 'Trend Edit',
            category: 'VideoEditing',
            mediaType: 'video',
            media:'Assets/videos/Work3.mp4', 
            description: 'Satus:Private Posted:2023'
        },
        {
            id: 12,
            title: 'Discrete Mathematics',
            category: 'School',
            mediaType: 'image',
            media:'Assets/images/School3.png',
            description: 'Discrete Mathematics Project'
        }
    ];

    // will not touch
    function createMediaElement(item) {
        if (item.mediaType === 'video') {
            return createVideoElement(item);
        } else {
            return createImageElement(item);
        }
    }


    function createImageElement(item) {
        const img = document.createElement('img');
        img.src = item.media;
        img.alt = item.title;
        img.loading = 'lazy';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        return img;
    }

// scared to touch
    function createVideoElement(item) {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.style.position = 'relative';
        videoContainer.style.width = '100%';
        videoContainer.style.height = '100%';

        const video = document.createElement('video');
        video.src = item.media;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.controls = false; 
        video.muted = false;
        video.loop = true;
        video.preload = 'metadata';

        if (item.thumbnail) {
            video.poster = item.thumbnail;
        }

        const playButton = document.createElement('div');
        playButton.className = 'play-button';
        playButton.innerHTML = '▶';
        playButton.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 10;
        `;
//migh brake (possibly)
        playButton.addEventListener('mouseenter', () => {
            playButton.style.background = 'rgba(0, 0, 0, 0.9)';
            playButton.style.transform = 'translate(-50%, -50%) scale(1.1)';
        });

        playButton.addEventListener('mouseleave', () => {
            playButton.style.background = 'rgba(0, 0, 0, 0.7)';
            playButton.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        playButton.addEventListener('click', (e) => {
            e.stopPropagation();
            if (video.paused) {

                document.querySelectorAll('.portfolio-item video').forEach(v => {
                    if (v !== video) {
                        v.pause();
                        v.controls = false;
                        const btn = v.parentNode.querySelector('.play-button');
                        if (btn) btn.style.display = 'flex';
                    }
                });

                video.play();
                video.controls = true;
                playButton.style.display = 'none';
            } else {
                video.pause();
                video.controls = false;
                playButton.style.display = 'flex';
            }
        });

        video.addEventListener('ended', () => {
            video.controls = false;
            playButton.style.display = 'flex';
        });

        video.addEventListener('pause', () => {
            if (!video.ended) {
                setTimeout(() => {
                    if (video.paused) {
                        video.controls = false;
                        playButton.style.display = 'flex';
                    }
                }, 2000);
            }
        });

        videoContainer.appendChild(video);
        videoContainer.appendChild(playButton);

        return videoContainer;
    }

    function createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.style.cssText = `
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
        `;

        const mediaElement = createMediaElement(item);
        
        const overlay = document.createElement('div');
        overlay.className = 'portfolio-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 5;
        `;

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.style.marginBottom = '10px';

        const description = document.createElement('p');
        description.textContent = item.description;

        const mediaTypeIndicator = document.createElement('span');
        mediaTypeIndicator.textContent = item.mediaType === 'video' ? '🎥' : '📷';
        mediaTypeIndicator.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 8px;
            border-radius: 15px;
            font-size: 12px;
        `;

        overlay.appendChild(title);
        overlay.appendChild(description);

        portfolioItem.appendChild(mediaElement);
        portfolioItem.appendChild(overlay);
        portfolioItem.appendChild(mediaTypeIndicator);

        portfolioItem.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
            portfolioItem.style.transform = 'scale(1.05)';
        });

        portfolioItem.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
            portfolioItem.style.transform = 'scale(1)';
        });

        return portfolioItem;
    }

    function renderPortfolio(filter = 'all') {
        portfolioGrid.innerHTML = '';
        
        const filteredData = filter === 'all' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === filter);

        const itemsToShow = filteredData.slice(0, loadedItems);

        itemsToShow.forEach(item => {
            const portfolioItem = createPortfolioItem(item);
            portfolioGrid.appendChild(portfolioItem);
        });

        if (loadMoreBtn) {
            loadMoreBtn.style.display = filteredData.length > loadedItems ? 'block' : 'none';
        }
    }

    function handleFileUpload() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,video/*';
        fileInput.multiple = true;

        fileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            
            files.forEach((file, index) => {
                const isVideo = file.type.startsWith('video/');
                const url = URL.createObjectURL(file);
                
                const newItem = {
                    id: portfolioData.length + index + 1,
                    title: file.name.split('.')[0],
                    category: 'uploaded',
                    mediaType: isVideo ? 'video' : 'image',
                    media: url,
                    description: `Uploaded ${isVideo ? 'video' : 'image'}`
                };

                portfolioData.push(newItem);
            });

            renderPortfolio(currentFilter);
        });

        fileInput.click();
    }

    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                currentFilter = btn.dataset.filter || 'all';
                loadedItems = 6;
                renderPortfolio(currentFilter);
            });
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadedItems += 6;
            renderPortfolio(currentFilter);
        });
    }

    const uploadBtn = document.getElementById('upload-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', handleFileUpload);
    }

    renderPortfolio();
}


    // Remove error styling on input
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#e0e0e0';
        });
    });

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');

    function checkAnimations() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkAnimations);
    checkAnimations();
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevLightboxImage();
                    break;
                case 'ArrowRight':
                    nextLightboxImage();
                    break;
            }
        }
    });

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

