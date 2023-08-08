<script lang='ts'>

import './lib/components'
import { shadows } from './lib/shadows'

</script>

<a-scene
  vr-mode-ui='enterVRButton:#vr-btn'
  renderer='antialias:true;colorManagement:true;highRefreshRate:true;physicallyCorrectLights:true;toneMapping:ACESFilmic'
  on:loaded={(event) => shadows(event.target.object3D)}
>
  <a-box hover position='-1 1 -3' rotation='0 45 0' color='#787FF6' />
  <a-sphere hover position='0 1.25 -5' radius='0.75' color='#1CA7EC' />
  <a-cylinder hover position='1 1.5 -3' radius='0.3' height='1' color='#4ADEDE' />

  <a-cylinder position='0 0 -4' radius='3' height='0.1' color='#1F2F98' />

  <a-sky color='#7BD5F5' />

  <a-light type='ambient' intensity='10' color='#445451' />
  <a-light type='directional' intensity='2' position='2 4 4' />
</a-scene>

<a
  id='vr-btn'
  class='bg-black z-10 bg-opacity-50 border border-white text-white px-8 py-3 cursor-pointer text-lg'
>
  Start
</a>
