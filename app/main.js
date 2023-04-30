define(["require", "exports", "./map"], function (require, exports, map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inp = document.getElementsByTagName('input')[0];
    var btnSbt = document.getElementsByTagName('button')[0];
    inp.addEventListener('keyup', function (e) { return handleChange(e); });
    btnSbt.addEventListener('click', function (e) { return handleSubmit(e); });
    (0, map_1.mapInit)();
    function handleChange(e) {
        var address = e.target;
        console.log(address.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inp.value);
    }
});
