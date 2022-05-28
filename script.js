const titulo = document.querySelector(".home__name")
const subtitulo = document.querySelector(".home__description")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-in", true);
    })
},{
    threshold:0.4
})

observer.observe(subtitulo);