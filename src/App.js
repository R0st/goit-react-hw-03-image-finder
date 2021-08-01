import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar'
import ImageGallery from "./components/ImageGallery";
// import ImageGalleryItem from './components/ImageGalleryItem'
// import All from './components/All'
// import Button from './components/Button'
// import Loader from '../Loader'
import searchApi from '../src/components/searchApi'

export default class App extends Component {
   
    state = {
        hits: [],
        searchQuery: '',
        currentPage: 1,
        isLoading: false,
        error: null,
        showModal: false,

    }

    toogleModal = () => {
        this.setState(({ showModal }) => ({
        showModal: !showModal,
        }));
    };

    onOpenModal = (largeImageURL = '') => {
        this.setState({ largeImageURL });
        this.toogleModal();
    };
  
    handleSearchSubmit = query => {
        this.setState({searchQuery: query, currentPage: 1, hits: [], error: null});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
        this.fetchHits();
        }
    }

    onChangeQuery = query => {
        this.setState({
        searchQuery: query,
        currentPage: 1,
        articles: [],
        error: null,
        });
    };

    // fetchHits = () => {
    //     const { currentPage, searchQuery } = this.state;
    //     const options = { searchQuery, currentPage };

    //     this.setState({ isLoading: true });

    //    searchApi
    //     .fetchHits(options)
    //     .then(hits => {
    //         this.setState(prevState => ({
    //         hits: [...prevState.hits, ...hits],
    //         currentPage: prevState.currentPage + 1,
    //         }));
    //     })
    //     .catch(error => this.setState({ error }))
    //     .finally(() => this.setState({ isLoading: false }));
    // };
    fetchHits = () => {
    const { searchQuery, currentPage } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    searchApi(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: 'Sorry! Picture not found. Please try again later!!!' }))
      .finally(() => this.setState({ isLoading: false }));

  }

    render() {
        const { hits } = this.state;
        return (
            // <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
             <>   
                <Searchbar onSubmit={this.handleSearchSubmit} />
                <ImageGallery hits={hits}  onOpenModal={this.onOpenModal} />
             {/* </div> */}
            </>
        )
    }
}

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.pokemonName !== this.props.pokemonName) {
    //         // console.log('prevProps.imageGalleryItem', prevProps.pokemonName);
    //         // console.log('this.props.imageGalleryItem: ', this.props.pokemonName);
            
    //         this.setState({status: 'pending'})
    //         searchAPI.fetchIm(this.props.pokemonName)
    //             .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
    //             .catch(error=> this.setState({error, status: 'rejected'}))
    //     }
    // }