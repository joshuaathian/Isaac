// ===== Navigation Scroll Effect =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Pricing Toggle =====
const pricingToggle = document.getElementById('pricingToggle');
const monthlyLabel = document.getElementById('monthlyLabel');
const annualLabel = document.getElementById('annualLabel');
const priceValues = document.querySelectorAll('.price-value');
let isAnnual = true;

pricingToggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  pricingToggle.classList.toggle('annual', isAnnual);
  
  if (isAnnual) {
    annualLabel.classList.add('active');
    monthlyLabel.classList.remove('active');
  } else {
    monthlyLabel.classList.add('active');
    annualLabel.classList.remove('active');
  }

  priceValues.forEach(price => {
    const monthly = price.dataset.monthly;
    const annual = price.dataset.annual;
    price.textContent = isAnnual ? annual : monthly;
  });
});

// Initialize toggle state
pricingToggle.classList.add('annual');

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all items
    faqItems.forEach(i => i.classList.remove('active'));
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.querySelector('.form-success');
const submitBtn = contactForm.querySelector('.submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Show loading state
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline-flex';
  submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
    
    // Reset form after delay
    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = 'block';
      formSuccess.style.display = 'none';
      btnText.style.display = 'inline-flex';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }, 3000);
  }, 1500);
});

// ===== Set Current Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Scroll Animations (Intersection Observer) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-title, .feature-card, .pricing-card, .faq-item, .security-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ===== Watch Demo Button (Placeholder) =====
document.getElementById('watchDemoBtn').addEventListener('click', () => {
  alert('Demo video coming soon!');
});

// ===== Learn More Links (Placeholder) =====
document.querySelectorAll('.learn-more').forEach(link => {
  if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Coming soon!');
    });
  }
});

console.log('Isaac Systems - Website Loaded');
