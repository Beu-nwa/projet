import React, { Component } from 'react';
import './DisplayDetailsFormationComp.css';
import { formations } from '../../../../datas/formations';

class DisplayDetailsFormationComp extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
       
        return (
            
                <React.Fragment>
                    <div>
                         <div className='cate'>{formations.category}  </div>
                    </div>
                </React.Fragment>

        );
    }
}

export default DisplayDetailsFormationComp;
