import { Clone, Merged, useGLTF, useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'
import React, { useEffect, useRef } from 'react'

export default function Hotel() {
  const obj = useRef()
  const hotel = useGLTF('./hotel.glb')
  const hotelPosition=useControls({hotelPosition:folder({
    x:{
      min: -10,
      max: 10,
      step: 0.5,
      value: 0
    },
    y:{
      min: -10,
      max: 10,
      step: 0.5,
      value: 0
    },
    z:{
      min: -10,
      max: 10,
      step: 0.5,
      value: 0
    },
  })
})
  // const texture = useTexture('./textures/hotel.png')
  // useEffect(() => {

  //   obj.current.children.forEach((grp) => {
  //     grp.children.forEach((mesh) => {
  //       if (mesh.isMesh) {
  //         if (mesh.material.map) {
  //           mesh.material.map = texture
  //           mesh.material.map.needsUpdate = true
  //         }
  //       }
  //     })
  //   })
  // })
  return (
    <Clone object={hotel.scene} ref={obj} position={[hotelPosition.x,hotelPosition.y,hotelPosition.z]}/>
  )
}
