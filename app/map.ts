import Graphic from 'esri/Graphic';
import WebMap from 'esri/WebMap';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import WebStyleSymbol from 'esri/symbols/WebStyleSymbol';
import MapView from 'esri/views/MapView';


export async function mapInit(x: number, y: number, z: number) {
   
    let point: {} | null;


    const webmap = new WebMap({
        basemap: 'streets-vector'
    });

    const view = new MapView({
        map: webmap,
        container: 'viewDiv',
        center: [x || 23.321590139866355, y || 42.697866831005435],
        zoom: z
    });


    const graphicsLayer = new GraphicsLayer();

    webmap.add(graphicsLayer);


    if (x && y) {

        point = {
            type: "point",
            longitude: x,
            latitude: y
        };
    };


    const webStyleSymbol = new WebStyleSymbol({
        name: "push-pin-1",
        styleName: "Esri2DPointSymbolsStyle"
    });


    const pointGraphic = new Graphic({
        geometry: point,
        symbol: webStyleSymbol
    });


    graphicsLayer.add(pointGraphic);


    view.when(() => console.log('view is ready!'))

}
