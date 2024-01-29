function load_view(title) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
        page.classList.remove('active');
    });

    // Display the selected page
    var selectedPage = document.getElementById(title);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    document.querySelector(".infoCol").scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}