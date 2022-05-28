const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let lista = Array.from(entry.target.classList);
    let index = lista.findIndex((element) => element == "animation") + 1;

    if (entry.isIntersecting) {
      switch (parseInt(entry.target.classList[index])) {
        case 1:
          entry.target.classList.toggle("slide-left-in", true);
          break;
        case 2:
          entry.target.classList.toggle("slide-rigth-in", true);
          break;
        case 3:
          entry.target.classList.toggle("wype-enter", true);
          break;
        case 4:
          entry.target.classList.toggle("upAndDown", true);
          break;
        case 5:
          entry.target.classList.toggle("change-opacity", true);
          break;
        case 6:
          entry.target.classList.toggle("zoom-in", true);
          break;
        default:
          break;
      }
    }
  });
});

function addElementsToObserve() {
  document.querySelectorAll(".animation").forEach((element) => {
    observer.observe(element);
  });
}

addElementsToObserve();
