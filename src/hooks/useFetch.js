import { useEffect, useState } from 'react'

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const getMeals = async function () {
      setIsLoading(true)
      setError(false)
      try {
        const response = await fetch('/data/available-meals.json')
        const data = await response.json()
        setMeals(data)
      } catch (error) {
        // console.log(error)
        // setError(error.message || 'Something went wrong')
        setError(true)
      }
      setIsLoading(false)
    }
    getMeals()
  }, [])

  return { meals, error,isLoading }
}
