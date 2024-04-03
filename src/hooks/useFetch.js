import { useEffect, useState } from 'react'
// import availableMeals from '../data/available-meals.json'



export default function useFetch() {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    const getMeals = async function () {
      try {
        const response = await fetch('/data/available-meals.json')
        const data = await response.json()
        console.log(data)
        setMeals(data)
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    }

    getMeals()
  }, [])

  return { meals, error }
}
