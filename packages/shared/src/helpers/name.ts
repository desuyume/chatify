export function getAvatarMetaName(name: string | null, username: string): string {
  if (!name) return username.slice(0, 2)

  const nameArr = name.split(' ')
  if (nameArr.length >= 2) return `${nameArr[0].slice(0, 1)}${nameArr[1].slice(0, 1)}`
  return nameArr[0].slice(0, 2)
}

export function getMessageMetaName(name: string | null, username: string): string {
  if (!name) return username
  return name.split(' ')[0]
}
