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

const sections = document.querySelectorAll('.js-scroll');

function animaScroll() {
    console.log('sim')
}