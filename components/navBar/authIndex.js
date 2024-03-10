import React from 'react';

import navAuth from './navAuth';
import navBarBot from './Bot/navBarBot';

export default function authIndex() {
    // const {user} = ... auth function

    return user ? <navBarBot /> : <navAuth />;
}