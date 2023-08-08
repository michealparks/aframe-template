<script lang='ts'>

import { shadows } from './lib/shadows'

</script>

<a-scene
  stats={import.meta.env.DEV}
  renderer='antialias:true;colorManagement:true;highRefreshRate:true;physicallyCorrectLights:true;toneMapping:ACESFilmic'
  on:loaded={(event) => shadows(event.target.object3D)}
>
  <a-box position='-1 0.5 -3' rotation='0 45 0' color='#4CC3D9' />
  <a-sphere position='0 1.25 -5' radius='1.25' color='#EF2D5E' />
  <a-cylinder position='1 0.75 -3' radius='0.5' height='1.5' color='#FFC65D' />
  <a-plane position='0 0 -4' rotation='-90 0 0' width='4' height='4' color='#7BC8A4' />
  <a-sky color='#ECECEC' />
  <a-light type='ambient' color='#445451' />
  <a-light type='directional' intensity='2' position='2 4 4' />
</a-scene>

<div class='fixed top-2 right-2 p-4 bg-white'>
  Hello A-Frame!
</div>
