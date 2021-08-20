// header part start
//
  $(function(){
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      
      if(scrolling > 200){
          $('.navbar').addClass('bgg');
      }
      else {
           $('.navbar').removeClass('bgg');
      }
      });  

      // counter up 
      $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // header part end 
    // slider part 
    $('.slider_part').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
    });
    // service slider 
    $('.service_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
      
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    
      ]
    });
   
    // mixitup
    var containerEl = document.querySelector('.portfolio_filter');

    var mixer = mixitup(containerEl);

    // venobox 
    $('.venobox').venobox(); 

    // blog slider 
    // $('.bloggg_slider').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   arrows:false,
      
    // });

    contact_slider
    // $('.contact_part').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   arrows:false,
    // });

  })


