import FabricCanvasTool from './fabrictool'
import { EraserBrush } from './FabricExtensions/fabricEraserBrush'

class Eraser extends FabricCanvasTool {
  configureCanvas(props) {
    const eraserBrush = new EraserBrush(this._canvas);
    eraserBrush.width = props.lineWidth || 10;
    eraserBrush.color = "#ffffff";

    this._canvas.freeDrawingBrush = eraserBrush;
    this._canvas.isDrawingMode = true;
  }
}

export default Eraser;

