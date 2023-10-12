const codeinput = document.getElementById('codeinput');
const submit = document.querySelector('button#run');
const output = document.getElementById('output');
const logger = console;

submit.addEventListener('click', () => {
    const code = codeinput.value;
    if (!code.trim()) return;
    const logs = [];
    logger.log = (msg) => {
        logs.push(msg);
    }
    try {
        const inputfn = new Function(code);
        const val = inputfn();
        output.innerText = logs.join('\n');
        output.classList = ['success'];
    } catch (e) {
        output.innerText = e.message;
        output.classList = ['error'];
    }
});
