import { Component } from 'react';
import PropTypes from 'prop-types';
// import { ImSearch } from 'react-icon/im';

export default class Searchbar extends Component {
    static propTypes = {
        query: PropTypes.string,
    };
    
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            alert('Введите название картинки');
            return;
        } 
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        const { query } = this.state;
        return (
            <header className="Searchbar" >
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}