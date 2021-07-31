import { Component } from 'react';
// import { ImSearch } from 'react-icon/im';

export default class CardPix extends Component {
    state = {
        pokemonName: '',
    };

    hadnleNameChange = e => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            alert('Введите имя покемона');
            return;
        } 
        this.props.onHandleSearchSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.hadnleNameChange}
                />
                <button type="submit">
                    {/* <ImSearch /> */}
                    Найти
                </button>
            </form>
        )
    }

}