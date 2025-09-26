// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.md\\:flex');
    navLinks.classList.toggle('hidden');
});

// Feather Icons
feather.replace();

// Optional: VANTA.GLOBE background for hero
if (document.getElementById('hero')) {
    VANTA.GLOBE({
        el: "#hero",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf59e0b,
        backgroundColor: 0x1e40af
    });
}
