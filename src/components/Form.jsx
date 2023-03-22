export const Form = ({handleSubmit, handleChange, query}) => {
return(
          <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '3px solid black',
            }} onChange={handleChange} value={query}
          />
          <button type='submit'>Search</button>
        </form>) }