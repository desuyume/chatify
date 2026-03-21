export enum SharedIcons {
  BACK = 'BACK', // width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
  VERIFIED = 'VERIFIED', // width='13' height='13' viewBox='0 0 24 24' fill='currentColor'
  CALL = 'CALL', // width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
  VIDEOCALL = 'VIDEOCALL', // width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
  OPTIONS = 'OPTIONS', // width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
  CROSS = 'CROSS', // width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
  READ = 'READ', // width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'
  ATTACH = 'ATTACH', // width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
  SEND = 'SEND' // width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5'
}

export const othersIcons = {
  [SharedIcons.BACK]: <polyline points='15 18 9 12 15 6' />,
  [SharedIcons.VERIFIED]: <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />,
  [SharedIcons.CALL]: (
    <path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 7.18 2 2 0 015 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 12a16 16 0 006.09 6.09l.25-.32a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 20z' />
  ),
  [SharedIcons.VIDEOCALL]: (
    <>
      <polygon points='23 7 16 12 23 17 23 7' />
      <rect x='1' y='5' width='15' height='14' rx='2' />
    </>
  ),
  [SharedIcons.OPTIONS]: (
    <>
      <circle cx='12' cy='12' r='1' />
      <circle cx='19' cy='12' r='1' />
      <circle cx='5' cy='12' r='1' />
    </>
  ),
  [SharedIcons.CROSS]: (
    <>
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </>
  ),
  [SharedIcons.READ]: (
    <>
      <polyline points='20 6 9 17 4 12' />
      <polyline points='20 6 13 17' opacity='.4' />
    </>
  ),
  [SharedIcons.ATTACH]: (
    <path d='M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48' />
  ),
  [SharedIcons.SEND]: (
    <>
      <line x1='22' y1='2' x2='11' y2='13' />
      <polygon points='22 2 15 22 11 13 2 9 22 2' />
    </>
  )
}
