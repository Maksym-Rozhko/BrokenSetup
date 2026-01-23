function preloader(preloader) {
    const loader = document.querySelector(preloader);

    if (loader) {
        setTimeout(() => {
            loader.classList.add('remove');
        }, 1500);
        setTimeout(() => {
            loader.remove();
        }, 5500);
    }
};

preloader('.preloader-dots');