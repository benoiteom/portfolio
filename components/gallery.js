import Head from 'next/head'
import styles from '../styles/index.module.css'
import shapes from '../styles/shapes.module.css'
import gallery from '../styles/gallery.module.css'
import React from 'react';

class Gallery extends React.Component {

    constructor() {
        super();
        this.state = {
            images: [],
            images_s: [],
            index: 0
        }
    }

    componentDidMount() {

        let images_s = []
        for (let image of this.props.images) {
            images_s.push(image.split(".")[0] + "_s." + image.split(".")[1]);
        }
        this.setState({images: this.props.images, images_s: images_s})

        this.to_gallery();

        var self = this;
        document.body.addEventListener('keydown', (e) => {
            if (e.key == "Escape") {
                self.close_image();
            }
          });
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown');
    }

    to_home() {

        document.getElementById('portfolio').style.opacity = 0;
        document.getElementById('gallery').style.opacity = 0;
        document.getElementById('banner').style.opacity = 0;
        document.getElementById('back').style.opacity = 0;
        
        setTimeout(function () {
            document.getElementById('header0').style.top = '8vw';
            document.getElementById('header0').style.left = '10vw';
            document.getElementById('header0').style.height = '10vw';
            document.getElementById('header0').style.width = '10vw';
        }, 700);
        setTimeout(function () {
            document.getElementById('header1').style.top = '8vw';
            document.getElementById('header1').style.left = '20vw';
            document.getElementById('header1').style.height = '10vw';
            document.getElementById('header1').style.width = '10vw';
        }, 800);
        setTimeout(function () {
            document.getElementById('header2').style.top = '8vw';
            document.getElementById('header2').style.left = '30vw';
            document.getElementById('header2').style.height = '10vw';
            document.getElementById('header2').style.width = '10vw';
        }, 900);
        setTimeout(function () {
            document.getElementById('header3').style.top = '8vw';
            document.getElementById('header3').style.left = '40vw';
            document.getElementById('header3').style.height = '10vw';
            document.getElementById('header3').style.width = '10vw';
        }, 1000);
        setTimeout(function () {
            document.getElementById('portfolio0').style.top = '20vw';
            document.getElementById('portfolio0').style.left = '10vw';
            document.getElementById('portfolio0').style.height = '5vw';
            document.getElementById('portfolio0').style.width = '10vw';
            document.getElementById('portfolio0').style.backgroundColor = 'black';
        }, 1100);
        setTimeout(function () {
            document.getElementById('portfolio1').style.top = '20vw';
            document.getElementById('portfolio1').style.left = '18vw';
            document.getElementById('portfolio1').style.height = '5vw';
            document.getElementById('portfolio1').style.width = '10vw';
            document.getElementById('portfolio1').style.backgroundColor = 'black';
        }, 1200);
        setTimeout(function () {
            document.getElementById('sidebar0').style.top = '0vw';
            document.getElementById('sidebar0').style.left = '90vw';
            document.getElementById('sidebar0').style.height = '34vh';
            document.getElementById('sidebar0').style.width = '10vw';
        }, 1300);
        setTimeout(function () {
            document.getElementById('sidebar1').style.top = '0vw';
            document.getElementById('sidebar1').style.left = '80vw';
            document.getElementById('sidebar1').style.height = '34vh';
            document.getElementById('sidebar1').style.width = '10vw';
        }, 1400);
        setTimeout(function () {
            document.getElementById('sidebar2').style.top = '33vh';
            document.getElementById('sidebar2').style.left = '90vw';
            document.getElementById('sidebar2').style.height = '34vh';
            document.getElementById('sidebar2').style.width = '10vw';
        }, 1500);
        setTimeout(function () {
            document.getElementById('sidebar3').style.top = '33vh';
            document.getElementById('sidebar3').style.left = '80vw';
            document.getElementById('sidebar3').style.height = '34vh';
            document.getElementById('sidebar3').style.width = '10vw';
        }, 1600);
        setTimeout(function () {
            document.getElementById('sidebar4').style.top = '67vh';
            document.getElementById('sidebar4').style.left = '90vw';
            document.getElementById('sidebar4').style.height = '33vh';
            document.getElementById('sidebar4').style.width = '10vw';
        }, 1700);
        setTimeout(function () {
            document.getElementById('sidebar5').style.top = '67vh';
            document.getElementById('sidebar5').style.left = '80vw';
            document.getElementById('sidebar5').style.height = '33vh';
            document.getElementById('sidebar5').style.width = '10vw';
        }, 1800);
        setTimeout(function () {
            document.getElementById('photo0').style.top = '60vh';
            document.getElementById('photo0').style.left = '10vw';
            document.getElementById('photo0').style.width = '12vw';
            document.getElementById('photo0').style.height = '12vw';
        }, 1900);
        setTimeout(function () {
            document.getElementById('photo1').style.top = '60vh';
            document.getElementById('photo1').style.left = '26vw';
            document.getElementById('photo1').style.width = '12vw';
            document.getElementById('photo1').style.height = '12vw';
        }, 2000);
        setTimeout(function () {
            document.getElementById('photo2').style.top = '60vh';
            document.getElementById('photo2').style.left = '42vw';
            document.getElementById('photo2').style.width = '12vw';
            document.getElementById('photo2').style.height = '12vw';
        }, 2100);

        // setTimeout(function () {
        //     document.getElementById('header').style.opacity = '1';
        //     document.getElementById('portfolio').style.opacity = '1';
        //     document.getElementById('phototext1').style.opacity = '1';
        //     document.getElementById('phototext2').style.opacity = '1';
        //     document.getElementById('phototext3').style.opacity = '1';
        //     document.getElementById('menu').style.opacity = '1';
        // }, 2700);
    }

