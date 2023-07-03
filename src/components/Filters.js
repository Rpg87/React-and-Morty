import FiltersName from "./FiltersName";


const Filters = (props) => {

    const handleSubmit = (e) => { e.preventDefault() }

    return (
        <form action="" onSubmit={handleSubmit}>
            <FiltersName handleFilter={props.handleFilter} filtersName={props.filtersName} />
        </form>
    )
}

export default Filters;