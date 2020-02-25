import React, { useState } from 'react';
import * as firebase from 'firebase/app';
export const vyer = {
    meeting: 'MEETING',
    other: 'OTHER'
};
function MinKomponent() {
    const [vy, sättVy] = useState(vyer.meeting);
    return <React.Fragment>
      <Header />
      {vy === vyer.meeting ? <Meeting /> : <OtherView />}
      <div>Min komponent!</div>
    </React.Fragment>;
}
export default MinKomponent;
const esp = require('esprima');
let speed = 22;
if (speed > 25) {
    throw true;
} else if (speed < 10) {
    throw false;
} else {
    console.log('ingen aning');
}
function minApparat(input) {
    return input + ' apparat';
}