document.addEventListener('DOMContentLoaded', () => {
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
