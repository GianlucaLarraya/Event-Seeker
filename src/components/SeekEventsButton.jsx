//maybe I can use a useContext to avoid prop drilling

export const SeekEventsButton = ( {clickfunction} ) => {

    return (
        <button onClick={clickfunction}>Find events near you</button>
    )
}

1
2
3
4
5
6
7
8
9
10