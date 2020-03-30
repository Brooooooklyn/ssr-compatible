import Wavesurfer from 'wavesurfer.js'

import ogg from './assets/horse.ogg'

if (typeof window !== 'undefined') {
  Wavesurfer.create({
    container: '#audio',
    waveColor: 'violet',
    progressColor: 'purple',
  }).load(ogg)
}
