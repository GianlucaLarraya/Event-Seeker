const API_KEY = 'VFvWbqCRnMr7T2lIpfYIZGlN6PI8vw9W'

export const searchEvents = async ({coordinates }) => {

  
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?latlong=${coordinates.lat},${coordinates.lon}&radius=25&unit=km&size=55&apikey=${API_KEY}`)
      const json = await response.json()
  
      const events = json._embedded.events
  
      return events.map(event => ({
        id: event.id,
        title: event.name,
        date: event.dates.start.localDate,
        image: event.images[0].url,
      }))
    } catch (e) {
      throw e;
    }
  }