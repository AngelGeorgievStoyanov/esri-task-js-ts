import WebMap from 'esri/WebMap';
import MapView from 'esri/views/MapView';


export async function mapInit(x: number, y: number, z: number) {



    const webmap = new WebMap({
        basemap: 'streets-vector'
    });

    const view = new MapView({
        map: webmap,
        container: 'viewDiv',
        center: [x || 23.321590139866355, y || 42.697866831005435],
        zoom: z
    });




    view.when(() => console.log('view is ready!'))

}
