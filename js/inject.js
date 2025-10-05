document.addEventListener('DOMContentLoaded', () => {
    const inject = async (targetId, pathOptions) => {
        const target = document.getElementById(targetId);
        for (const path of pathOptions) {
            try {
                const res = await fetch(path);
                if (res.ok) {
                    const html = await res.text();
                    target.innerHTML = html;
                    return;
                }
            } catch (err) {
            }
        }
        console.warn(`Failed to load ${targetId} from any path`);
    };

    (async () => {
        await inject('site-header', ['partials/header.html', '../partials/header.html']);
        await inject('site-footer', ['partials/footer.html', '../partials/footer.html']);
    })();
});
