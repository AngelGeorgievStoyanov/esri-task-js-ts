import { findAddress, findSuggestAdress } from "./arcgisService";
import { mapInit } from "./map";

const inp = document.getElementsByTagName('input')[0];
const btnSbt = document.getElementsByTagName('button')[0];
inp.addEventListener('keyup', (e) => handleChange(e));
btnSbt.addEventListener('click', (e) => handleSubmit(e));



mapInit();


async function handleChange(e: Event) {
    const address = e.target as HTMLInputElement;

    console.log(address.value);

    await findSuggestAdress(address.value).then((data) => {
        console.log(data.suggestions);


    }).catch((err) => {
        console.log(err);
    });

};



async function handleSubmit(e: Event) {


    e.preventDefault();

    console.log(inp.value);


    await findAddress(inp.value).then((data) => {


        console.log(data.candidates[0]);


    }).catch((err) => {
        console.log(err);
    });

};