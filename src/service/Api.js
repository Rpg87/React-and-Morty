const callToApi = () => {
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
        .then((response) => response.json())
        .then((data) => {
            const charactersApi = data.results.map((user) => {
                return {
                    id: user.id,
                    image: user.image,
                    name: user.name,
                    species: user.species,

                };
            });
            return charactersApi;

        });
};

export default callToApi;