import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

// MovieDetails riceverà il TITOLO del film (il valore movieTitle da App)
// con questo titolo, MovieDetails farà una fetch a omdbAPI e recupererà
// i dettagli del film selezionato
// poi li salveremo nello stato di MovieDetails e li mostreremo nella Card

const MovieDetails = ({ movieTitle }) => {
  const [movie, setMovie] = useState(null)

  const getMovieDetails = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=24ad60e9&s=${movieTitle}`
      )
      if (response.ok) {
        let details = await response.json()
        // console.log('movie details', details.Search[0])
        // salvare details.Search[0] nello stato del componente
        // details.Search[0] è molto probabilmente il film che mi interessa
        // prelevare da questa fetch
        // this.setState({
        //   movie: details.Search[0],
        // })
        setMovie(details.Search[0])

        // il parametro (oggetto) che passiamo a setState va a FONDERSI (merge)
        // con this.state
      } else {
        // 400, 500
        console.log('error happened with the request')
      }
    } catch (error) {
      console.log('generic error happened', error)
    }
  }

  useEffect(() => {
    console.log('SONO COMPONENTDIDMOUNT()')
    getMovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // dovremmo trovare il modo di lanciare nuovamente la nostra fetch
  // quando riceviamo un nuovo titolo tramite le props
  // MA dobbiamo stare attenti a NON rilanciare la fetch quando cambia lo stato

  useEffect(() => {
    console.log('SONO COMPONENTDIDUPDATE()')
    getMovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieTitle])

  // render si RI-LANCIA automaticamente quando cambia lo state o le props

  console.log('SONO RENDER()')
  // this.getMovieDetails()
  return (
    <div>
      {!movie && <div className="text-light">LOADING...</div>}
      {movie && (
        <Card>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              {movie.Year} | {movie.imdbID}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default MovieDetails
