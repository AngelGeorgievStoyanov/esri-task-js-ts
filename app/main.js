define(["require", "exports", "tslib", "esri/WebMap", "esri/views/MapView"], function (require, exports, tslib_1, WebMap_1, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WebMap_1 = tslib_1.__importDefault(WebMap_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    function mapInit() {
        var webmap = new WebMap_1.default({
            basemap: 'streets-vector'
        });
        var view = new MapView_1.default({
            map: webmap,
            container: 'viewDiv',
            center: [23.321590139866355, 42.697866831005435],
            zoom: 12
        });
        view.when(function () { return console.log('view is ready!'); });
    }
    mapInit();
});
