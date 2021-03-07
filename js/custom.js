/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("header nav").meanmenu();
  });

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".sticky-wrapper-header").sticky({ topSpacing: 0 });
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(".brand-box").niceScroll({
    cursorcolor: "#9b9b9c",
  });

  /* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("select").niceSelect();
  });

  /* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    var owl = $(".carousel-slider-post");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });

  /* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    var owl = $(".banner-rotator-slider");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });

  //OwlCarousel - Product Slider

  $(document).ready(function () {
    var owl = $("#product-in-slider");
    owl.owlCarousel({
      loop: true,
      nav: true,
      margin: 10,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
    owl.on("mousewheel", ".owl-stage", function (e) {
      if (e.deltaY > 0) {
        owl.trigger("next.owl");
      } else {
        owl.trigger("prev.owl");
      }
      e.preventDefault();
    });
  });

  /* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(window).on("scroll", function () {
    scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#back-to-top").addClass("b-show_scrollBut");
    } else {
      $("#back-to-top").removeClass("b-show_scrollBut");
    }
  });
  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  $.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
    },
  });

  $(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        firstname: "required",
        email: {
          required: true,
          email: true,
        },
        lastname: "required",
        message: "required",
        agree: "required",
      },
      messages: {
        firstname: "Please enter your firstname",
        email: "Please enter a valid email address",
        lastname: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters",
        },
        message: "Please enter your Message",
        agree: "Please accept our policy",
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("input"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-error")
          .removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-success")
          .removeClass("has-error");
      },
    });
  });

  /* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var swiper = new Swiper(".heroslider", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: "auto",
    paginationClickable: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  /* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var swiper = new Swiper(".swiper-product-filters", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerColumn: 1,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerColumn: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerColumn: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  /* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> ' +
            '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> ' +
            '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> ' +
            '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> ' +
            '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'
        )
      );
    });
  });

  /* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(".deal-slider").slick({
    dots: false,
    infinite: false,
    prevArrow: ".previous-deal",
    nextArrow: ".next-deal",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $("#news-slider").slick({
    dots: false,
    infinite: false,
    prevArrow: ".previous",
    nextArrow: ".next",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(".fancybox").fancybox({
    maxWidth: 1200,
    maxHeight: 600,
    width: "70%",
    height: "70%",
  });

  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 5000,
  });

  /* Site work
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var mobile = [
    {
      image: {
        link: "images/1.png",
        alt: "prva image",
      },
      price: "200e",
      mark: "Samsung",
      model: "J5",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/2.png",
        alt: "druga image",
      },
      price: "400e",
      mark: "Samsung",
      model: "J3",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/3.png",
        alt: "treca image",
      },
      price: "150e",
      mark: "Samsung",
      model: "G712",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/4.png",
        alt: "cetvrta image",
      },
      price: "900e",
      mark: "Iphone",
      model: "11c",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/5.png",
        alt: "peta image",
      },
      price: "1100e",
      mark: "Iphone",
      model: "12+",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/6.png",
        alt: "sesta image",
      },
      price: "700e",
      mark: "Iphone",
      model: "Se+",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/1.png",
        alt: "Crni telefon",
      },
      price: "400e",
      mark: "Samsung",
      model: "J3",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/2.png",
        alt: "beli image",
      },
      price: "630e",
      mark: "Huawei",
      model: "P12",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/3.png",
        alt: "druga image",
      },
      price: "500e",
      mark: "Huawei",
      model: "l24",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/4.png",
        alt: "druga image",
      },
      price: "860e",
      mark: "Huawei",
      model: "Pro 16C",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/5.png",
        alt: "druga image",
      },
      price: "420e",
      mark: "Nokia",
      model: "3030",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/6.png",
        alt: "druga image",
      },
      price: "690e",
      mark: "Nokia",
      model: "C8",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/1.png",
        alt: "druga image",
      },
      price: "280e",
      mark: "Nokia",
      model: "907786",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/2.png",
        alt: "druga image",
      },
      price: "550e",
      mark: "Xiaomi",
      model: "Note 8 pro",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/3.png",
        alt: "druga image",
      },
      price: "780e",
      mark: "Xiaomi",
      model: "Note 7 D",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/4.png",
        alt: "druga image",
      },
      price: "210e",
      mark: "Xiaomi",
      model: "Redmi 5",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/3.png",
        alt: "druga image",
      },
      price: "780e",
      mark: "",
      model: "Note 7 D",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/4.png",
        alt: "druga image",
      },
      price: "190e",
      mark: "Motorola Moto",
      model: "Ge 112S",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/5.png",
        alt: "druga image",
      },
      price: "380e",
      mark: "Motorola Moto",
      model: "P 34 D",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/6.png",
        alt: "druga image",
      },
      price: "780e",
      mark: "Motorola Moto",
      model: "Note 187D",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/1.png",
        alt: "druga image",
      },
      price: "220e",
      mark: "Alcatel",
      model: "Mers13+",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/2.png",
        alt: "druga image",
      },
      price: "780e",
      mark: "Alcatel",
      model: "Bels90",
      sale: "Sale 10%",
    },
    {
      image: {
        link: "images/3.png",
        alt: "druga image",
      },
      price: "730e",
      mark: "Alcatel",
      model: "Bo980",
      sale: "Sale 10%",
    },
  ];
  fetchData("mobile", listData);
  $("#sort").change(filterChange);

  function fetchData(file, callback) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments", //umesto ove url adrese treba da bude file odnosno mobile niz
      method: "get",
      dataType: "json",
      success: function (results) {
        callback(results);
        results = mobile;
        console.log(mobile);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  function listData(AllJsonData) {
    let html = "";
    for (let oneData of AllJsonData) {
      html += `<div class="brand_box">
            <img link="${oneData.link}" alt="${oneData.alt}" />
            <h3>$<strong class="red">${oneData.price}</strong></h3>
            <span>${oneData.mark}</span>
            <p>${oneData.model}</p>
            <p id="sale">${oneData.sale}</p>
            
           
        </div>`;
    }
    if (!AllJsonData.length) {
      html = "No phones available";
    }
    document.getElementsByClassName(".brand_box").innerHTML = html;
    return html;
  }
  function sort(data) {
    const sortType = document.getElementById("sort").value;
    if (sortType == "asc") {
      return data.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    return data.sort((a, b) => (a.price < b.price ? 1 : -1));
  }

  //regullar expression

  document
    .querySelector("#sendbutton")
    .addEventListener("click", function check(event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      let errors = [];
      var name = document.querySelector("#name").value;
      var email = document.querySelector("#email-form").value;
      var phone = document.querySelector("#phone-form").value;
      var message = document.querySelector("#message-form").value;

      var inputName = document.querySelector("#name");
      var inputEmail = document.querySelector("#email-form");
      var inputPhone = document.querySelector("#phone-form");
      var inputMessage = document.querySelector("#message-form");

      var regexName = /^[A-Z][a-z]+$/;
      if (!regexName.test(name)) {
        inputName.classList.remove("Correct");
        inputName.classList.add("Incorrect");
        errors.push(
          "Please write a correct name! Example of a correctly written name: Maria Elias"
        );
      } else {
        inputName.classList.remove("Incorrect");
        inputName.classList.add("Correct");
      }

      var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (!regexEmail.test(email)) {
        inputEmail.classList.remove("Correct");
        inputEmail.classList.add("Incorrect");
        errors.push(
          "Please write a correct mail! Example of a correctly written mail address: mariaelias@hotmail.com"
        );
      } else {
        inputEmail.classList.remove("Incorrect");
        inputEmail.classList.add("Correct");
      }

      var regexPhone = /^06[01234569][\d]{6,7}$/;
      if (!regexPhone.test(phone)) {
        inputPhone.classList.remove("Correct");
        inputPhone.classList.add("Incorrect");
        errors.push(
          "Please write a correct phone number! Example of a correctly written phone number: 064258879"
        );
      } else {
        inputPhone.classList.remove("Incorrect");
        inputPhone.classList.add("Correct");
      }

      var regexMessage = /^[A-ZČĆŽŠĐ][a-zčćžšđ]([\d \w]{5,100})$/;
      if (!regexMessage.test(message)) {
        inputMessage.classList.remove("Correct");
        inputMessage.classList.add("Incorrect");
        errors.push(
          "Please write a correct message! Example of a correctly written message:A message of 5 to 100 characters"
        );
      } else {
        inputPhone.classList.remove("Incorrect");
        inputPhone.classList.add("Correct");
      }

      var errorHtml = errors.map((error) => {
        return $(`<div>${error}</div>`);
      });
      $("#errors").empty();
      $.each(errorHtml, function (i, val) {
        $("#errors").append(val);
      });
    });

  //SCROLL MAIN MENU
  $(document).ready(function () {
    $("#mainMenuGoHome").click(function () {
      $("html").animate(
        {
          scrollTop: $("#secondSlideHome").offset().top - 55,
        },
        500
      );
    });

    $("mainMenuGoBrand").click(function () {
      $("html").animate(
        {
          scrollTop: $("#aboutslide").offset().top - 55,
        },
        500
      );
    });

    $("mainMenuGoSpecials").click(function () {
      $("html").animate(
        {
          scrollTop: $("#brandslide").offset().top - 55,
        },
        500
      );
    });

    $("mainMenuGoContact").click(function () {
      $("html").animate(
        {
          scrollTop: $("#contactSlide").offset().top - 55,
        },
        500
      );
    });
  });
  //SCROLL FOOTER MENU

  $("#goHome").click(function () {
    $("html").animate(
      {
        scrollTop: $("#secondSlideHome").offset().top - 55,
      },
      500
    );
  });
  $("#goAbout").click(function () {
    $("html").animate(
      {
        scrollTop: $("#aboutslide").offset().top - 55,
      },
      500
    );
  });

  $("#goBrand").click(function () {
    $("html").animate(
      {
        scrollTop: $("#brandslide").offset().top - 55,
      },
      500
    );
  });

  $("#goSpecials").click(function () {
    $("html").animate(
      {
        scrollTop: $("#clientsSlide").offset().top - 55,
      },
      500
    );
  });

  $("#goContact").click(function () {
    $("html").animate(
      {
        scrollTop: $("#contactSlide").offset().top - 55,
      },
      500
    );
  });
  //back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // mozilla abd chrome
  });
});
