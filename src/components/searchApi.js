// import searchApi from '../components/searchApi' 

// function fetchImg({ searchQuery = "", currentPage = 1 }) {

        // const BASE_URL = 'https://pixabay.com/api/';
        // const API_KEY = '21793767-b218360da72fb262d25a858fe';
        // const PER_PAGE = 12;
    
//     return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=
//                       ${currentPage}&per_page=${PER_PAGE}&key=${API_KEY}`)
                
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json()
//                     }
//                     return Promise.reject(
//                         new Error(`Повторите запрос ${searchQuery}`))
//                 })
// }
// const api = {
//     fetchImg}
// export default  api ;
// export default { fetchImg } ;

// import axios from 'axios';

// const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '21793767-b218360da72fb262d25a858fe';
//     const PER_PAGE = 12;
//     return axios
//         .get(
//         `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=
// //                       ${currentPage}&key=${API_KEY}&per_page=${PER_PAGE}`
//     )
//     .then(response =>response.data.hits)
// }

// export default fetchHits;

import axios from 'axios';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21793767-b218360da72fb262d25a858fe&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response =>response.data.hits)
}

export default fetchHits;