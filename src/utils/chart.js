// 获取容器的宽和高及位置
export function generateChart (item, index) {
  let _top, _left, _width, _height
  const sizeWidth = 80
  const sizeHeight = 70
  _top = item.row * sizeHeight
  _left = item.col * sizeWidth
  _width = item.sizeX * sizeWidth
  _height = item.sizeY * sizeHeight
  return {
    top: _top + 'px',
    left: _left + 'px',
    width: _width + 'px',
    height: _height + 'px'
  }
}
