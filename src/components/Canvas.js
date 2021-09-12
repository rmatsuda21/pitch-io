import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {  
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)

  function resizeCanvasToDisplaySize(canvas) {
    if(canvas === null) return;

    console.log(canvas);

    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      return true
    }

    return false
  }

  window.addEventListener('resize', () => {resizeCanvasToDisplaySize(canvasRef.current)})
  
  return <canvas style={{width: '100%'}} ref={canvasRef} {...rest}/>
}

export default Canvas