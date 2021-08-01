import { Component } from 'react';
import PropTypes from 'prop-types';
// import { ImSearch } from 'react-icon/im';

export default class Searchbar extends Component {
    static propTypes = {
        searchQuery: PropTypes.string,
    };
    
    state = {
        searchQuery: '',
    };

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            alert('Введите название картинки');
            return;
        } 
        this.props.onHandleSearchSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() {
        const { searchQuery } = this.state;
        return (
            <header className="Searchbar" >
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={this.handleChange}
                    />
                </form>
            </header>

        )
    }

}