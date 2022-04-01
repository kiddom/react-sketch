
import FabricCanvasTool from './fabrictool'
import { hexToRgbA, colorNameToHex } from './utils';

class Highlighter extends FabricCanvasTool {

  configureCanvas(props) {
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.highlighterWidth;
    this._canvas.freeDrawingBrush.color = props.highlighterColor.indexOf('#') > -1 ? hexToRgbA(props.highlighterColor) : hexToRgbA(colorNameToHex(props.highlighterColor));
  }
}

export default Highlighter;