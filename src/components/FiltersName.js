const FiltersName = (props) => {

    const handleInput = (e) => {
        e.preventDefault()
        props.handleFilter(e.target.value);


    }
    return (
        <>
            <label htmlFor="name">Escribe el nombre de tu personaje</label>
            <input type="text" name="name" id="name" value={props.filtersName} onInput={handleInput} />
        </>
    )
}

export default FiltersName;