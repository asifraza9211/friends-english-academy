/* =====================================================
   FRIENDS' ENGLISH ACADEMY
   MAIN JAVASCRIPT
===================================================== */


/* ================= PAGE LOADER ================= */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});


/* ================= MOBILE MENU ================= */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    if (!header || !nav) return;


    /* Create Mobile Menu Button */

    const menuButton = document.createElement("button");

    menuButton.className = "mobile-menu-btn";

    menuButton.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    menuButton.setAttribute(
        "aria-label",
        "Open Menu"
    );


    /* Add Button */

    header.insertBefore(
        menuButton,
        nav
    );


    /* Mobile Menu CSS */

    const mobileStyle =
    document.createElement("style");

    mobileStyle.innerHTML = `

        .mobile-menu-btn {
            display: none;
            border: none;
            background: #071a49;
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 10px;
            font-size: 20px;
            cursor: pointer;
        }

        @media(max-width:900px) {

            .mobile-menu-btn {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            header nav {
                display: none;
                width: 100%;
            }

            header nav.mobile-open {
                display: block;
            }

            header nav ul {
                flex-direction: column;
                gap: 0;
                width: 100%;
            }

            header nav li {
                border-bottom: 1px solid #eee;
            }

            header nav a {
                display: block;
                padding: 14px 5px;
            }

        }

    `;

    document.head.appendChild(
        mobileStyle
    );


    /* Open / Close Menu */

    menuButton.addEventListener(
        "click",
        function () {

            nav.classList.toggle(
                "mobile-open"
            );


            const icon =
                menuButton.querySelector("i");


            if (
                nav.classList.contains(
                    "mobile-open"
                )
            ) {

                icon.className =
                    "fa-solid fa-xmark";

            } else {

                icon.className =
                    "fa-solid fa-bars";

            }

        }
    );


    /* Close Menu After Clicking Link */

    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                nav.classList.remove(
                    "mobile-open"
                );

                const icon =
                    menuButton.querySelector("i");

                icon.className =
                    "fa-solid fa-bars";

            }
        );

    });

});



/* ================= ACTIVE NAVIGATION ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const currentPage =
            window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


        const links =
            document.querySelectorAll(
                "nav a"
            );


        links.forEach(function (link) {

            const linkPage =
                link.getAttribute("href")
                .split("#")[0]
                .toLowerCase();


            if (
                linkPage === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* ================= SMOOTH SCROLL ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const anchors =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        anchors.forEach(function (anchor) {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        targetID === "#" ||
                        !targetID
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });

    }
);



/* ================= SCROLL HEADER ================= */

