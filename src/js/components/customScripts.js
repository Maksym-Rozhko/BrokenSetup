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
});
