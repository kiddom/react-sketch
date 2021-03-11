
import FabricCanvasTool from './fabrictool'

const fabric = require('fabric').fabric;

class Pencil extends FabricCanvasTool {
  configureCanvas(props) {
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this._canvas);
    this._canvas.freeDrawingBrush.width = props.lineWidth;
    this._canvas.freeDrawingBrush.color = props.lineColor;
  }
}

export default Pencil;
