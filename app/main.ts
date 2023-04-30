import { appendLi } from "./appendLiElem";
import { findAddress, findSuggestAddress } from "./arcgisService";
import { mapInit } from "./map";

const inp = document.getElementsByTagName('input')[0];
const btnSbt = document.getElementsByTagName('button')[0];
inp.addEventListener('keyup', (e) => handleChange(e));
btnSbt.addEventListener('click', (e) => handleSubmit(e));

let findSuggestAdressArr: [];
let x: number | undefined;
let y: number | undefined;
let z: number = 12;

mapInit(x, y, z);


async function handleChange(e: Event) {
    const address = e.target as HTMLInputElement;

    if (typeof address.value === "string" && address.value.trim() !== "") {

        await findSuggestAddress(address.value).then((data) => {
            findSuggestAdressArr = data.suggestions;
            appendLi(findSuggestAdressArr);

        }).catch((err) => {
            console.log(err);
        });
    } else {
        findSuggestAdressArr = [];
        appendLi(findSuggestAdressArr);

    };
};



async function handleSubmit(e: Event) {

    e.preventDefault();
  
    if (typeof inp.value === "string" && inp.value.trim() !== "") {

        await findAddress(inp.value).then((data) => {

            x = data.candidates[0].location.x;
            y = data.candidates[0].location.y;


            mapInit(x, y, z = 14)

            findSuggestAdressArr = [];
           
            appendLi(findSuggestAdressArr);

        }).catch((err) => {
            console.log(err);
        });

    }

};