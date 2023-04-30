define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.appendLi = void 0;
    var form = document.getElementsByClassName('form-search-address')[0];
    var liArr = document.getElementsByTagName('li');
    var inp = document.getElementsByTagName('input')[0];
    function appendLi(arr) {
        if (Array.from(liArr).length > 0) {
            for (var _i = 0, _a = Array.from(liArr); _i < _a.length; _i++) {
                var el = _a[_i];
                el.remove();
            }
        }
        arr.map(function (x) {
            var liEl = document.createElement('li');
            liEl.setAttribute('class', 'form-li-suggestion');
            liEl.textContent = x.text;
            liEl.addEventListener('click', function () {
                inp.value = x.text;
                appendLi([]);
            });
            form.appendChild(liEl);
        });
    }
    exports.appendLi = appendLi;
});
