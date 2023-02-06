var Item = React.createClass({
  
  displayName: 'Item',

  propTypes: {
    removeText: React.PropTypes.string.isRequired,
    code: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    imgUrl: React.PropTypes.string.isRequired,
    stock: React.PropTypes.number.isRequired,
    itemClicked: React.PropTypes.func.isRequired,
    itemRemoved: React.PropTypes.func.isRequired,
    selectedItemCode: React.PropTypes.bool,
  },

  itemClicked: function(EO) {
    if (EO.target.classList.contains('remove')) {
      this.props.itemRemoved(EO.target.closest('.Item').dataset.code);
    } else {
      this.props.itemClicked(EO.target.closest('.Item').dataset.code);
    }
  },

  render: function() {

    return React.DOM.tr({
        className: 'Item' + (this.props.selectedItemCode ? ' active' : ''),
        'data-code': this.props.code,
        onClick: this.itemClicked,
      },
      React.DOM.td({className: 'Item__code'}, this.props.code),
      React.DOM.td({className: 'Item__title'}, this.props.title),
      React.DOM.td({className: 'Item__price'}, this.props.price),
      React.DOM.td({className: 'Item__img'},
        React.DOM.img({src: this.props.imgUrl, alt: this.props.title}, null)
      ),
      React.DOM.td({className: 'Item__stock'}, this.props.stock),
      React.DOM.td({className: 'Item__cotroll'}, 
        React.DOM.button({className: 'remove'}, this.props.removeText)
      ),
    );
  },
});