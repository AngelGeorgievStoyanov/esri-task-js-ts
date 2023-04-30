define(["require", "exports", "tslib", "esri/WebMap", "esri/views/MapView"], function (require, exports, tslib_1, WebMap_1, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapInit = void 0;
    WebMap_1 = tslib_1.__importDefault(WebMap_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    function mapInit(x, y, z) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var webmap, view;
            return tslib_1.__generator(this, function (_a) {
                webmap = new WebMap_1.default({
                    basemap: 'streets-vector'
                });
                view = new MapView_1.default({
                    map: webmap,
                    container: 'viewDiv',
                    center: [x || 23.321590139866355, y || 42.697866831005435],
                    zoom: z
                });
                view.when(function () { return console.log('view is ready!'); });
                return [2 /*return*/];
            });
        });
    }
    exports.mapInit = mapInit;
});
