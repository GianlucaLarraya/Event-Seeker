const ListOfEvents = ({events}) => {

    return (
        <ul className="events">
        {events.map(event => (
            <li key={event.id}>
            <div className="object1">   
            <h2>{event.title}</h2>
            <span>{event.date}</span>
            </div>  
            <div className="object2">
            <img src={event.image}/>
            </div>
            </li>
            )
            )}
        </ul>
    )
}
export const Events = ( {events}) => {

    const hasEvents = events?.length > 0
    return(
        hasEvents ? <ListOfEvents events={events} />
                  : <h1>We have no events for your location</h1>
    )
}