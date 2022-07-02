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


    input.addEventListener('input', (ev) => {
        if (ev.target.value) {
            button.textContent = '🙊';
        }
        setTimeout(() => {
            input.type = input.type;
        }, 1000)
    });

    button.addEventListener('click', (ev) => {
        ev.preventDefault();
        input.type == 'text' ? input.type = 'password' : input.type = 'text';
    });

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(x => {
            const target = x.target;
            if (x.type != "attributes" && x.attributeName != "type") return;
            target.type == "password" ? button.textContent = '🙈' : button.textContent = '🙉';
        })
    });

    observer.observe(input, { attributes: true });
});
