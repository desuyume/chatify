import { componentsIcons, ComponentsIcons } from './components';
import { othersIcons, SharedIcons } from './shared';

export const ALL_ICONS = Object.assign({}, ComponentsIcons, SharedIcons);
export default Object.assign({}, componentsIcons, othersIcons);