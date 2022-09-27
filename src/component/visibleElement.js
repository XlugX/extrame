// Получаем нужный элемент
export const Visible = function (target) {
    // Все позиции элемента
    const targetPosition = {
            top: window.scrollY + target.getBoundingClientRect().top,
            left: window.scrollX + target.getBoundingClientRect().left,
            right: window.scrollX + target.getBoundingClientRect().right,
            bottom: window.scrollY + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.scrollY,
            left: window.scrollX,
            right: window.scrollX + document.documentElement.clientWidth,
            bottom: window.scrollY + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код

        console.log('Вы видите элемент :)');
        return true;
    } else {
        return false;
        // Если элемент не видно, то запускаем этот код
    };
};