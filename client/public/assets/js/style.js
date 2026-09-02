$(".sun").hide()
$(".moon").click(function(){
    $(".moon").hide()
    $(".sun").show()
    // $("body").css({backgroundColor:"black",color:"white"})
    $(".theme1").css({backgroundColor:"#182C44"})
    $(".theme2").css({backgroundColor:"#112339"})
    $("h1,h2,h3,h4,h5,h6,a,#services span,.size,#solution li").css({color:"white"})
    $("p").css({color:"#c2c2c2"})
    $("#solution .nav-item button").css({backgroundColor:"#182C44",color:"white"})
    $("#solution .accordion-item,.accordion-button").css({backgroundColor:"#112339",color:"white"})
})
$(".sun").click(function(){
    $(".sun").hide()
    $(".moon").show()
    // $("body").css({backgroundColor:"",color:""})
    $(".theme1").css({backgroundColor:""})
    $(".theme2").css({backgroundColor:""})
    $("h1,h2,h3,h4,h5,h6,a,#services span,.size,#solution li").css({color:""})
    $("p").css({color:""})
    $("#solution .nav-item button").css({backgroundColor:"",color:""})
    $("#solution .accordion-item,.accordion-button").css({backgroundColor:"",color:""})
})


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".rating .star");
    let selectedRating = -1;
  
    stars.forEach((star, index) => {
      // Hover effect
      star.addEventListener("mouseenter", () => {
        highlightStars(index);
      });
  
      // Remove hover effect
      star.addEventListener("mouseleave", () => {
        highlightStars(selectedRating);
      });
  
      // Click to select
      star.addEventListener("click", () => {
        selectedRating = index;
        highlightStars(selectedRating);
      });
    });
  
    // Highlight stars up to the specified index
    function highlightStars(index) {
      stars.forEach((star, i) => {
        if (i <= index) {
          star.classList.add("filled");
        } else {
          star.classList.remove("filled");
        }
      });
    }
  });
  