    to_gallery = () => {

        // document.getElementById('header').style.opacity = '0';
        // document.getElementById('portfolio').style.opacity = '0';
        // document.getElementById('phototext1').style.opacity = '0';
        // document.getElementById('phototext2').style.opacity = '0';
        // document.getElementById('phototext3').style.opacity = '0';
        // document.getElementById('menu').style.opacity = '0';

        setTimeout(function () {
            document.getElementById('header0').style.top = '0';
            document.getElementById('header0').style.left = '0';
            document.getElementById('header0').style.height = '30vh';
            document.getElementById('header0').style.width = '15vw';
        }, 0);
        setTimeout(function () {
            document.getElementById('header1').style.top = '0';
            document.getElementById('header1').style.left = '15vw';
            document.getElementById('header1').style.height = '30vh';
            document.getElementById('header1').style.width = '15vw';
        }, 100);
        setTimeout(function () {
            document.getElementById('header2').style.top = '0';
            document.getElementById('header2').style.left = '30vw';
            document.getElementById('header2').style.height = '30vh';
            document.getElementById('header2').style.width = '15vw';
        }, 200);
        setTimeout(function () {
            document.getElementById('header3').style.top = '0';
            document.getElementById('header3').style.left = '45vw';
            document.getElementById('header3').style.height = '30vh';
            document.getElementById('header3').style.width = '15vw';
        }, 300);
        setTimeout(function () {
            document.getElementById('portfolio0').style.top = '5vh';
            document.getElementById('portfolio0').style.left = '4vw';
            document.getElementById('portfolio0').style.width = '20vw';
            document.getElementById('portfolio0').style.backgroundColor = 'white';
        }, 400);
        setTimeout(function () {
            document.getElementById('portfolio1').style.top = '5vh';
            document.getElementById('portfolio1').style.left = '20vw';
            document.getElementById('portfolio1').style.width = '20vw';
            document.getElementById('portfolio1').style.backgroundColor = 'white';
        }, 500);
        setTimeout(function () {
            document.getElementById('sidebar0').style.top = '0';
            document.getElementById('sidebar0').style.left = '60vw';
            document.getElementById('sidebar0').style.height = '34vh';
            document.getElementById('sidebar0').style.width = '20vw';
        }, 600);
        setTimeout(function () {
            document.getElementById('sidebar1').style.top = '0';
            document.getElementById('sidebar1').style.left = '80vw';
            document.getElementById('sidebar1').style.height = '34vh';
            document.getElementById('sidebar1').style.width = '20vw';
        }, 700);
        setTimeout(function () {
            document.getElementById('sidebar2').style.top = '34vh';
            document.getElementById('sidebar2').style.left = '60vw';
            document.getElementById('sidebar2').style.height = '33vh';
            document.getElementById('sidebar2').style.width = '20vw';
        }, 800);
        setTimeout(function () {
            document.getElementById('sidebar3').style.top = '34vh';
            document.getElementById('sidebar3').style.left = '80vw';
            document.getElementById('sidebar3').style.height = '33vh';
            document.getElementById('sidebar3').style.width = '20vw';
        }, 900);
        setTimeout(function () {
            document.getElementById('sidebar4').style.top = '67vh';
            document.getElementById('sidebar4').style.left = '60vw';
            document.getElementById('sidebar4').style.height = '33vh';
            document.getElementById('sidebar4').style.width = '20vw';
        }, 1000);
        setTimeout(function () {
            document.getElementById('sidebar5').style.top = '67vh';
            document.getElementById('sidebar5').style.left = '80vw';
            document.getElementById('sidebar5').style.height = '33vh';
            document.getElementById('sidebar5').style.width = '20vw';
        }, 1100);
        setTimeout(function () {
            document.getElementById('photo0').style.top = '30vh';
            document.getElementById('photo0').style.left = '0';
            document.getElementById('photo0').style.width = '20vw';
            document.getElementById('photo0').style.height = '70vh';
        }, 1200);
        setTimeout(function () {
            document.getElementById('photo1').style.top = '30vh';
            document.getElementById('photo1').style.left = '20vw';
            document.getElementById('photo1').style.width = '20vw';
            document.getElementById('photo1').style.height = '70vh';
        }, 1300);
        setTimeout(function () {
            document.getElementById('photo2').style.top = '30vh';
            document.getElementById('photo2').style.left = '40vw';
            document.getElementById('photo2').style.width = '20vw';
            document.getElementById('photo2').style.height = '70vh';
        }, 1400);
        setTimeout(function () {
            document.getElementById('portfolio').style.opacity = 1;
            document.getElementById('gallery').style.opacity = 1;
            document.getElementById('banner').style.opacity = 1;
            document.getElementById('back').style.opacity = 1;
        }, 2100);

    }

