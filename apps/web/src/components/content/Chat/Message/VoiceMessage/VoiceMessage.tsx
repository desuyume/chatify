import s from './VoiceMessage.module.scss'

export default function VoiceMessage() {
  return (
    <div className={s.VoiceMessage}>
      <button className={s.VoiceMessagePlayBtn}>
        <svg width='12' height='12' viewBox='0 0 24 24' fill='white'>
          <polygon points='5 3 19 12 5 21 5 3' />
        </svg>
      </button>
      <div className={s.VoiceMessageWaveform} id='waveform' />
      <span className={s.VoiceMessageDuration}>0:08</span>
    </div>
  )
}
