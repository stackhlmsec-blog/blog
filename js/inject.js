document.addEventListener('DOMContentLoaded', () => {
    const depth = location.pathname.split('/').length - 2;
    const prefix = '../'.repeat(depth);

    fetch(`${prefix}partials/header.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('site-header').innerHTML = html;
        });

    fetch(`${prefix}partials/footer.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('site-footer').innerHTML = html;
        });
});
