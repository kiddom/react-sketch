import FabricCanvasTool from './fabrictool'
import { EraserBrush } from './FabricExtensions/fabricEraserBrush'

class Eraser extends FabricCanvasTool {
  configureCanvas(props) {
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush = new EraserBrush(this._canvas);
    this._canvas.freeDrawingBrush.width = props.lineWidth || 10;
    this._canvas.freeDrawingBrush.color = "#ffffff";

  }
}

export default Eraser;
