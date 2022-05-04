import React from 'react'
import { createTextInput } from '../../../../component'
import { TextInputOptions, TextInput } from '../../../../component/types'
import Com from './base'

/**
 * Thin wrapper around the TextInput component
 */
export const render = (props: { options: TextInputOptions, setComponent?: (component: TextInput) => void }) => (
  <Com
    componentOptions={props.options}
    createComponent={createTextInput}
    setComponent={props.setComponent}
    name="component"
  />
)

export default render
