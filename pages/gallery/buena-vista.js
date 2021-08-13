import Gallery from '../../components/gallery';
import React from 'react';

var images = [
    "/bv/DSCF0078.JPG",
    "/bv/DSCF0081.JPG",
    "/bv/DSCF0084.JPG",
    "/bv/DSCF0085.JPG",
    "/bv/DSCF0086.JPG",
    "/bv/DSCF0093.JPG",
    "/bv/DSCF0106.JPG",
    "/bv/DSCF0120.JPG",
    "/bv/DSCF0124.JPG",
    "/bv/DSCF0125.JPG",
    "/bv/DSCF0127.JPG",
    "/bv/DSCF0146.JPG",
    "/bv/DSCF0149.JPG",
    "/bv/DSCF0152.JPG",
    "/bv/DSCF0153.JPG",
    "/bv/DSCF0156.JPG",
    "/bv/DSCF0167.JPG",
    "/bv/DSCF0184.JPG",
    "/bv/DSCF0187.JPG",
    "/bv/DSCF0194.JPG",
    "/bv/DSCF0221.JPG",
    "/bv/DSCF0227.JPG",
    "/bv/DSCF0228.JPG",
    "/bv/DSCF0231.JPG",
    "/bv/DSCF0232.JPG",
    "/bv/DSCF0241.JPG",
    "/bv/DSCF0245.JPG",
    "/bv/DSCF0258.JPG",
    "/bv/DSCF0262.JPG",
    "/bv/DSCF0267.JPG",
    "/bv/DSCF0269.JPG",
    "/bv/DSCF0282.JPG",
]

class BV extends React.Component {

    render() {
        return <Gallery title="Buena Vista, CO" images={images} />
    }
}

export default BV;
