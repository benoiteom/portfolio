import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import shapes from '../styles/shapes.module.css'
import React from 'react';

var images = [
    "/bv/DSCF0078_s.JPG",
    "/bv/DSCF0081_s.JPG",
    "/bv/DSCF0084_s.JPG",
    "/bv/DSCF0085_s.JPG",
    "/bv/DSCF0086_s.JPG",
    "/bv/DSCF0093_s.JPG",
    "/bv/DSCF0106_s.JPG",
    "/bv/DSCF0120_s.JPG",
    "/bv/DSCF0124_s.JPG",
    "/bv/DSCF0125_s.JPG",
    "/bv/DSCF0127_s.JPG",
    "/bv/DSCF0146_s.JPG",
    "/bv/DSCF0149_s.JPG",
    "/bv/DSCF0152_s.JPG",
    "/bv/DSCF0153_s.JPG",
    "/bv/DSCF0156_s.JPG",
    "/bv/DSCF0167_s.JPG",
    "/bv/DSCF0184_s.JPG",
    "/bv/DSCF0187_s.JPG",
    "/bv/DSCF0194_s.JPG",
    "/bv/DSCF0221_s.JPG",
    "/bv/DSCF0227_s.JPG",
    "/bv/DSCF0228_s.JPG",
    "/bv/DSCF0231_s.JPG",
    "/bv/DSCF0232_s.JPG",
    "/bv/DSCF0241_s.JPG",
    "/bv/DSCF0245_s.JPG",
    "/bv/DSCF0258_s.JPG",
    "/bv/DSCF0262_s.JPG",
    "/bv/DSCF0267_s.JPG",
    "/bv/DSCF0269_s.JPG",
    "/bv/DSCF0282_s.JPG",
];

