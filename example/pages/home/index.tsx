import React, { Component, useState, useEffect } from 'react';
import "./index.less";
import { ReactFixedSticky, ReactTransformSticky } from '../../../src/index';


const Home: React.FC<any> = (props) => {

    return (
        <div style={{ height: '500px' }}>
            <ReactTransformSticky bounds={{top: 10, left: 20}}>
                <div className="boxs" style={{ display: 'inline-block', width: '500px', height: '100px', position: 'absolute', background: "red" }}>
                    sticky element
                    <div style={{ position: 'absolute', top: '30px' }} className="x1">111111111111</div>
                    <div style={{ position: 'absolute', top: '50px' }} className="x2">222222222222</div>
                </div>
            </ReactTransformSticky>
        </div>
    );
}

export default Home;