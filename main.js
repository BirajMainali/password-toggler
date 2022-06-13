const __ = document.querySelector.bind(document);
const __a = document.querySelectorAll.bind(document);

const passwordInputs = __a('input[type="password"]');
passwordInputs.forEach(input => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);
    const button = document.createElement('button');
    button.style.height = `${input.offsetHeight}px`;
    button.textContent = '🙈';
    button.style.position = 'absolute';
    button.style.right = '0';
    button.style.top = '0';
    button.style.background = 'none';
    button.style.outline = 'none';
    button.style.fontSize = '1.5em';
    button.style.border = 'none';
    input.parentNode.insertBefore(button, input.nextSibling);

    input.addEventListener('keyup', () => {
        if (input.value.length > 0) {
            button.textContent = '🙊';
        }
        setTimeout(() => {
            button.textContent = '🙈';
        }, 400);

    });

    button.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (input.type === 'password' && input.value.length > 0) {
            button.textContent = '🙉';
            input.type = 'text';
        } else {
            button.textContent = '🙈';
            input.type = 'password';
        }
    })
})
