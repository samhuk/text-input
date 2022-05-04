import { LabelPosition, TextInput, TextInputOptions } from './types'

const updateDirtiness = (textInput: TextInput, newValue: boolean) => {
  textInput.isDirty = newValue
  if (newValue)
    textInput.rendered.element.classList.add('dirty')
  else
    textInput.rendered.element.classList.remove('dirty')
}

export const createTextInput = (options: TextInputOptions): TextInput => {
  let textInput: TextInput
  let indicator: HTMLElement

  const element = document.createElement('div')
  element.classList.add('com-text-input')

  const input = document.createElement('input')
  input.type = options.type ?? 'text'

  const labelWrapper = document.createElement('div')
  labelWrapper.classList.add('com-text-input__label-wrapper')

  let label: HTMLElement
  if (options.label != null) {
    label = document.createElement('label')
    label.textContent = options.label
  }

  if (options.labelPosition === LabelPosition.LEFT)
    element.classList.add('left-label-position')

  if (label != null) {
    labelWrapper.appendChild(label)
    element.appendChild(labelWrapper)
  }
  element.appendChild(input)

  if (options.showDirtinessIndicator) {
    indicator = document.createElement('div')
    indicator.textContent = '⬤'
    indicator.classList.add('com-text-input__dirty-indicator')
    labelWrapper.appendChild(indicator)
  }
 
  input.addEventListener('input', () => {
    updateDirtiness(textInput, true)
    textInput.value = input.value
    options.events?.onInput?.(textInput.value)
  })

  if (options.events?.onChange != null) {
    input.addEventListener('change', () => {
      options.events?.onChange?.(textInput.value)
    })
  }

  if (options.initialValue != null)
    input.value = options.initialValue

  if (options.maxLength != null)
    input.maxLength = options.maxLength

  if (!(options.editable ?? true)) {
    element.classList.add('uneditable')
    input.disabled = true
  }

  textInput = {
    rendered: { element, input },
    value: options.initialValue,
    setValue: newValue => {
      textInput.isDirty = true
      textInput.value = newValue
      input.value = newValue
      updateDirtiness(textInput, true)
    },
    isDirty: false,
    resetDirtiness: () => updateDirtiness(textInput, false)
  }

  updateDirtiness(textInput, false)

  return textInput
}
