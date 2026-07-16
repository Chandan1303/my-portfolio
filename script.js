// ===========================
// Three.js 3D Background
// ===========================
(function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Floating particles
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
        sizes[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        color: 0x10b981,
        size: 0.3,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Wireframe torus
    const torusGeo = new THREE.TorusGeometry(12, 0.3, 8, 60);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.08 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    // Wireframe icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(6, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x6ee7b7, wireframe: true, transparent: true, opacity: 0.06 });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(20, -10, -10);
    scene.add(ico);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animate
    function animate() {
        requestAnimationFrame(animate);
        const t = Date.now() * 0.001;

        particles.rotation.y = t * 0.04;
        particles.rotation.x = t * 0.02;

        torus.rotation.z = t * 0.1;
        torus.rotation.y = t * 0.05;

        ico.rotation.x = t * 0.08;
        ico.rotation.y = t * 0.12;

        camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();

// ===========================
// 3D Tilt Effect on Cards
// ===========================
function initTilt() {
    const cards = document.querySelectorAll(
        '.skill-card, .project-card-3d, .cert-card, .education-card, .timeline-card, .info-box, .contact-wrapper'
    );

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * -8;
            const rotY = ((x - cx) / cx) * 8;
            card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// ===========================
// About Photo 3D Tilt
// ===========================
function initPhotoTilt() {
    const wrapper = document.querySelector('.about-3d-wrapper');
    const card = document.querySelector('.about-3d-card');
    if (!wrapper || !card) return;

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -12;
        const rotY = ((x - cx) / cx) * 12;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===========================
// Active Nav Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) link.classList.add('active');
            });
        }
    });
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
            const collapse = document.querySelector('.navbar-collapse');
            if (collapse.classList.contains('show')) collapse.classList.remove('show');
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll(
        '.skill-card, .project-card-3d, .timeline-card, .education-card, .cert-card, .contact-info-card, .info-box'
    );
    els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    initTilt();
    initPhotoTilt();
});

// ===========================
// Contact Form
// ===========================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name    = document.getElementById('name').value;
        const email   = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const mailto  = `mailto:hegdechandan6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailto;
        showNotification('Message prepared! Please send it from your email client.', 'success');
        contactForm.reset();
    });
}

// ===========================
// Notification Toast
// ===========================
function showNotification(message, type = 'info') {
    const n = document.createElement('div');
    n.className = `alert alert-${type}`;
    n.style.cssText = `
        position:fixed; top:90px; right:20px; z-index:9999;
        min-width:300px; padding:1rem 1.5rem;
        border-radius:0.8rem; box-shadow:0 8px 30px rgba(0,0,0,0.4);
        animation:slideIn 0.4s ease; background:#0d2e22; color:#6ee7b7;
        border:1px solid rgba(16,185,129,0.4);
    `;
    n.textContent = message;
    document.body.appendChild(n);
    setTimeout(() => { n.style.opacity = '0'; n.style.transition = 'opacity 0.4s'; setTimeout(() => n.remove(), 400); }, 4000);
}

// ===========================
// Back to Top Button
// ===========================
const topBtn = document.createElement('button');
topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
topBtn.style.cssText = `
    position:fixed; bottom:30px; right:30px; width:48px; height:48px;
    background:linear-gradient(135deg,#10b981,#059669); color:#fff;
    border:none; border-radius:50%; cursor:pointer; display:none;
    align-items:center; justify-content:center; font-size:1.1rem;
    box-shadow:0 5px 20px rgba(16,185,129,0.4); transition:all 0.3s ease; z-index:999;
`;
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
topBtn.addEventListener('mouseenter', () => topBtn.style.transform = 'translateY(-4px) scale(1.1)');
topBtn.addEventListener('mouseleave', () => topBtn.style.transform = 'scale(1)');
window.addEventListener('scroll', () => { topBtn.style.display = window.scrollY > 300 ? 'flex' : 'none'; });
document.body.appendChild(topBtn);

// Inject slide-in keyframe
const s = document.createElement('style');
s.textContent = `@keyframes slideIn { from { transform:translateX(300px); opacity:0; } to { transform:translateX(0); opacity:1; } }`;
document.head.appendChild(s);

console.log('%c🚀 Chandan Hegde Portfolio', 'color:#10b981; font-size:18px; font-weight:bold;');
