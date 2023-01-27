var Products = React.createClass({
    
  displayName: 'Products',

  propTypes: {
    title: React.PropTypes.string,
    currency: React.PropTypes.string.isRequired,
    listHead: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
      }),
    ),
    list: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        imgUrl: React.PropTypes.string.isRequired,
        stock: React.PropTypes.number.isRequired,
      }),
    ),
  },

  render: function() {

    var productsListHead = this.props.listHead.map(item => 
      React.DOM.th({key: item.code}, item.title)
    );

    var productsList = this.props.list.map(item => 
      React.DOM.tr({key: item.code, className: 'Products__item'},
        React.DOM.td({className: 'Products__item-code'}, item.code),
        React.DOM.td({className: 'Products__item-title'}, item.title),
        React.DOM.td({className: 'Products__item-price'}, item.price+this.props.currency),
        React.DOM.td({className: 'Products__item-img'},
          React.DOM.img({src: item.imgUrl, alt: item.title}, null)
        ),
        React.DOM.td({className: 'Products__item-stock'}, item.stock),
      )
    );

    return React.DOM.div(
      {className: 'Products'},
      React.DOM.h1({className: 'Products__title'}, this.props.title),
      React.DOM.table({className: 'Products__table'},
        React.DOM.thead({className: 'Products__thead'}, 
          React.DOM.tr(null, productsListHead),
        ),
        React.DOM.tbody({className: 'Products__tbody'}, productsList),
      ),
    );
  }
});