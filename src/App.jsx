import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';

function App() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const geometry = new THREE.CapsuleGeometry(6, 6, 40, 80);
    const material = new THREE.MeshBasicMaterial({ color: isOn ? 0xffff00 : 0xffffff });
    const capsule = new THREE.Mesh(geometry, material);

    capsule.rotation.x = Math.PI / 2;
    capsule.rotation.y = 0;
    capsule.rotation.z = 0;

    test.scene.add(capsule);
  }, [isOn]);

  const handleButtonClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <div className='drop-shadow-3xl'>
        <canvas id="myThreeJsCanvas" />
      </div>
      <div className='flex justify-center items-center'>
        <p className='absolute text-white top-[10%] font-bold text-xl text-center'>You can rotate this lamp in any direction because it is 3-Dimensional</p>
      <div className='absolute text-white top-[92%] font-bold text-2xl'>
        {isOn? (<p>Lamp is On</p>) : (<p>Lamp is Off</p>)}
      </div>
        <button
          style={{
            position: "absolute",
            top: 500,
            color: "white",
            backgroundColor: "gray",
            padding: "15px",
            borderRadius: "50%",
            fontWeight: "bold"
          }}
          onClick={handleButtonClick}
        >
          {isOn ? 'On' : 'Off'}
        </button>
      </div>
    </>
  );
}

export default App;