export const getMessageFromValidationError = (error) => {
  const key = Object.keys(error.errors)[0]
  return error.errors[key].message
}
