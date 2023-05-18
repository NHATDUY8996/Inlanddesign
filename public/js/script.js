//script
let totalBars = document.querySelectorAll(".navMN");

let changeMenuIcon = function () {
  for (var activeBar = 0;
    activeBar < totalBars.length;
    activeBar++) {
    totalBars[activeBar].classList.toggle("active")

  }
}
// script

$('.banner__carousel').owlCarousel({
  loop: true,
  items: 1,
  margin: 10,
  nav: false,
  autoplay: true,
  dots: false
});

function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function () {
    var menuElements = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function (e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();


// add active
$('.tabpj').click(function () {
  $('.tabpj').removeClass('active');
  $(this).addClass('active');
});

$('.teamcarousel').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  navText : ['<span>PREV</span>','<span>NEXT</span>'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1024: {
      nav: true,
      items: 4
    }
  }
})