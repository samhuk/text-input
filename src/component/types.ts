export type Rendered = {
  element: HTMLElement
}

export enum LabelPosition {
  LEFT = 'left',
  ABOVE = 'above'
}

/**
 * Options for the creation of a text input.
 */
export type TextInputOptions = {
  /**
   * True to show the dirtiness indicator.
   */
  showDirtinessIndicator?: boolean
  /**
   * Controls the position of the label.
   * 
   * * `LabelPosition.ABOVE` ("above") - Places the label above the input.
   * * `LabelPosition.LEFT` ("left") - Places the label to-the-left of the input, inline.
   */
  labelPosition?: LabelPosition
  /**
   * The initial value of the text input.
   */
  initialValue: string
  /**
   * The label text.
   */
  label?: string
  /**
   * `type` of the text input. Either `text` or `password`.
   */
  type?: 'text'|'password'
  /**
   * Max character length of the text input, i.e. `maxLen`.
   */
  maxLength?: number
  /**
   * Determines whether the text input is editable or not.
   */
  editable?: boolean
  events?: {
    /**
     * Called whenever there is a change in the characters of the text input. I.e. the `input` event.
     */
    onInput?: (newValue: string) => void
    /**
     * Called whenever there is a change in value and then unfocus of the text input. I.e. the `change` event.
     */
    onChange?: (value: string) => void
  }
}

/**
 * A basic text input component.
 */
export type TextInput = {
  /**
   * The rendered elements of the text input.
   */
  rendered: Rendered & { input: HTMLInputElement }
  /**
   * The current value of the text input
   */
  value: string
  /**
   * Updates the value of the text input.
   */
  setValue: (newValue: string) => void
  /**
   * Current dirtiness of the text input. This indicates whether the
   * value has changed since the dirtiness was last reset.
   */
  isDirty: boolean
  /**
   * Resets the dirtiness to `false`.
   */
  resetDirtiness: () => void
}
