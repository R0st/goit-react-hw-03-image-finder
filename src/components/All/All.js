import { Component } from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import Loader from '../Loader'
import searchAPI from '../searchApi'

export default class All extends Component {

    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            // console.log('prevProps.imageGalleryItem', prevProps.pokemonName);
            // console.log('this.props.imageGalleryItem: ', this.props.pokemonName);
            
            this.setState({status: 'pending'})
            searchAPI.fetchIm(this.props.pokemonName)
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error=> this.setState({error, status: 'rejected'}))
        }
    }

    render() {
        
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
            return <div>Введите корректное название</div>
        }
        if (status === 'pending') {
            return <Loader pokemonName={ pokemonName}/>
        }
        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }
        if (status === 'resolved') {
            return <ImageGalleryItem pokemon={pokemon}/>
        }
    }
}