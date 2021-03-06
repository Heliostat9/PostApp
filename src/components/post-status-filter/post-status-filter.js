import React, {Component} from 'react'


import {Button} from 'reactstrap';

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ];
    }

    render() {
        const {filter, onFilterSelect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name ? 'btn-info' : 'btn-secondary';
            return (
                <button 
                    type="button" 
                    className={`btn  ${active}`} 
                    key={name}
                    onClick={() => onFilterSelect(name)}>{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

