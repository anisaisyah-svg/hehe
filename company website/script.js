if (document.body.id === "homepage") {
    alert("Welcome to INKHUB official website!");
}

  // 1. Script for hilangkan loading page yang lama
  window.addEventListener('load', function() {
    const loader = document.getElementById('loading');
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1500);
  });

  // 2. Slider Logic the original
  const wrapper = document.getElementById('sliderWrapper');
  const dots = document.querySelectorAll('.dot');
  let index = 0;
  function nextSlide() {
    index++;
    if (index >= 5) index = 0;
    wrapper.style.transform = `translateX(-${index * 20}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
  setInterval(nextSlide, 8000);




/* contact */


  function openContact(e) {
    e.preventDefault(); 
    document.getElementById("contactPanel").classList.add("active");
    document.getElementById("overlay").classList.add("active");
  }

  function closeContact() {
    document.getElementById("contactPanel").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
  

function openPopup(service) {
    document.getElementById("popup").style.display = "flex";

    document.querySelectorAll(".popup-info").forEach(info => {
        info.style.display = "none";
    });

    document.getElementById(service).style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



