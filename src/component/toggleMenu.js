export const toggleMenu = () => {
    const openedMenuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('menu-close-btn');
    const sidebar = document.getElementById('sidebar');

    openedMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open')
    })
};