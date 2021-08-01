
import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar'
// import ImageGalleryItem from './components/ImageGalleryItem'
import All from './components/All'

export default class App extends Component {
   
    state = {
        pokemonName: ''
    }
    handleSearchSubmit = pokemonName => {
        this.setState({pokemonName});
    }

    render() {
        const { pokemonName } = this.state;
        return (
            <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
                <All pokemonName={pokemonName}/>
                <Searchbar onHandleSearchSubmit={this.handleSearchSubmit} />
            </div>
        )
    }
}
