import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Item.css';

class Item extends React.Component {

  static propTypes = {
    removeText: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    itemClicked: PropTypes.func.isRequired,
    itemRemoved: PropTypes.func.isRequired,
    isSelectedItem: PropTypes.bool,
  };

  itemRemoved = (EO) => {
    this.props.itemRemoved(this.props.code);
    EO.stopPropagation();
  };

  itemClicked = (EO) => {
    this.props.itemClicked(this.props.code);
  };

  render() {

    return DOM.tr({
        className: 'Item' + (this.props.isSelectedItem ? ' active' : ''),
        onClick: this.itemClicked,
      },
      DOM.td({className: 'Item__title'}, this.props.title),
      DOM.td({className: 'Item__price'}, this.props.price),
      DOM.td({className: 'Item__img'}, this.props.url),
      DOM.td({className: 'Item__stock'}, this.props.stock),
      DOM.td({className: 'Item__controll'}, 
        DOM.button({
          className: 'remove',
          onClick: this.itemRemoved,
        }, this.props.removeText)
      ),
    );
  };
}

export default Item;