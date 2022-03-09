const formTask = document.forms.formTask;
const blockWarning1 = document.getElementById('blockWarning1');
function checkboxAdd() {
    if (formTask.taskText.value === "") {
        blockWarning1.style.display = 'block';
    }
    else {
        const label = document.createElement('label');
        label.className = 'checkboxTask';
        const checkInput = document.createElement('input');
        checkInput.type = 'checkbox';
        checkInput.name = 'checks';
        const textSpan = document.createElement('span');

        textSpan.textContent += formTask.taskText.value;

        label.append(checkInput);
        label.append(textSpan);
        formList.appendChild(label);
        formTask.reset();
    }
}
document.getElementById('close').addEventListener('mouseover', (event) => {
    event.target.style.color = 'black';
})
document.getElementById('close').addEventListener('click', () => {
    blockWarning1.style.display = 'none';
})

const formList = document.forms.formList;
const blockWarning2 = document.getElementById('blockWarning2');
formList.addEventListener('click', (event) => {
    if(event.target.type === 'checkbox') {
        event.target.checked = false;
        if( document.getElementsByName('checks').length === 1){
            blockWarning2.style.display = 'block';
        }
        else if (document.getElementsByName('checks').length > 1) {
            event.target.parentElement.remove('input[checkbox]');
        }
    }   
})
document.getElementById('close2').addEventListener('mouseover', (event) => {
    event.target.style.color = 'black';
})
document.getElementById('close2').addEventListener('click', () => {
    blockWarning2.style.display = 'none';

}) 
