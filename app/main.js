define(["require", "exports", "tslib", "./arcgisService", "./map"], function (require, exports, tslib_1, arcgisService_1, map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inp = document.getElementsByTagName('input')[0];
    var btnSbt = document.getElementsByTagName('button')[0];
    inp.addEventListener('keyup', function (e) { return handleChange(e); });
    btnSbt.addEventListener('click', function (e) { return handleSubmit(e); });
    (0, map_1.mapInit)();
    function handleChange(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var address;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = e.target;
                        console.log(address.value);
                        return [4 /*yield*/, (0, arcgisService_1.findSuggestAdress)(address.value).then(function (data) {
                                console.log(data.suggestions);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
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
                        console.log(inp.value);
                        return [4 /*yield*/, (0, arcgisService_1.findAddress)(inp.value).then(function (data) {
                                console.log(data.candidates[0]);
                            }).catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
});
