import { TextField } from "tinacms";
import styled from 'styled-components'

const Label= styled.h3`
color: var(--tina-color-primary);
font-size: var(--tina-font-size-3);
  font-weight: var(--tina-font-weight-bold);
  border-radius: var(--tina-radius-big);
  border: 1px solid var(--tina-color-primary-light);
  transition: color linear ease var(--tina-timing-medium);
  padding: var(--tina-padding-small);
`

export const emailFieldPlugin = {
    __type: 'field',
    Component: TextField,
    name: 'text-email',
    validate: (email, allValues, meta, field)=> {
        let isValidEmail= /.*@.*\..*/.test(email)
        if(!isValidEmail) return 'Invalid email address'
    },
}

export default function RangInput({field,input,meta}) {
    return (
        <>
        <div>
            <label htmlFor="saturation">Image Saturation</label>
        </div>
        <div>
            <input
            name="saturation"
            id="saturation"
            type="rang"
            min="0"
            max="10"
            step=".1"
            {...input}
            />
        </div>
        </>
    )
}