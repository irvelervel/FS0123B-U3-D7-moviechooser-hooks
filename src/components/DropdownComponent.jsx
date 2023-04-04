// DropdownComponent lavorerà con lo stato di App!
// NON ha bisogno di uno stato proprio!

import Form from 'react-bootstrap/Form'

const DropdownComponent = (props) => {
  return (
    <>
      <h3>Choose your movie!</h3>
      <Form.Select
        value={props.movieTitle}
        onChange={(e) => props.changeMovieTitle(e.target.value)}
        aria-label="movie chooser dropdown"
      >
        <option>Iron man</option>
        <option>Thor</option>
        <option>Black Widow</option>
        <option>Deadpool</option>
      </Form.Select>
    </>
  )
}

export default DropdownComponent
