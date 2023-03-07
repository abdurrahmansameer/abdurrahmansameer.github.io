window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a')
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);
  for(let i = 0; i < anchors.length; i++){
    const anchor = anchors[i]
    anchor.addEventListener('click', e => {
      e.preventDefault()
      let target = e.target.href
      transition_el.classList.add('is-active')
      setTimeout(() => {
        window.location.href = target
      }, 500)
    })
  }
}
// preloader
var timeOut;
function loader() {
  move()
  timeOut = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loaderDiv").style.display = "none";
  document.getElementById("content").style.display = "block";
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 10;
    var id = setInterval(frame, 32);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');
//javascript for quick view button
var popup = function(popupClick) {
  popupViews[popupClick].classList.add('active');
}
popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});
//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
