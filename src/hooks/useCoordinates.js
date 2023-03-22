import { useEffect, useState } from 'react'
export const useCoordinates = ({enableSearch}) => {
    const [coordinates, setCoordinates] = useState()

    useEffect (() => {
        const successCallback = (position) => {
            setCoordinates({lat:position.coords.latitude,
                           lon: position.coords.longitude})
          };
          
          const errorCallback = (error) => {
            console.log(error);
          };
          
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    }, [enableSearch])

    return { coordinates }

    }