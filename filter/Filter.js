var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                line: React.PropTypes.string.isRequired,
            })
        ),
        btnTitle: React.PropTypes.string.isRequired,
    },

    getInitialState: function() {
        return {
            alphabetSorting: false,
            inputFilter: '',
            defaultList: this.props.list,
            filteredList: this.props.list,
        };
    },

    alphabetSorted: function (EO) {
        // console.log(EO.target.checked);
        this.setState({alphabetSorting: EO.target.checked});
    },

    inputFiltered: function (EO) {
        // console.log(EO.target.value);
        // Filtering:
        this.setState({
            inputFilter: EO.target.value,
            filteredList: this.state.defaultList.filter(item => 
                (item.line.indexOf(EO.target.value) !== -1)
            ),
        });
    },

    filtersCleaned: function (EO) {
        // console.log('cleaning..');
        this.setState({
            alphabetSorting: false,
            inputFilter: '',
            filteredList: this.state.defaultList,
        });
    },

    render: function() {
        
        // console.log('rendering...');
        
        // Sorting:
        var sortedList = [...this.state.filteredList];

        if (this.state.alphabetSorting) {
            // console.log('sorting..');
            sortedList.sort(function(a, b) {
                if (a.line < b.line) return -1;
                if (a.line > b.line) return 1;
                return 0;
            });
        }

        var list = sortedList.map(item => 
            React.DOM.li({key: item.code}, item.line)
        );

        return React.DOM.div({className: 'Filter'},
            React.DOM.div({className: 'Filter__top'},
                React.DOM.input({
                    type: 'checkbox',
                    checked: this.state.alphabetSorting,
                    onClick: this.alphabetSorted,
                }),
                React.DOM.input({
                    type: 'text',
                    value: this.state.inputFilter,
                    onChange: this.inputFiltered,
                }),
                React.DOM.button({
                    onClick: this.filtersCleaned,
                }, this.props.btnTitle),
            ),
            React.DOM.ul({className: 'Filter__list'}, list),
        );
    }
});