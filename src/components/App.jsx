import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [imageUrl, setImageUrl] = useState(null)
  
  const fecthRandomDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImageUrl(data.message)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImageUrl(data.message)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      <h1>Aplicacion de perritos</h1>
      {isLoading && <p>Cargando...</p>}
      {imageUrl && <Image src={imageUrl} alt="Un perrito"/>}
      {imageUrl && 
        <Button onClick={fecthRandomDog}>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </Button>
      }

    </main>
  )
}

export default App
