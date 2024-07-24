document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 20000); // Change slide every 20 seconds

    // Dropdown functionality
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function() {
            closeAllDropdowns();
            this.querySelector(".dropdown-content").style.display = "block";
        });

        dropdown.addEventListener("mouseout", function() {
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector(".dropdown-content").style.display = "none";
        });
    }

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            closeAllDropdowns();
        }
    });
});


// HAGAtEYYYYY
let swiperCards = new Swiper('.card-content' , 
    {loop:true ,
    spaceBetween: 32,
    grabCursor: true,
        
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
            dynamicBullets : true,
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },

        breakpoints : {
            600 : {
                slidesPerView : 2,
            },
            968 : {
                slidesPerView : 2,
            },
        },
    });


    // const buttons = document.querySelectorAll('.question button');

    // buttons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         // Find the closest .question parent
    //         const question = button.closest('.question');
    //         // Find the <p> element within this .question
    //         const faq = question.querySelector('p');
    //         // Find the icon within this .question
    //         const icon = question.querySelector('.d-arrow');
    
    //         // Toggle the 'show' class for the <p> element
    //         faq.classList.toggle('show');
    //         // Toggle the 'rotate' class for the icon
    //         icon.classList.toggle('rotate');
    //     });
    // });
    

    const buttons = document.querySelectorAll('.question button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const faq = button.nextElementSibling; // The <p> tag
            const icon = button.querySelector('.d-arrow'); // The icon inside the button
            
            if (faq && icon) {
                faq.classList.toggle('show');
                icon.classList.toggle('rotate');
            } else {
                console.error('FAQ or icon not found');
            }
        });
    });
    