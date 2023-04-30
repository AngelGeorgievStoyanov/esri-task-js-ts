define(["require", "exports", "tslib", "./appendLiElem", "./arcgisService", "./map"], function (require, exports, tslib_1, appendLiElem_1, arcgisService_1, map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inp = document.getElementsByTagName('input')[0];
    var btnSbt = document.getElementsByTagName('button')[0];
    inp.addEventListener('keyup', function (e) { return handleChange(e); });
    btnSbt.addEventListener('click', function (e) { return handleSubmit(e); });
    var findSuggestAdressArr;
    var x;
    var y;
    var z = 12;
    (0, map_1.mapInit)(x, y, z);
    function handleChange(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var address;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = e.target;
                        if (!(typeof address.value === "string" && address.value.trim() !== "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, arcgisService_1.findSuggestAddress)(address.value).then(function (data) {
                                findSuggestAdressArr = data.suggestions;
                                (0, appendLiElem_1.appendLi)(findSuggestAdressArr);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        findSuggestAdressArr = [];
                        (0, appendLiElem_1.appendLi)(findSuggestAdressArr);
                        _a.label = 3;
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
    function handleSubmit(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        if (!(inp.value !== null && (typeof inp.value === 'string'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, arcgisService_1.findAddress)(inp.value).then(function (data) {
                                console.log(data.candidates[0]);
                                x = data.candidates[0].location.x;
                                y = data.candidates[0].location.y;
                                console.log(x);
                                console.log(y);
                                (0, map_1.mapInit)(x, y, z = 14);
                                findSuggestAdressArr = [];
                                (0, appendLiElem_1.appendLi)(findSuggestAdressArr);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    ;
});
