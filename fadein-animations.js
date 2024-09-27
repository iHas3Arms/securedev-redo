const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let alreadyAnimated = false;
        if (alreadyAnimated) return;
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
            alreadyAnimated = true;
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));