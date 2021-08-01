import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar'
import ImageGallery from "./components/ImageGallery";
import Button from './components/Button'
import Loader from './components/Loader'
import searchApi from './components/searchApi'
import Modal from './components/Modal'
import PropTypes from 'prop-types';


export default class App extends Component {
   static propTypes = {
        hits: PropTypes.array,
        searchQuery: PropTypes.string,
        currentPage: PropTypes.number,
        isLoading: PropTypes.bool,
        showModal: PropTypes.bool,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
        error: PropTypes.string,
  }
    state = {
        hits: [],
        searchQuery: '',
        currentPage: 1,
        isLoading: false,
        error: null,
        showModal: false,
        largeImageURL: '',
        tags: '',
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
        this.setState({
            searchQuery: query,
            currentPage: 1,
            hits: [],
            error: null,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
        this.fetchHits();
        }
        if (this.state.searchQuery !== 2 && prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
    }

    // onChangeQuery = query => {
    //     this.setState({
    //     searchQuery: query,
    //     currentPage: 1,
    //     articles: [],
    //     error: null,
    //     });
    // };

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
        const { hits, isLoading, showModal,largeImageURL,tags } = this.state;
        return (
             <>   
                <Searchbar onSubmit={this.handleSearchSubmit} />
                <ImageGallery hits={hits}  onOpenModal={this.onOpenModal} />
                
                {isLoading && <Loader />}

                {hits.length > 11 && !isLoading && (
                <Button onClick={this.fetchHits} />
                )}
          
                {showModal && (
                <Modal onClose = {this.onOpenModal}>
                <img src={largeImageURL} alt={tags} />
            {/* <button type="button" onClick={this.toogleModal}>Close</button> */}
                </Modal>
                    )   
                }
            </>
        )
    }
}