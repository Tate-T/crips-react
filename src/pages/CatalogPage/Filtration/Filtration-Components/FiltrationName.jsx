import { Component } from 'react';

export class FiltrName extends Component {

  state = {
    isOpen: true,
    className: this.props.className,
    filtrName: this.props.filtrName,
    closeClass: this.props.closeClass
  };


  closeClass = () => {
    this.setState({ isOpen: false });
    const form = document.querySelector(this.state.closeClass);
    form.classList.add('is-hidden');
  }

  openClass = () => {
    this.setState({ isOpen: true });
    const form = document.querySelector(this.state.closeClass);
    form.classList.remove('is-hidden');
  }

  render() {

    return (
      <div className={`catalog-filtration__filtr-name-${this.state.className}`}>
        <h2 className={`catalog-filtration__name-${this.state.className}`}>{this.state.filtrName}</h2>
        {this.state.isOpen ? (
          <p className="catalog-filtration__filtr-name-close" onClick={this.closeClass}>-</p>
        ) : (
          <p className="catalog-filtration__filtr-name-open" onClick={this.openClass}>+</p>
        )}
      </div>
    );
  }
};
