import "./ClosenessFilter.css"
export const ClosenessFilter = ({filters, functionToChange}) => {
    return(
        <div className="filter">
        <input
                  type="range"
                  id="nearness"
                  min="1"
                  max="100"
                  value={filters.range}
                  onChange={functionToChange}
                  />
        <span>{filters.range}km</span>
        </div>          
    )
}