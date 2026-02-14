export const setLayout = (isDesktop) => ({
  type: 'special/SET_LAYOUT',
  payload: { isDesktop }
})

export const seeMore = (maxLength) => ({
  type: 'special/SEE_MORE',
  payload: { maxLength }
})

export const prev = () => ({
  type: 'special/PREV'
})

export const next = (maxLength) => ({
  type: 'special/NEXT',
  payload: { maxLength }
})
