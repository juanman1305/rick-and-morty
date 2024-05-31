import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import LocationInfo from './assets/components/LocationInfo'
import ResidentsInfo from './assets/components/ResidentsInfo'
import getRandomNumber from './assets/services/getRandomNumber'
import FormSearch from './assets/components/FormSearch'

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126))
  const url = `https://rickandmortyapi.com/api/location/${inputValue || getRandomNumber(126)}`
  const [locationInfo, setLocationInfo, inputError] = useFetch(url)


  useEffect(() => {
      setLocationInfo()
  }, [inputValue])


  return (
    <div className='app'>
      <h1 className='app__title'>Rick and Morty</h1>
      <FormSearch 
        valorInputSetter = {setInputValue}
      />

      {
        inputError
          ? (<h2 className='app__error'>you must provide a number between 1 and 126 😒</h2>
          ) : (
            <>
              < LocationInfo 
                locinfo = {locationInfo}
              />
              <div className='container-residents'>
                {
                  locationInfo?.residents.map(residenturl => (
                    < ResidentsInfo
                      key = { residenturl }
                      resident = { residenturl }
                    />
                  ))
                }
              </div>
            </>
          )
      }

      
  </div>
  )
}

export default App