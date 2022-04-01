import React from 'react';
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import Note from "./Note"

test('renders content', () => {
    const note = { 
    content:'This is a test',
    important: true
}
const component = render(<Note note={note} />)

console.log(component)
component.getByText('This is a test')
component.getByText('make not importantly')
expect(component.container).toHaveTextContent(note.content)

})   