window.addEventListener(
    "scroll",
    function () {

        const header =
            document.querySelector(
                "header"
            );


        if (!header) return;


        if (
            window.scrollY > 50
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* ================= HEADER SCROLL STYLE ================= */

const headerStyle =
document.createElement("style");

headerStyle.innerHTML = `

    header {
        transition:
            box-shadow .3s ease,
            background .3s ease;
    }

    header.scrolled {
        box-shadow:
            0 8px 30px rgba(0,0,0,.14);
    }

`;

document.head.appendChild(
    headerStyle
);



/* ================= REVEAL ANIMATION ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const revealElements =
            document.querySelectorAll(
                ".course-card, .cefr-card, .learning-card, .quick-card, .stat, .about-home, .gallery-grid img"
            );


        if (
            revealElements.length === 0
        ) {
            return;
        }


        const revealStyle =
            document.createElement(
                "style"
            );


        revealStyle.innerHTML = `

            .scroll-reveal {
                opacity: 0;
                transform: translateY(30px);
                transition:
                    opacity .7s ease,
                    transform .7s ease;
            }

            .scroll-reveal.show {
                opacity: 1;
                transform: translateY(0);
            }

        `;


        document.head.appendChild(
            revealStyle
        );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "scroll-reveal"
                );

            }
        );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("show");

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    }
);



/* ================= DEMO FORM ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "demoForm"
            );


        if (!form) return;


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    )?.value || "";


                const phone =
                    document.getElementById(
                        "phone"
                    )?.value || "";


                const email =
                    document.getElementById(
                        "email"
                    )?.value || "";


                const level =
                    document.getElementById(
                        "level"
                    )?.value || "";


                const timing =
                    document.getElementById(
                        "timing"
                    )?.value || "";


                const message =
                    document.getElementById(
                        "message"
                    )?.value || "";


                const text =
`Hello Friends' English Academy,

I want to book a demo class.

Name: ${name}
Phone: ${phone}
Email: ${email}
English Level: ${level}
Preferred Timing: ${timing}

Message:
${message}`;


                const whatsappNumber =
                    "919773963045";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        text
                    );


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }
);



/* ================= PHONE NUMBER VALIDATION ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const phoneInput =
            document.getElementById(
                "phone"
            );


        if (!phoneInput) return;


        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9+]/g,
                        ""
                    );

            }
        );

    }
);



/* ================= GALLERY LIGHTBOX ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const images =
            document.querySelectorAll(
                ".gallery-grid img"
            );


        if (!images.length) return;


        const lightbox =
            document.createElement(
                "div"
            );


        lightbox.id =
            "galleryLightbox";


        lightbox.innerHTML = `

            <button
                id="closeLightbox"
                aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <img
                id="lightboxImage"
                src=""
                alt="Gallery Image">

        `;


        document.body.appendChild(
            lightbox
        );


        const style =
            document.createElement(
                "style"
            );


        style.innerHTML = `

            #galleryLightbox {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,.9);
                display: none;
                align-items: center;
                justify-content: center;
                padding: 30px;
                z-index: 99999;
            }

            #galleryLightbox.show {
                display: flex;
            }

            #galleryLightbox img {
                max-width: 92%;
                max-height: 88vh;
                border-radius: 12px;
                object-fit: contain;
            }

            #closeLightbox {
                position: absolute;
                top: 20px;
                right: 25px;
                width: 45px;
                height: 45px;
                border: none;
                border-radius: 50%;
                background: white;
                color: #071a49;
                font-size: 20px;
                cursor: pointer;
            }

            .gallery-grid img {
                cursor: pointer;
            }

        `;


        document.head.appendChild(
            style
        );


        const lightboxImage =
            document.getElementById(
                "lightboxImage"
            );


        const closeButton =
            document.getElementById(
                "closeLightbox"
            );


        images.forEach(
            function (image) {

                image.addEventListener(
                    "click",
                    function () {

                        lightboxImage.src =
                            this.src;

                        lightbox.classList.add(
                            "show"
                        );

                    }
                );

            }
        );


        closeButton.addEventListener(
            "click",
            function () {

                lightbox.classList.remove(
                    "show"
                );

            }
        );


        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    lightbox.classList.remove(
                        "show"
                    );

                }

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    lightbox.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);



/* ================= WHATSAPP BUTTON ================= */

function openWhatsApp() {

    const number =
        "919773963045";


    const message =
        "Hello Friends' English Academy, I would like to know more about your English courses.";


    const url =
        "https://wa.me/" +
        number +
        "?text=" +
        encodeURIComponent(
            message
        );


    window.open(
        url,
        "_blank"
    );

}



/* ================= CONTACT BUTTONS ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const whatsappButtons =
            document.querySelectorAll(
                ".whatsapp-btn"
            );


        whatsappButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        openWhatsApp();

                    }
                );

            }
        );

    }
);



/* ================= CURRENT YEAR ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const yearElements =
            document.querySelectorAll(
                ".current-year"
            );


        yearElements.forEach(
            function (element) {

                element.textContent =
                    new Date()
                    .getFullYear();

            }
        );

    }
);



/* ================= BACK TO TOP ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const topButton =
            document.createElement(
                "button"
            );


        topButton.innerHTML =
            '<i class="fa-solid fa-arrow-up"></i>';


        topButton.id =
            "backToTop";


        topButton.setAttribute(
            "aria-label",
            "Back to top"
        );


        document.body.appendChild(
            topButton
        );


        const style =
            document.createElement(
                "style"
            );


        style.innerHTML = `

            #backToTop {
                position: fixed;
                right: 20px;
                bottom: 90px;

                width: 45px;
                height: 45px;

                border: none;
                border-radius: 50%;

                background: #071a49;
                color: white;

                cursor: pointer;

                opacity: 0;
                visibility: hidden;

                transition: .3s;

                z-index: 9998;
            }

            #backToTop.show {
                opacity: 1;
                visibility: visible;
            }

            #backToTop:hover {
                background: #e53935;
                transform: translateY(-3px);
            }

        `;


        document.head.appendChild(
            style
        );


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 400
                ) {

                    topButton.classList.add(
                        "show"
                    );

                } else {

                    topButton.classList.remove(
                        "show"
                    );

                }

            }
        );


        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);