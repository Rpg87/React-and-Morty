const FiltersName = (props) => {
    const handleInput = (e) => {
        e.preventDefault();
        props.handleFilter(e.target.value);
    };
    return (
        <>
            <label className="form__label" htmlFor="name">
                Escribe el nombre de tu personaje
            </label>
            <input
                className="form__input"
                type="text"
                name="name"
                id="name"
                value={props.filtersName}
                onInput={handleInput}
            />
        </>
    );
};

export default FiltersName;
