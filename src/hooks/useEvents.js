import { useRef, useState, useCallback, useEffect } from 'react'
import { searchEvents } from '../services/events.js'

export const useEvents = ({ coordinates }) => {
    
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    // el error no se usa pero puedes implementarlo
    // si quieres:
    const [, setError] = useState(null)

    const getEvents = async ({ coordinates }) => {
        
        try {
          setLoading(true)
          setError(null)
          const newEvents = await searchEvents({ coordinates })
          setEvents(newEvents)
        } catch (e) {
          setError(e.message)
        } finally {
          // tanto en el try como en el catch
          setLoading(false) 
        }
      }
    

    useEffect(() => {

        getEvents({coordinates})

    },[coordinates])
  
  
    return { events, getEvents, loading }
  }