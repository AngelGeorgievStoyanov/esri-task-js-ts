define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findAddress = exports.findSuggestAddress = void 0;
    var apiURL = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/';
    function findSuggestAddress(adress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(apiURL, "/suggest?f=json&text=").concat(adress))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    }
    exports.findSuggestAddress = findSuggestAddress;
    ;
    function findAddress(adress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(apiURL, "/findAddressCandidates?SingleLine=").concat(adress, "&f=json"))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    }
    exports.findAddress = findAddress;
    ;
});
