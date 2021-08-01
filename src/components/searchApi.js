function fetchIm(name) {

        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '21793767-b218360da72fb262d25a858fe';
        const PER_PAGE = 12;
    
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=
                      ${this.page}&per_page=${PER_PAGE}&key=${API_KEY}`)
                
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(
                        new Error(`Повторите запрос ${name}`))
                })
}
const api = {
    fetchIm,
}
export default  api ;
