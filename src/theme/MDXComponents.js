// Import the original mapper
import ColorCode from '../components/ColorCode';
import ColorPalette from '../components/ColorPalette';
import VideoPlayer from '../components/VideoPlayer';
import InfoTooltip from '../components/InfoTooltip';
import PropsTable from '../components/PropsTable';
import ComponentsGrid from '../components/ComponentsGrid';
import { CardSection, Card } from '../components/CardComponents';
import * as icons from '../icons';

export default {
  // Re-use the default mapping
  ...icons,

  color: ColorCode,
  ColorPalette,
  VideoPlayer,
  InfoTooltip,
  PropsTable,
  ComponentsGrid,
  CardSection,
  Card,
};
