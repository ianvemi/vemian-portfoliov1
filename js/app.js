/*PRELOAD HTML COMPONENTS*/
window.addEventListener("load", function () {
  /*MENU RESPONSIVE*/
  const ham = document.querySelector(".ham");
  const enlaces = document.querySelector(".menu ul");
  const barras = document.querySelectorAll(".ham span");

  ham.addEventListener("click", () => enlaces.classList.toggle("activado"));
  enlaces.addEventListener("click", () => enlaces.classList.toggle("activado"));

  /*DARKMODE*/
  const btnSwitch = document.querySelector("#switch");

  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
    btnSwitch.classList.toggle("active");
  });

  /*ANIMATION SCROLL*/
  //Detect animation frame rate
  var scroll =
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  var elementsToShow = document.querySelectorAll(".showOn");

  function loop() {
    elementsToShow.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });
    scroll(loop);
  }

  //CALLING THE FUNCTION
  loop();

  // Helper function from: http://stackoverflow.com/a/7557433/274826
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  //Animación movimiento card

  //welcome-card // welcome-content

  const card = document.querySelector(".welcome-content");
  const container = document.querySelector(".welcome-card");

  //iTEMS WELCOME CONTENT
  const title = document.querySelector(".welcome-content .title");

  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 22;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 22;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  //  //Animate In
  //  container.addEventListener('mouseenter', (e) => {
  //    card.style.transition = "none";
  //     //Popout
  //    title.style.transform = "translateZ(1550px)";

  //   })
  //  //Animate Out
  //  container.addEventListener('mouseleave', (e) =>{
  //    card.style.transition="all 0.5s ease";
  //    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //  })
});
