
import React from 'react'
import { Marker } from 'react-native-maps';
import { FontAwesome as FAIcon } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const Point = (props) => {
    const zoomLevel = getZoomLevel(props.region);
    const pprops = proceesProps(props, zoomLevel);
    return zoomLevel > 15 ? null : <Marker coordinate ={pprops.point}>
        <FAIcon {...pprops.icon}></FAIcon>
    </Marker>
}


const getZoomLevel = (region) => {
    let zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
    return zoom;
}

const getPonitColor = (degree) => {
    switch (degree) {
        case 1:
            return Colors.pointPositive;
        case 2:
            return Colors.pointEffected;
        case 0:
            return Colors.pointSafe;
        default:
            return Colors.pointSafe;
    }
}

const getIcon = (zoom) => {
    let size = 30;
    let name = 'dot-circle-o'
    return { name, size }
}

const proceesProps = (props, zoomLevel) => {
    const { region, point } = props;
    const icon = getIcon(zoomLevel);
    const color = getPonitColor(point.degree);
    return {
        point, icon: {
            color,
            ...icon
        }
    }
}

export default Point;