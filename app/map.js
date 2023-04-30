define(["require", "exports", "tslib", "esri/Graphic", "esri/WebMap", "esri/layers/GraphicsLayer", "esri/symbols/WebStyleSymbol", "esri/views/MapView"], function (require, exports, tslib_1, Graphic_1, WebMap_1, GraphicsLayer_1, WebStyleSymbol_1, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapInit = void 0;
    Graphic_1 = tslib_1.__importDefault(Graphic_1);
    WebMap_1 = tslib_1.__importDefault(WebMap_1);
    GraphicsLayer_1 = tslib_1.__importDefault(GraphicsLayer_1);
    WebStyleSymbol_1 = tslib_1.__importDefault(WebStyleSymbol_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    function mapInit(x, y, z) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var point, webmap, view, graphicsLayer, webStyleSymbol, pointGraphic;
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
                graphicsLayer = new GraphicsLayer_1.default();
                webmap.add(graphicsLayer);
                if (x && y) {
                    point = {
                        type: "point",
                        longitude: x,
                        latitude: y
                    };
                }
                ;
                webStyleSymbol = new WebStyleSymbol_1.default({
                    name: "push-pin-1",
                    styleName: "Esri2DPointSymbolsStyle"
                });
                pointGraphic = new Graphic_1.default({
                    geometry: point,
                    symbol: webStyleSymbol
                });
                graphicsLayer.add(pointGraphic);
                view.when(function () { return console.log('view is ready!'); });
                return [2 /*return*/];
            });
        });
    }
    exports.mapInit = mapInit;
});
