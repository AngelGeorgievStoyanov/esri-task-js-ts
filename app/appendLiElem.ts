const form = document.getElementsByClassName('form-search-address')[0]
const liArr = document.getElementsByTagName('li')
const inp = document.getElementsByTagName('input')[0];

interface Suggest {
    isCollection: boolean,
    magicKey: string,
    text: string

}

export function appendLi(arr: Suggest[]) {

    if (Array.from(liArr).length > 0) {
        for (const el of Array.from(liArr)) {
            el.remove();
        }
    }
    arr.map((x: Suggest) => {

        const liEl = document.createElement('li');
        liEl.setAttribute('class', 'form-li-suggestion')
        liEl.textContent = x.text;
        liEl.addEventListener('click', () => {
            inp.value = x.text;
            appendLi([]);
        })
        form.appendChild(liEl);
    })



}