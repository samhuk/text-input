# text-input

A vanilla JS text input UI component.

![sc1](img/sc1.png)

## Usage

`npm i @samhuk/text-input`

```typescript
import { createTextInput } from '@samhuk/text-input'

const element = document.createElement('div')

const textInput = createTextInput({
  label: 'User Name',
  initialValue: '',
})

element.appendChild(textInput.rendered.element)
```

### Importing Styles

There are two main ways the styles of the component can be imported into another project. One can either:

1. `import` the scss entrypoint or css bundle file into your .ts or .js file. This is supported by all the main bundlers out there like webpack and esbuild as long as you have the required loader/plugin for scss or css files configured.
  ```typescript
  // Import the scss entrypoint file from the src
  import 'node_modules/@samhuk/text-input/src/component/styles/index.scss'
  // Import the css bundle file
  import 'node_modules/@samhuk/text-input/dist/styles.css'
  ```
2. `@import` the scss entrypoint file into your scss file.
  ```scss
  @import '~@samhuk/text-input/src/component/styles/index.scss';
  ```
