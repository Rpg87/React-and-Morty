const FilterType = (props) => {
    const handleInput = (e) => {
        e.preventDefault();
        props.handleType(e.target.value);
    };
    return (
        <>
            <label className="form__label" htmlFor="name">
                Tipo de personaje
            </label>
            <input
                className="form__input"
                type="text"
                name="name"
                id="name"
                value={props.filterType}
                onInput={handleInput}
            />
        </>
    )
};

export default FilterType;