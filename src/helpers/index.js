export const moneyFormat = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const getTime = ( timeStamp ) => {
  const time = new Date(timeStamp)
  let h = time.getHours()
  let m = time.getMinutes()
  h = h > 9 ? h : `0${h}`
  m = m > 9 ? m : `0${m}`
  return `${h}:${m}`
}