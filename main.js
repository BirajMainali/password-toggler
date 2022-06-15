const __a = document.querySelectorAll.bind(document);

const passwordInputs = __a('input[type="password"]');
passwordInputs.forEach(input => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);
    const button = document.createElement('button');
    button.style.height = `${input.offsetHeight}px`;
    button.style.position = 'absolute';
    button.style.right = '0';
    button.style.top = '0';
    button.textContent = '';
    button.style.background = 'none';
    button.style.outline = 'none';
    button.style.fontSize = '1.3em';
    button.style.border = 'none';
    input.parentNode.insertBefore(button, input.nextSibling);

    input.addEventListener('input', () => {
        if (input.value.length > 0) {
            button.textContent = '🙊';
        }
        setTimeout(() => {
            button.textContent = '🙈';
        }, 700);
    });

    button.addEventListener('mouseover', () => {
        button.textContent = '🙊';
    })
    button.addEventListener('mouseout', () => {
        button.textContent = '🙈';
    })

    button.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (input.type === 'password' && input.value.length > 0) input.type = 'text';
        else input.type = 'password';
    });

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(x => {
            if (x.type != "attributes" && x.attributeName != "type") return;
            const type = x.target.type;
            type == "password" ? button.textContent = '🙈' : button.textContent = '🙉';
        })
    });

    observer.observe(input, { attributes: true });
});
