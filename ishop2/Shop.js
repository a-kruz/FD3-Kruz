var Shop = React.createClass({
  
  displayName: 'Shop',

  propTypes: {
    title: React.PropTypes.string,
    currency: React.PropTypes.string.isRequired,
    removeText: React.PropTypes.string.isRequired,
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

  getInitialState: function() {
    return {
      selectedItemCode: null,
      list: this.props.list,
    };
  },

  itemClicked: function(code) {
    // console.log('item code clicked: '+code);
    this.setState({selectedItemCode: code});
  },

  itemRemoved: function(code) {
    // console.log('item code REMOVED: '+code);
    this.setState({list: this.state.list.filter(i => i.code != code)});
  },

  render: function() {

    var shopListHead = this.props.listHead.map(item => 
      React.DOM.th({key: item.code}, item.title)
    );

    var shopList = this.state.list.map(item => 
      React.createElement(Item, {
        key: item.code,
        currency: this.props.currency,
        removeText: this.props.removeText,
        code: item.code,
        title: item.title,
        price: item.price + this.props.currency,
        imgUrl: item.imgUrl,
        stock: item.stock,
        itemClicked: this.itemClicked,
        itemRemoved: this.itemRemoved,
        selectedItemCode: (this.state.selectedItemCode == item.code) ? true : false,
      })
    );

    return React.DOM.div(
      {className: 'Shop'},
      React.DOM.h1({className: 'Shop__title'}, this.props.title),
      React.DOM.table({className: 'Shop__table'},
        React.DOM.thead({className: 'Shop__thead'}, 
          React.DOM.tr(null, shopListHead),
        ),
        React.DOM.tbody({className: 'Shop__tbody'}, shopList),
      ),
    );
  }
});