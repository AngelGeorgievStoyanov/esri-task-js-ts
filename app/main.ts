import WebMap from 'esri/WebMap';
import MapView from 'esri/views/MapView';


function mapInit() {


    const webmap = new WebMap({
        basemap: 'streets-vector'
    });

    const view = new MapView({
        map: webmap,
        container: 'viewDiv',
        center: [23.321590139866355, 42.697866831005435],
        zoom: 12
    });




    view.when(() => console.log('view is ready!'))

}

mapInit()