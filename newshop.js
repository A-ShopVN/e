'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}



// home responsive
function home() {
    window.scrollTo({
        top:0, behavior:"smooth"
    });
};

// search
function performSearch() {
    const query = document.getElementById('searchInput').value;
    if (query.trim() !== '') {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  }

  // Xử lý sự kiện nhấn nút tìm kiếm
  document.getElementById('searchButton').addEventListener('click', function() {
    performSearch();
  });

  // Xử lý sự kiện nhấn Enter trong ô tìm kiếm
  document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Ngăn chặn hành vi mặc định (gửi form)
      performSearch();
    }
  });



  // =================countdowm
    // JavaScript to handle countdown
    function startCountdown() {
      const now = new Date();
      const targetDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days from now

      function updateCountdown() {
          const now = new Date();
          const distance = targetDate - now;

          // Calculate days, hours, minutes, and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Update countdown elements
          document.getElementById('days').innerText = days.toString().padStart(2, '0');
          document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
          document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
          document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

          // If countdown is finished
          if (distance < 0) {
              clearInterval(interval);
              document.querySelector('.countdown-desc').innerText = "Offer has ended";
              document.querySelector('.countdown').style.display = 'none';
          }
      }

      // Update countdown every second
      const interval = setInterval(updateCountdown, 1000);
      updateCountdown();
  }

  startCountdown();


    
  // wifi
  let alerts = document.querySelectorAll('.alert');
alerts.forEach(item=>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('close')){
            item.style.display = 'none';
        }
    })
})
window.addEventListener('offline', function(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'grid';
})
window.addEventListener('online', function(){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display ='grid';
});