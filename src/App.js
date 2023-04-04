import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import MovieDetails from './components/MovieDetails'
import DropdownComponent from './components/DropdownComponent'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('Iron man')

  const changeMovieTitle = (newMovieTitle) => {
    // this.setState({
    //   movieTitle: newMovieTitle,
    // })
    setMovieTitle(newMovieTitle)
  }

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6} className="text-light">
            <DropdownComponent
              movieTitle={movieTitle}
              changeMovieTitle={changeMovieTitle}
              // volendo, dato che abbiamo già la funzione setMovieTitle
              // "regalata", potremmo passare direttamente quella come
              // prop "changeMovieTitle"
              // changeMovieTitle={setMovieTitle}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6}>
            <MovieDetails movieTitle={movieTitle} />
            {/* MovieDetails riceve SEMPRE come prop il TITOLO
              del film selezionato nel dropdown */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
