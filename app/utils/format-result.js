import compose from './compose';

import React from 'react';

import Line from 'components/line';

import cuid from 'cuid';

function split(result){
    return result.split('\n');
}

function format(resultArr){
    return resultArr.map((text) => <Line text={text} key={cuid()}/>);
}

export default compose(format, split);