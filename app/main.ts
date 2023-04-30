import { mapInit } from "./map";

const inp = document.getElementsByTagName('input')[0];
const btnSbt = document.getElementsByTagName('button')[0];
inp.addEventListener('keyup', (e) => handleChange(e))
btnSbt.addEventListener('click', (e) => handleSubmit(e))



mapInit()


function handleChange(e: Event) {
    const address = e.target as HTMLInputElement;

    console.log(address.value)

}



function handleSubmit(e: Event) {


    e.preventDefault();

    console.log(inp.value)
}