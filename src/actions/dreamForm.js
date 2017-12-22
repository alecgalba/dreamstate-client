export const updateDreamFormData = dreamFormData => {
  return {
    type: 'UPDATED_DREAM',
    dreamFormData
  }
}

export const resetDreamForm = () => {
  return {
    type: 'RESET_DREAM_FORM'
  }
}