    show_image = (i) => {
        let img = document.getElementById("image_show");
        let x = document.getElementById("image_close");
        let left = document.getElementById("image_left");
        let right = document.getElementById("image_right");
        let background = document.getElementById("image_background");
        let path = this.state.images[i];

        background.style.zIndex = '25';
        background.style.backgroundColor = 'rgba(2, 2, 2, .5)';

        this.setState({show_image: path, index: i});
        setTimeout(function () {
            img.style.opacity = 1;
            x.style.opacity = 1;
            left.style.opacity = 1;
            right.style.opacity = 1;
        }, 100)
    }

    close_image = () => {
        let img = document.getElementById("image_show");
        let x = document.getElementById("image_close");
        let left = document.getElementById("image_left");
        let right = document.getElementById("image_right");
        let background = document.getElementById("image_background");

        background.style.zIndex = '1';
        background.style.backgroundColor = 'rgba(2, 2, 2, 0)';

        this.setState({ show_image: null, index: 0})
        setTimeout(function () {
            img.style.opacity = 0;
            x.style.opacity = 0;
            left.style.opacity = 0;
            right.style.opacity = 0;
        }, 100)
    }

    show_left = () => {
        let i = this.state.index > 0 ? this.state.index - 1 : this.state.images.length - 1;
        this.setState({ show_image: this.state.images[i], index: i});
    }

