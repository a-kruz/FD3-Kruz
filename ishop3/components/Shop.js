import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Shop.css';

import Item from './Item';

class Shop extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    currency: PropTypes.string.isRequired,
    removeText: PropTypes.string.isRequired,
    listHead: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
    list: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
      }),
    ),
  };

  state = {
    selectedItemCode: null,
    list: this.props.list,
  };

  itemClicked = (code) => {
    // console.log('item code clicked: '+code);
    this.setState({selectedItemCode: code});
  };

  itemRemoved = (code) => {
    // console.log('item code REMOVED: '+code);
    this.setState({list: this.state.list.filter(i => i.code != code)});
  };

  render() {

    let shopListHead = this.props.listHead.map(item => 
      DOM.th({key: item.code}, item.title)
    );

    let shopList = this.state.list.map(item => 
      React.createElement(Item, {
        key: item.code,
        currency: this.props.currency,
        removeText: this.props.removeText,
        code: item.code,
        title: item.title,
        price: item.price + this.props.currency,
        url: item.url,
        stock: item.stock,
        itemClicked: this.itemClicked,
        itemRemoved: this.itemRemoved,
        isSelectedItem: (this.state.selectedItemCode == item.code) ? true : false,
      })
    );

    return DOM.div(
      {className: 'Shop'},
      DOM.h1({className: 'Shop__title'}, this.props.title),
      DOM.table({className: 'Shop__table'},
        DOM.thead({className: 'Shop__thead'}, 
          DOM.tr(null, shopListHead),
        ),
        DOM.tbody({className: 'Shop__tbody'}, shopList),
      ),
    );
  }
}

export default Shop;