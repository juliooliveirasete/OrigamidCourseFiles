function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index);
            })
        })
    }
}

initTabNav();

function inicAccordion() {
    const accordeonList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordeonList.length) {
        accordeonList[0].classList.add(activeClass)
        accordeonList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordeonList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

inicAccordion();

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        // forma alternativa
        // const topo = section.offsetTop;
        // windows.scrollTo({
        //    top: topo,
        //    behavior: 'smooth',
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })

}

initScrollSuave()

function animaScrollP() {

    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.5;
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }
        animaScroll()
    }
    window.addEventListener('scroll', animaScroll)
}

animaScrollP()