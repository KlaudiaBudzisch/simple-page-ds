var slides = carousel.querySelectorAll('.slide');
var indicators = carousel.querySelectorAll('.indicator');


function showSlides(n) {

      if (n > slides.length) {
        slideIndex = 1
      }

      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      for (i = 0; i < indicators.length; i++) {
          indicators[i] = indicators[i].setAttribute('data-state', '');
  
      }
      slides[slideIndex-1].style.display = "block";
      indicators[slideIndex-1].setAttribute('data-state', 'active'); 
    }
    
    let slideIndex = 1;
    showSlides(slideIndex);
    
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    // gallery 


    const slideList = [{
        img: "https://www.mockupworld.co/wp-content/uploads/edd/2018/10/free-white-bottle-lid-mockup-psd-768x576.jpg",
        text: 'Design Studio'
       },
       {
        img: "https://www.mockupworld.co/wp-content/uploads/edd/2018/06/free-black-matte-bottles-mockup-psd.jpg",
        text: 'Just make it awersome!'
       },
       {
        img: "https://www.mockupworld.co/wp-content/uploads/edd/2019/03/free-red-wine-bottle-with-label-mockup-psd-768x576.jpg",
        text: 'Desing and passion'
       }];

  
       const gallery = document.querySelector('.g1');
       const title = document.querySelector('.t1');
  
      
       const time = 10000;
       let active = 0;

       
       const changeSlide = () => {
        active++;
        if (active === slideList.length) {
         active = 0;
        }
        gallery.style.backgroundImage = `url("${slideList[active].img}")`;
        title.textContent = slideList[active].text;
       }
       setInterval(changeSlide, time)