import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './selection.json';
const expoAssetId = require("../../assets/fonts/icomoon.ttf");
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', expoAssetId);
export default Icon;