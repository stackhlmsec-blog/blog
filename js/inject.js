document.addEventListener('DOMContentLoaded', () => {
    const depth = location.pathname.split('/').length - 2;
    const prefix = '../'.repeat(depth);

    const inject = async (targetId, path) => {
        try {
            const res = await fetch(prefix + path);
            if (res.ok) {
                const html = await res.text();
                document.getElementById(targetId).innerHTML = html;
            } else {
                console.warn(`Failed to load ${prefix + path}: ${res.status}`);
                document.getElementById(targetId).innerHTML = '<p>Navigation failed to load.</p>';
            }
        } catch (err) {
            console.error(`Error loading ${prefix + path}`, err);
            document.getElementById(targetId).innerHTML = '<p>Navigation failed to load.</p>';
        }
    };

    inject('site-header', 'partials/header.html');
    inject('site-footer', 'partials/footer.html');
});