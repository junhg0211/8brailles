let textarea;

let checkboxes = [];
let keys = 'fdsjkla;';

document.addEventListener('DOMContentLoaded', () => {
    textarea = document.querySelector('#textarea');

    checkboxes.push(document.querySelector("#checkbox-1"));
    checkboxes.push(document.querySelector("#checkbox-2"));
    checkboxes.push(document.querySelector("#checkbox-3"));
    checkboxes.push(document.querySelector("#checkbox-4"));
    checkboxes.push(document.querySelector("#checkbox-5"));
    checkboxes.push(document.querySelector("#checkbox-6"));
    checkboxes.push(document.querySelector("#checkbox-7"));
    checkboxes.push(document.querySelector("#checkbox-8"));

    setInterval(() => {
        if (textarea.value.length === 0) {
            return;
        }

        for (let i = 0; i < 8; i++) {
            if (textarea.value[textarea.value.length-1] === keys[i]) {
                checkboxes[i].checked = !checkboxes[i].checked;
                textarea.value = textarea.value.substring(0, textarea.value.length-1);
            }
        }

        if (textarea.value[textarea.value.length-1] === ' ') {
            let index = 0;
            for (let i = 0; i < 8; i++) {
                if (checkboxes[i].checked) {
                    index += 1 << i;
                    checkboxes[i].checked = false;
                }
            }

            textarea.value = textarea.value.substring(0, textarea.value.length-1)
                + String.fromCharCode(0x2800 + index);
        }
    });
})
