import { useEffect, useState } from 'react'

export default function useFetch() {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState([])

  // const apiKey = '404154087cc447c9b5a1b19be4c3638a'
  const url = 'https://rickandmortyapi.com/api/character'
  // const url =
  //    `https://api.spoonacular.com/food/products/?apiKey=${apiKey}`
  const options = {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  }
  useEffect(() => {
    const getMeals = async function () {
      try {
        const response = await fetch(url, options)
        // console.log(response);
        const data = await response.json()
        const result = data.results
        console.log(result)
        // console.log(data)
        setMeals(result)
        // setMeals(data)
      } catch (error) {
        setError(error.message)
      }
    }

    getMeals()
  }, [])

  return { meals, error }
}
