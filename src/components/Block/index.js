import React, { Component } from 'react';
import Block from 'react-blocks';

class Blocks extends Component {
    render() {
        return (
            <div>
                <Block layout>
                    <div>Alpha</div>
                    <div>Beta</div>
                </Block>
            </div>
        );
    }
}

export default Blocks;