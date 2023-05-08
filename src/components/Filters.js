import "../styles/components/Filters.scss";
import FiltersName from "./FiltersName";
import FilterType from "./FilterType";

const Filters = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form className="form" action="" onSubmit={handleSubmit}>
                <FiltersName
                    handleFilter={props.handleFilter}
                    filtersName={props.filtersName}
                />
            </form>
            <form onSubmit={handleSubmit}>
                <FilterType handleType={props.handleType}
                    filterType={props.filterType} />
            </form>
        </>
    );
};

export default Filters;
