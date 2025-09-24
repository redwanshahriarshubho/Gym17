document.addEventListener('DOMContentLoaded', () => {
    // Spinner
    setTimeout(() => {
        document.getElementById('spinner').classList.remove('flex');
        document.getElementById('spinner').style.display = 'none';
    }, 1500);

    // Hero Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('#carousel > div');
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('opacity-100'));
        slides.forEach(slide => slide.classList.add('opacity-0'));
        slides[n].classList.add('opacity-100');
        slides[n].classList.remove('opacity-0');
        currentSlide = (n + slides.length) % slides.length;
        
        // Update indicators
        const indicators = document.querySelectorAll('#carousel .absolute.bottom-8 button');
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('bg-white');
                indicator.classList.remove('bg-opacity-50');
            } else {
                indicator.classList.remove('bg-white');
                indicator.classList.add('bg-opacity-50');
            }
        });
    }
    window.nextSlide = () => showSlide(currentSlide + 1);
    window.prevSlide = () => showSlide(currentSlide - 1);
    setInterval(nextSlide, 5000);

    // Testimonial Carousel
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('#testimonial > div');
    function showTestimonial(n) {
        testimonials.forEach(t => t.classList.remove('opacity-100'));
        testimonials.forEach(t => t.classList.add('opacity-0'));
        testimonials[n].classList.add('opacity-100');
        testimonials[n].classList.remove('opacity-0');
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        
        // Update indicators
        const indicators = document.querySelectorAll('#testimonial .flex.justify-center.mt-8 button');
        indicators.forEach((indicator, index) => {
            if (index === currentTestimonial) {
                indicator.classList.add('bg-gym-red');
                indicator.classList.remove('bg-white', 'bg-opacity-50');
            } else {
                indicator.classList.remove('bg-gym-red');
                indicator.classList.add('bg-white', 'bg-opacity-50');
            }
        });
    }
    window.nextTestimonial = () => showTestimonial(currentTestimonial + 1);
    window.prevTestimonial = () => showTestimonial(currentTestimonial - 1);
    setInterval(nextTestimonial, 7000);

    // Back to Top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            document.querySelector('.back-to-top').classList.remove('hidden');
        } else {
            document.querySelector('.back-to-top').classList.add('hidden');
        }
    });
    document.querySelector('.back-to-top a').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal Functions
    window.showModal = (modalId) => {
        document.getElementById(`${modalId}-modal`).style.display = 'flex';
    };
    window.closeModal = (modalId) => {
        document.getElementById(`${modalId}-modal`).style.display = 'none';
    };

    // Simulate account details display
    window.showAccountDetails = (userType) => {
        if (userType === 'customer') {
            showModal('customer-account');
        } else if (userType === 'admin') {
            showModal('admin-account');
        }
    };
});