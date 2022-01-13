const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'e756856a',
            i: 'tt0848228'
        }
    });
    console.log(response.data);
};

fetchData();