    show_right = () => {
        let i = this.state.index < this.state.images.length - 1 ? this.state.index + 1 : 0;
        this.setState({ show_image: this.state.images[i], index: i});
    }

    back = () => {
        this.to_home();
        setTimeout(() => {
			window.location.href = '/home';
		}, 2600);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Gallery</title>
                    <meta name="description" content="View pictures I took from recent trips and outings" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main} style={{overflowX: 'hidden'}}>
                    <div>
                        <div>
                            <div id="header0" className={shapes.box + " " + gallery.header0} />
                            <div id="header1" className={shapes.box + " " + gallery.header1} />
                            <div id="header2" className={shapes.box + " " + gallery.header2} />
                            <div id="header3" className={shapes.box + " " + gallery.header3} />
                        </div>
                        { this.props.title != "none" ?
                        <div>
                            <div id="portfolio0" className={shapes.rhombus + " " + gallery.portfolio0} />
                            <div id="portfolio1" className={shapes.rhombus + " " + gallery.portfolio1} />
                            <h2 id="portfolio" className={gallery.portfolio}><i>{this.props.title}</i></h2>
                            <h2 id="back" onClick={this.back} className={gallery.back}><b>back</b></h2>
                        </div>
                        : null }
                        <div>
                            <div id="sidebar0" className={shapes.rectangle + " " + gallery.sidebar0} />
                            <div id="sidebar1" className={shapes.rectangle + " " + gallery.sidebar1} />
                            <div id="sidebar2" className={shapes.rectangle + " " + gallery.sidebar2} />
                            <div id="sidebar3" className={shapes.rectangle + " " + gallery.sidebar3} />
                            <div id="sidebar4" className={shapes.rectangle + " " + gallery.sidebar4} />
                            <div id="sidebar5" className={shapes.rectangle + " " + gallery.sidebar5} />
                        </div>
                        <div>
                            <div onClick={this.to_gallery} id="photo0" className={shapes.photobox + " " + gallery.photo0}>
                                <div />
                            </div>
                            <div id="photo1" className={shapes.photobox + " " + gallery.photo1}>
                                <div />
                            </div>
                            <div id="photo2" className={shapes.photobox + " " + gallery.photo2}>
                            </div>
                        </div>
                    </div>
                    { this.props.title != "none" ?
                    <div id="banner" style={{height: 'calc(5vh + 3vw)', width: '100%', backgroundColor: 'black', position: 'absolute', top: 0, left: 0, zIndex: 9, opacity: 0}} />
                    : null }
                    <div id="gallery" style={{margin: '120px 0', position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', padding: '0 70px', opacity: 0, transition: '.5s all'}}>
                        {this.state.images_s.map((img, index) => {
                            return (
                                <div onClick={() => this.show_image(index)} key={index} className={gallery.image}>
                                    <img src={img} id={index} style={{minWidth: '100%', maxHeight: '100%', objectFit: 'cover', verticalAlign: 'bottom'}} />
                                </div>
                            )
                        })}
                        <div style={{flexGrow: '10'}}></div>
                    </div>
                    <div>
                        <div id="image_background" onClick={this.close_image} style={{position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: 'rgba(2, 2, 2, 0)', transition: '1s all'}}></div>
                        <p id="image_close" className={gallery.x} onClick={this.close_image}><b>x</b></p>
                        <p id="image_left" onClick={this.show_left} className={gallery.left}>&larr;</p>
                        <p id="image_right" onClick={this.show_right} className={gallery.right}>&rarr;</p>
                        <img id="image_show" src={this.state.show_image} className={gallery.show_image} />
                    </div>
                </main>
            </div>
        )
    }
}

export default Gallery;
