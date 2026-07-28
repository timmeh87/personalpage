
const basepath = "/profile"

export function navigateToSection(href: string) {

    const id = href.substring(2);
    const element = document.getElementById(id);

    if (!element) {
        window.location.href = basepath + href;
        return;
    }

    const navbar = document.querySelector("nav");
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

    const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        0;

    history.replaceState(null, "", basepath + href);
    
    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
}

export const links = [
    { name: "About Me", href: "/#about" },
    { name: "Experience", href:  "/#experience" },
    { name: "Projects", href:  "/#projects" },
    { name: "Skills", href:  "/#skills" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Site", href:  "/site" },
];