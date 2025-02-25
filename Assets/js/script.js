document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".fusion__item");
    const dotsContainer = document.querySelector(".fusion__dots");
    
    dotsContainer.innerHTML = ""; // Очищаем существующие точки
    
    gridItems.forEach(() => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const features = [
        { icon: "🔥", name: "Feature 1", desc: "SpaceTeam bootstrapping user centered design sticky note convergence fund" },
        { icon: "⚡", name: "Feature 2", desc: "User story Steve Jobs iterate human-centered design iterate pair programming 360 campaign." },
        { icon: "🚀", name: "Feature 3", desc: "Short description of the third feature." },
        { icon: "🚀", name: "Feature 4", desc: "Short description of the third feature." },
        { icon: "🚀", name: "Feature 5", desc: "Short description of the third feature." },
        { icon: "🚀", name: "Feature 6", desc: "Short description of the third feature." }
    ];

    const gridContainer = document.querySelector(".fusion__grid");
    const dotsContainer = document.querySelector(".fusion__dots");

    features.forEach((feature, index) => {
        // Создаём блок
        const item = document.createElement("div");
        item.classList.add("fusion__item");
        item.innerHTML = `
            <div class="fusion__icon">${feature.icon}</div>
            <h3 class="fusion__name">${feature.name}</h3>
            <p class="fusion__desc">${feature.desc}</p>
        `;
        gridContainer.appendChild(item);

        // Создаём точку
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);

        // Добавляем hover-эффект
        item.addEventListener("mouseenter", () => {
            dot.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
            dot.classList.remove("active");
        });
    });
});
