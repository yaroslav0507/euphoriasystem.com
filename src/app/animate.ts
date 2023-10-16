export const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const { top, bottom} = reveals[i].getBoundingClientRect();
        const visibilityOffset = 40;
        
        if ((top > visibilityOffset || bottom > visibilityOffset) && top < windowHeight - visibilityOffset) {
            reveals[i].classList.add("animate__animated", "active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
