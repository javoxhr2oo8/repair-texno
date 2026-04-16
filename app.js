(function () {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');

    function updateTheme(isLight) {
        if (isLight) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            if (toggle) toggle.checked = true;
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            if (toggle) toggle.checked = false;
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') updateTheme(true);
    else if (savedTheme === 'dark') updateTheme(false);
    else updateTheme(false);

    if (toggle) {
        toggle.addEventListener('change', function () {
            updateTheme(this.checked);
        });
    }
})();