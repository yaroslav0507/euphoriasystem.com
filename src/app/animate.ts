export const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const { top, bottom} = reveals[i].getBoundingClientRect();
        const elementVisible = 50;

        if ((top > 0 || bottom > 0) && top < windowHeight - elementVisible) {
            reveals[i].classList.add("animate__animated", "active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
