import  { SeekEventsButton }  from './components/SeekEventsButton'
import  { Events }  from './components/Events'
import { useState} from "react"
import './App.css'
import { useEvents } from './hooks/useEvents'
import { useCoordinates } from './hooks/useCoordinates'
import { Form } from './components/Form'
import { Header } from './components/Header'

function App() {

  const [enableSearch, setEnableSearch] = useState(false)
  const { coordinates } =  useCoordinates({enableSearch})
  const { events, loading, getEvents } = useEvents({enableSearch, coordinates})
  const [ search, setSearch ] = useState('')
  const [ query, setQuery ] = useState('')

  const eventsToShow =  events.filter(event=> (event.title.toUpperCase().includes(`${search}`)))

  const handleClick = (event) => {
      setEnableSearch(true)
      getEvents(coordinates)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const query = event.target.value
    setSearch(query.toUpperCase())
  }

  const handleChange = (event) => {
    const query = event.target.value
    setQuery(query)
    setSearch(query.toUpperCase())
  }

  return (
    <div className='App'>
    <header>
    <Header/>
    <SeekEventsButton clickfunction={handleClick}/>
    { enableSearch ? <Form handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
                   : null
    }
    </header>
    <main>
    { enableSearch ? <Events events={eventsToShow}/>
                   : null
    }
    </main>
    </div>
  )
}
export default App
