import React from 'react'
import { TextInput, TextInputOptions } from '../../../component/types'
import TextInputWithReact from '../common/generic/myComponent'
import ItemBase from './itemBase'

const COMPONENT_OPTIONS: TextInputOptions = {
  initialValue: '',
  label: 'My Text Input Label'
}

const Operations = (props: { component: TextInput }) => (
  <>
    <button
      type="button"
      className="button--white"
      onClick={() => props.component.setValue('New text!')}
    >
      Update the text value
    </button>
  </>
)

export const render = () => (
  <ItemBase component={TextInputWithReact} componentOptions={COMPONENT_OPTIONS} operationsComponent={Operations} />
)

export default render
