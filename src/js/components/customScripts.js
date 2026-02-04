document.addEventListener('DOMContentLoaded', () => {
    const dekstopMenuLinks = document.querySelectorAll('.header .nav--static .parent > a');
    const dekstopFixedMenu = document.querySelector('.header .desktop-menu');
    const dekstopFixedMenuBtnClose = document.querySelector('.header .desktop-menu .desktop-menu__close-btn');

    if (dekstopMenuLinks && dekstopFixedMenu) {
        const closeMenu = () => {
            dekstopFixedMenu.classList.remove('show');

            const desktopMenuItems = dekstopFixedMenu.querySelectorAll('.nav .parent');
            desktopMenuItems.forEach(item => item.classList.remove('show'));
        };

        dekstopMenuLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                const targetHref = link.getAttribute('href');

                const targetItem = dekstopFixedMenu.querySelector(`.nav .parent > a[href="${targetHref}"]`);
                if (targetItem) {
                    targetItem.parentElement.classList.add('show');
                }

                dekstopFixedMenu.classList.add('show');
            });
        });

        dekstopFixedMenuBtnClose.addEventListener('click', closeMenu);

        window.addEventListener('click', e => {
            const target = e.target;

            if(target.classList.contains('show')) {
                closeMenu();
            }
        });
    }

    document.querySelectorAll('.header .mobile-menu .nav .parent > a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const parent = this.closest('.parent');

            document.querySelectorAll('.parent').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });

            parent.classList.toggle('active');
        });
    });

    const logoBrandReadMoreItems = document.querySelectorAll('.page-logo-brand .about-logo .about-logo__container .item');

    if (logoBrandReadMoreItems) {
        logoBrandReadMoreItems.forEach(item => {
            item.addEventListener('click', e => {
                const target = e.target;

                if (target.classList.contains('show-more')) {
                    target.nextElementSibling.classList.add('show');
                }

                if (target.classList.contains('show-less')) {
                    target.parentElement.parentElement.classList.remove('show');
                }
            });
        });
    }
});
