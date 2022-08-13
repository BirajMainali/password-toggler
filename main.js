const __a = document.querySelectorAll.bind(document);

const passwordInputs = __a('input[type="password"]');
passwordInputs.forEach(input => {
    const button = document.createElement('button');
    button.setAttribute('tabindex', '-1');
    button.type = "button";
    button.style.height = `${input.clientHeight}px`;
    button.style.position = 'absolute';
    button.style.left = (input.offsetLeft + input.clientWidth - 38) + "px";
    button.style.top = (input.offsetTop) + "px";
    button.style.background = 'none';
    button.style.outline = 'none';
    button.style.fontSize = '1.2em';
    button.style.border = 'none';
    input.addEventListener('keydown', e => {
        if(e.ctrlKey && e.key === "b") {
            toggle();
        }
    });
    input.insertAdjacentElement("afterend", button);
    input.parentNode.insertBefore(button, input.nextSibling);

    input.addEventListener('input', (ev) => {
        if (input.value) {
            button.textContent = '🙊';
        }
        setTimeout(() => {
            input.type = input.type;
        }, 1000)
    });

    function toggle() {
        input.type == 'text' ? input.type = 'password' : input.type = 'text';
    }

    button.addEventListener('click', (ev) => {
        ev.preventDefault();
        toggle();
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
