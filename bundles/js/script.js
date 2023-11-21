///////// wifi-loader start //////////

var loader = document.getElementById("wifi-loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

///////// wifi-loader end //////////

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });

    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: [
      "Data privacy is a human right,",
      "it belongs to you.",
      "It’s your security,",
      "so take control.",
      "Protect your network with us.",
      "We secure your social identity.",
      "Your security, our passion.",
      "Crime hates security; we don’t.",
      "We're Strongly encrypting the world.",
      "The internet’s a big place.",
      "Stay safe out there.",
      "we Protect you from, ",
      "the dangers of cyberspace.",
      "Your password is the key to your digital life.",
      " Keep it safe.",
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "A Group of Hackers",
      "The name you can trust.",
      "The security you can trust",
      "Keeping people safe globally.",
      "Security from the bottom up",
      "Protecting your assets and your brand.",
      "One call for all of your security needs.",
      "Keeping you safe, keeping you secure.",
      "what we do. We’re good at it too!",
      "Keeping hackers at bay while you enjoy your weekend.",
      "Protecting your information from cyber fraud is our #1 focus.",
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
