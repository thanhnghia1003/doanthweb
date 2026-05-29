const sliders = document.querySelectorAll(".book-slider");

sliders.forEach(slider => {

    const section = slider.parentElement;

    const nextBtn = section.querySelector(".next-btn");
    const prevBtn = section.querySelector(".prev-btn");

    // NEXT
    nextBtn.addEventListener("click", () => {

        const firstItem = slider.firstElementChild;

        slider.appendChild(firstItem);

    });

    // PREV
    prevBtn.addEventListener("click", () => {

        const lastItem = slider.lastElementChild;

        slider.prepend(lastItem);

    });

});