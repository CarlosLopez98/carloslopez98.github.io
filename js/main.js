let show = false;
let menu_size = 38;

$(document).ready(() => {
  let screen_height = screen.availHeight - menu_size;
  move_to("#home");
  $(".welcome").css("height", screen_height + "px");
  $(".welcome").css("padding-top", screen_height / 2 - 80 + "px");
  //$(".contact").css("height", screen_height + "px");
  // Menu
  let toggler = $("#toggler");
  toggler.click(() => {
    if (show) {
      show = false;
      $(".navbar").animate(
        {
          top: "-190px",
        },
        "slow"
      );
    } else {
      show = true;
      $(".navbar").animate(
        {
          top: "0px",
        },
        "slow"
      );
    }
  });

  $("#home-link").click(() => {
    move_to("#home");
  });
  $("#about-link").click(() => {
    move_to("#about");
  });
  $(".more").click(() => {
    move_to("#about");
  });
  $("#skills-link").click(() => {
    move_to("#skills");
  });
  $("#projects-link").click(() => {
    move_to("#projects");
  });
  $("#contact-link").click(() => {
    move_to("#contact");
  });

  // Projects events
  $("#project1").click(() => {
    window.open("https://yourimage.herokuapp.com/", "_blank");
  });

  $("#project2").click(() => {
    window.open("https://mybluetimer.netlify.app/", "_blank");
  });

  $("#project3").click(() => {
    window.open("https://infomovies.herokuapp.com/", "_blank");
  });
});

let move_to = (id) => {
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - menu_size,
    },
    1000
  );
  show = false;
  $(".navbar").animate(
    {
      top: "-190px",
    },
    "slow"
  );
};
