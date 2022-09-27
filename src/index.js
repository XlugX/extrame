import './index.html';
import './index.scss'
import { Canvas } from './component/drawBg';
import { Visible } from './component/visibleElement';
import { toggleMenu } from './component/toggleMenu';

const containers = document.querySelectorAll('.container');
const title = document.getElementById('title');
const preview = document.querySelector('.preview');


document.addEventListener('DOMContentLoaded', () => {
    containers.forEach(item => {
        item.classList.add('visible')
    });
    document.body.style.overflow = 'hidden';
    new Canvas();

    setTimeout(() => {
        title.classList.add('remove');
        if (title.classList.contains('remove')) {
            preview.classList.add('remove');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                preview.remove();
            }, 1500)
        }
    }, 4000);

    toggleMenu();
});