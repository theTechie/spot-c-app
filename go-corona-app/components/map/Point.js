
import React from 'react'
import { Marker } from 'react-native-maps';
import { FontAwesome as FAIcon } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Icon from '../icon/Icon';
import RedPoint from '../../assets/images/RedPoint.svg'
import BluePoint from '../../assets/images/BluePoint.svg'
import GreenPoint from '../../assets/images/GreenPoint.svg'



const Point = (props) => {
    const zoomLevel = getZoomLevel(props.region);
    const pprops = proceesProps(props, zoomLevel);
    const PSVG = getPointSVG(props.point.degree);

    return zoomLevel > 15 ? null : <Marker coordinate={pprops.point}>
        <PSVG width="30" height="30"></PSVG>
    </Marker>
}


const getZoomLevel = (region) => {
    let zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
    return zoom;
}

const getPointSVG = (degree) => {
    switch (degree) {
        case 1:
            return RedPoint
        case 2:
            return BluePoint;
        case 0:
            return GreenPoint;
        default:
            return GreenPoint;
    }
}

const getIcon = (zoom) => {
    let size = 48;
    let name = 'spot-concern';
    return { name, size }
}

const proceesProps = (props, zoomLevel) => {
    const { region, point } = props;
    const icon = getIcon(zoomLevel);
    return {
        point, icon: {
            ...icon
        }
    }
}

export default Point;