$(document).ready(function(){
    $(window).scroll(function(){
        // Check the scroll position
        if ($(this).scrollTop() > 20) {
            // If the scroll position is more than 20 pixels, add the "sticky" class to the navbar
            $('.navbar').addClass("sticky");
        } else {
            // If the scroll position is 20 pixels or less, remove the "sticky" class from the navbar
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


        // Get the scroll-up container element
        const scrollUpContainer = document.getElementById('scrollUpContainer');
    
        // Function to scroll to the top of the page
        function scrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
          });
        }
        
        // Add a click event listener to the scroll-up container
        scrollUpContainer.addEventListener('click', scrollToTop);

        // typing animated cript

        var typed = new Typed(".typing",{
            strings: ["frontend developer", "backend developer", "IoT", "Embeded system"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true

        });

        var typed = new Typed(".type-2",{
            strings: ["frontend developer", "backend developer", "IoT", "Embeded system"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true

        });



    //toggle manu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $(document).ready(function(){
        $('.carousel').slick({
          slidesToShow: 3, // Display three images at a time
          slidesToScroll: 1, // Scroll one image at a time 
          autoplay: true,
          autoplaySpeed: 2000,
          autoplayHoverPause:true,
          responsive: [
            {
              breakpoint: 1024, // Medium-sized devices and above
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768, // Small devices and above
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      });

});