class Home extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}

	componentDidMount() {
		this.to_home();
        window.history.replaceState(null, "Benoit Ortalo-Magne", '/home');
	}

	componentWillUnmount() {

	}

	to_home() {
		if (window.screen.width > 500) {
			setTimeout(function () {
				document.getElementById('header0').style.top = '8vw';
				document.getElementById('header0').style.left = '10vw';
			}, 700);
			setTimeout(function () {
				document.getElementById('header1').style.top = '8vw';
				document.getElementById('header1').style.left = '20vw';
			}, 800);
			setTimeout(function () {
				document.getElementById('header2').style.top = '8vw';
				document.getElementById('header2').style.left = '30vw';
			}, 900);
			setTimeout(function () {
				document.getElementById('header3').style.top = '8vw';
				document.getElementById('header3').style.left = '40vw';
			}, 1000);
			setTimeout(function () {
				document.getElementById('portfolio0').style.top = '20vw';
				document.getElementById('portfolio0').style.left = '10vw';
			}, 1100);
			setTimeout(function () {
				document.getElementById('portfolio1').style.top = '20vw';
				document.getElementById('portfolio1').style.left = '18vw';
			}, 1200);
			setTimeout(function () {
				document.getElementById('sidebar0').style.top = '0vw';
				document.getElementById('sidebar0').style.left = '90vw';
				document.getElementById('sidebar0').style.height = '34vh';
			}, 1300);
			setTimeout(function () {
				document.getElementById('sidebar1').style.top = '0vw';
				document.getElementById('sidebar1').style.left = '80vw';
				document.getElementById('sidebar1').style.height = '34vh';
			}, 1400);
			setTimeout(function () {
				document.getElementById('sidebar2').style.top = '33vh';
				document.getElementById('sidebar2').style.left = '90vw';
				document.getElementById('sidebar2').style.height = '34vh';
			}, 1500);
			setTimeout(function () {
				document.getElementById('sidebar3').style.top = '33vh';
				document.getElementById('sidebar3').style.left = '80vw';
				document.getElementById('sidebar3').style.height = '34vh';
			}, 1600);
			setTimeout(function () {
				document.getElementById('sidebar4').style.top = '67vh';
				document.getElementById('sidebar4').style.left = '90vw';
				document.getElementById('sidebar4').style.height = '33vh';
			}, 1700);
			setTimeout(function () {
				document.getElementById('sidebar5').style.top = '67vh';
				document.getElementById('sidebar5').style.left = '80vw';
				document.getElementById('sidebar5').style.height = '33vh';
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
			setTimeout(function () {
				document.getElementById('header').style.opacity = '1';
				document.getElementById('portfolio').style.opacity = '1';
				document.getElementById('phototext1').style.opacity = '1';
				document.getElementById('phototext2').style.opacity = '1';
				document.getElementById('phototext3').style.opacity = '1';
				document.getElementById('photohover1').classList.add(styles.photo1);
				document.getElementById('photohover2').classList.add(styles.photo2);
				document.getElementById('menu').style.opacity = '1';
			}, 2700);
		} else {
			document.getElementById('photo0').style.opacity = '0';
			document.getElementById('photo1').style.opacity = '0';
			document.getElementById('photo2').style.opacity = '0';

			setTimeout(function () {
				document.getElementById('header0').style.top = '8vw';
				document.getElementById('header0').style.left = '10vw';
				document.getElementById('header0').style.width = '20vw';
				document.getElementById('header0').style.height = '20vw';
			}, 700);
			setTimeout(function () {
				document.getElementById('header1').style.top = '8vw';
				document.getElementById('header1').style.left = '30vw';
				document.getElementById('header1').style.width = '20vw';
				document.getElementById('header1').style.height = '20vw';
			}, 800);
			setTimeout(function () {
				document.getElementById('header2').style.top = '8vw';
				document.getElementById('header2').style.left = '50vw';
				document.getElementById('header2').style.width = '20vw';
				document.getElementById('header2').style.height = '20vw';
			}, 900);
			setTimeout(function () {
				document.getElementById('header3').style.top = '8vw';
				document.getElementById('header3').style.left = '70vw';
				document.getElementById('header3').style.width = '20vw';
				document.getElementById('header3').style.height = '20vw';
			}, 1000);
			setTimeout(function () {
				document.getElementById('portfolio0').style.top = '35vw';
				document.getElementById('portfolio0').style.left = '10vw';
				document.getElementById('portfolio0').style.width = '25vw';
				document.getElementById('portfolio0').style.height = '10vw';
			}, 1100);
			setTimeout(function () {
				document.getElementById('portfolio1').style.top = '35vw';
				document.getElementById('portfolio1').style.left = '30vw';
				document.getElementById('portfolio1').style.width = '25vw';
				document.getElementById('portfolio1').style.height = '10vw';
			}, 1200);
			// setTimeout(function () {
			// 	document.getElementById('sidebar0').style.top = '0vw';
			// 	document.getElementById('sidebar0').style.left = '90vw';
			// 	document.getElementById('sidebar0').style.height = '34vh';
			// }, 1300);
			// setTimeout(function () {
			// 	document.getElementById('sidebar1').style.top = '0vw';
			// 	document.getElementById('sidebar1').style.left = '80vw';
			// 	document.getElementById('sidebar1').style.height = '34vh';
			// }, 1400);
			// setTimeout(function () {
			// 	document.getElementById('sidebar2').style.top = '33vh';
			// 	document.getElementById('sidebar2').style.left = '90vw';
			// 	document.getElementById('sidebar2').style.height = '34vh';
			// }, 1500);
			// setTimeout(function () {
			// 	document.getElementById('sidebar3').style.top = '33vh';
			// 	document.getElementById('sidebar3').style.left = '80vw';
			// 	document.getElementById('sidebar3').style.height = '34vh';
			// }, 1600);
			// setTimeout(function () {
			// 	document.getElementById('sidebar4').style.top = '67vh';
			// 	document.getElementById('sidebar4').style.left = '90vw';
			// 	document.getElementById('sidebar4').style.height = '33vh';
			// }, 1700);
			// setTimeout(function () {
			// 	document.getElementById('sidebar5').style.top = '67vh';
			// 	document.getElementById('sidebar5').style.left = '80vw';
			// 	document.getElementById('sidebar5').style.height = '33vh';
			// }, 1800);
			// setTimeout(function () {
			// 	document.getElementById('photo0').style.top = '60vh';
			// 	document.getElementById('photo0').style.left = '10vw';
			// 	document.getElementById('photo0').style.width = '12vw';
			// 	document.getElementById('photo0').style.height = '12vw';
			// }, 1900);
			// setTimeout(function () {
			// 	document.getElementById('photo1').style.top = '60vh';
			// 	document.getElementById('photo1').style.left = '26vw';
			// 	document.getElementById('photo1').style.width = '12vw';
			// 	document.getElementById('photo1').style.height = '12vw';
			// }, 2000);
			setTimeout(function () {
				document.getElementById('mobile_rectangle').style.top = '53vw';
				document.getElementById('mobile_rectangle').style.left = '10vw';
				document.getElementById('mobile_rectangle').style.width = '80vw';
				document.getElementById('mobile_rectangle').style.height = 'calc(100vh - 53vw)';
			}, 1300);
			setTimeout(function () {
				document.getElementById('header').style.opacity = '1';
				document.getElementById('portfolio').style.opacity = '1';
				document.getElementById('mobile_text').style.opacity = '1';
				document.getElementById('mobile_cover').style.opacity = '1';
			}, 1900);
		}
	}

	to_gallery2(loc) {

		document.getElementById('header').style.opacity = '0';
		document.getElementById('photohover1').style.opacity = '0';
		document.getElementById('photohover2').style.opacity = '0';
		document.getElementById('portfolio').style.opacity = '0';
		document.getElementById('phototext1').style.opacity = '0';
		document.getElementById('phototext2').style.opacity = '0';
		document.getElementById('phototext3').style.opacity = '0';
		document.getElementById('menu').style.opacity = '0';

		setTimeout(() => {
			window.location.href = '/gallery/' + loc;
		}, 500);
	}

	about_me = () => {
        if (this.state.card == 'equipment') {
            document.getElementById('equipment').style.opacity = '0';

            setTimeout(() => {
                document.getElementById('about_me').style.opacity = '1';
            }, 500);
        } else {
            this.menu_open();

            setTimeout(() => {
                document.getElementById('about_me').style.opacity = '1';
            }, 1200);
        }
        this.setState({card: 'about'})
    }

	equipment = () => {
		if (this.state.card == 'about') {
            document.getElementById('about_me').style.opacity = '0';

            setTimeout(() => {
                document.getElementById('equipment').style.opacity = '1';
            }, 500);
        } else {
            this.menu_open();
            
            setTimeout(() => {
                document.getElementById('equipment').style.opacity = '1';
            }, 1200);
        }
        this.setState({card: 'equipment'})
	}

	menu_open = () => {
		document.getElementById('portfolio').style.opacity = '0';
		document.getElementById('photohover1').classList.remove(styles.photo1);
		document.getElementById('photohover2').classList.remove(styles.photo2);
		document.getElementById('phototext1').style.opacity = '0';
		document.getElementById('phototext2').style.opacity = '0';
		document.getElementById('phototext3').style.opacity = '0';

        setTimeout(() => {
			document.getElementById('header').style.top = '20vh';
            document.getElementById('header0').style.top = '20vh';
            document.getElementById('header0').style.left = '10vw';
            document.getElementById('header1').style.top = '20vh';
            document.getElementById('header1').style.left = '20vw';
            document.getElementById('header2').style.top = '20vh';
            document.getElementById('header2').style.left = '30vw';
            document.getElementById('header3').style.top = '20vh';
            document.getElementById('header3').style.left = '40vw';
            document.getElementById('photo0').style.top = 'calc(20vh + 10vw)';
            document.getElementById('photo0').style.left = '10vw';
            document.getElementById('photo0').style.width = '15vw';
            document.getElementById('photo0').style.height = '20vw';
            document.getElementById('photo1').style.top = 'calc(20vh + 10vw)';
            document.getElementById('photo1').style.left = '25vw';
            document.getElementById('photo1').style.width = '15vw';
            document.getElementById('photo1').style.height = '20vw';
            document.getElementById('photo2').style.top = 'calc(20vh + 10vw)';
            document.getElementById('photo2').style.left = '40vw';
            document.getElementById('photo2').style.width = '15vw';
            document.getElementById('photo2').style.height = '20vw';
        }, 500)
		
	}

    menu_close = () => {
        document.getElementById('about_me').style.opacity = '0';
        document.getElementById('equipment').style.opacity = '0';

        setTimeout(() => {
			document.getElementById('header').style.top = '8vw';
            document.getElementById('header0').style.top = '8vw';
            document.getElementById('header0').style.left = '10vw';
            document.getElementById('header1').style.top = '8vw';
            document.getElementById('header1').style.left = '20vw';
            document.getElementById('header2').style.top = '8vw';
            document.getElementById('header2').style.left = '30vw';
            document.getElementById('header3').style.top = '8vw';
            document.getElementById('header3').style.left = '40vw';
            document.getElementById('photo0').style.top = '60vh';
            document.getElementById('photo0').style.left = '10vw';
            document.getElementById('photo0').style.width = '12vw';
            document.getElementById('photo0').style.height = '12vw';
            document.getElementById('photo1').style.top = '60vh';
            document.getElementById('photo1').style.left = '26vw';
            document.getElementById('photo1').style.width = '12vw';
            document.getElementById('photo1').style.height = '12vw';
            document.getElementById('photo2').style.top = '60vh';
            document.getElementById('photo2').style.left = '42vw';
            document.getElementById('photo2').style.width = '12vw';
            document.getElementById('photo2').style.height = '12vw';
        }, 500)

        setTimeout(() => {
            document.getElementById('portfolio').style.opacity = '1';
            document.getElementById('phototext1').style.opacity = '1';
            document.getElementById('phototext2').style.opacity = '1';
            document.getElementById('phototext3').style.opacity = '1';
            document.getElementById('photohover1').classList.add(styles.photo1);
            document.getElementById('photohover2').classList.add(styles.photo2);
        }, 1200)
		
        this.setState({card: ''})
	}

	render() {
		return (
			<div>
				<Head>
					<title>Benoit Ortalo-Magne</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<div>
						<div>
							<div id="header0" className={shapes.box} />
							<div id="header1" className={shapes.box} />
							<div id="header2" className={shapes.box} />
							<div id="header3" className={shapes.box} />
							<h1 id="header" className={styles.header}>Beno&icirc;t Ortalo-Magn&eacute;</h1>
						</div>
						<div>
							<div id="portfolio0" className={shapes.rhombus} />
							<div id="portfolio1" className={shapes.rhombus} />
							<h2 id="portfolio" className={styles.portfolio}><i>portfolio</i></h2>
						</div>
						<div>
							<div id="sidebar0" className={shapes.rectangle} />
							<div id="sidebar1" className={shapes.rectangle} />
							<div id="sidebar2" className={shapes.rectangle} />
							<div id="sidebar3" className={shapes.rectangle} />
							<div id="sidebar4" className={shapes.rectangle} />
							<div id="sidebar5" className={shapes.rectangle} />
							<div id="menu" className={styles.menu}>
                                <p onClick={this.about_me} style={{ top: '8vw' }}>About Me</p>
								<p onClick={this.equipment} style={{ top: '20vw' }}>Equipment</p>
							</div>
						</div>
						<div>
							<div onClick={() => this.to_gallery2('buena-vista')} id="photo0" className={shapes.photobox}>
								<p id="phototext1">Buena Vista</p>
								<div id="photohover1" className={shapes.photobox_hover} />
							</div>
							<div onClick={() => this.to_gallery2('crested-butte')} id="photo1" className={shapes.photobox}>
								<p id="phototext2">Crested Butte</p>
								<div id="photohover2" className={shapes.photobox_hover} />
							</div>
							<div id="photo2" className={shapes.photobox}>
								<p id="phototext3"><i>Coming Soon</i></p>
							</div>

						</div>
					</div>
                    <div id="about_me" className={styles.card}>
                        <p onClick={this.menu_close} className={styles.close}><b>close</b></p>
                        <p style={{color: 'white'}}>Hello! I'm Benoit</p>
                        <p style={{color: 'white'}}>I am a software engineer who enjoys taking pictures and making websites in my free time. 
                        You can find me on Instagram at <i>"coming soon"</i> or email me at "bortalomagne@gmail.com". 
                        Thanks for checking out my website!</p>
                    </div>
                    <div id="equipment" className={styles.card}>
                        <p onClick={this.menu_close} className={styles.close}><b>close</b></p>
                        <p style={{color: 'white'}}>What I use</p>
                        <p style={{color: 'white'}}>I have a Fujifilm X-T3 for most of my shots but also pilot a DJI fpv drone to capture 
                        videos and images from the air.</p>
                    </div>
					<div id="mobile_cover" style={{backgroundColor: 'black', opacity: 0, height: '15px', width: '80vw', position: 'absolute', top: '53vw', left: '10vw', zIndex: 50}} />
					<div id="mobile_rectangle" className={shapes.mobile_rectangle} style={{overflow: 'scroll', paddingTop: '10px'}}>
						<div id="mobile_text">
							<p style={{marginTop: '25px'}}><b>Lastest Gallery</b></p>
							<p>Please use a laptop to access the full site</p>
							{ images.map((image, i) => {
								return <img src={image} key={i} style={{width: '80%', margin: '15px 10%'}} />
							})}
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default Home;
