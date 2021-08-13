import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            timer: null,
            map: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            document: null
        }


        // const section = document.querySelector('main');

        // let currentPos = window.pageYOffset;

        // const update = () => {
        // 	const newPos = window.pageYOffset;
        // 	const diff = newPos - currentPos;
        // 	const speed = diff * 0.35;

        // 	// section.style.transform = `skewY(${speed}deg)`;
        // 	this.setState({ skew: 'transform: skewY(' + speed + 'deg)' });

        // 	currentPos = newPos;

        // 	requestAnimationFrame(update);
        // }

        // update();
    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);
        // this.setState({ document: document });
        this.smoothMouse();
        // document.addEventListener("DOMContentLoaded", this.isCardVisible);
        // window.addEventListener("scroll", this.isCardVisible);
        // window.addEventListener("resize", this.isCardVisible);


        // const section = document.querySelector('main');

        // let currentPos = window.pageYOffset;

        // const update = () => {
        // 	const newPos = window.pageYOffset;
        // 	const diff = newPos - currentPos;
        // 	const speed = diff * 0.35;

        // 	// section.style.transform = `skewY(${speed}deg)`;
        // 	this.setState({ skew: 'transform: skewY(' + speed + 'deg)' });
        // 	currentPos = newPos;
        // 	window.requestAnimationFrame(update);
        // }

        // update();

        // this.isCardVisible = this.isCardVisible.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
        // document.removeEventListener('DOMContentLoaded', this.isCardVisible);
        // window.removeEventListener('scroll', this.isCardVisible);
        // window.removeEventListener('resize', this.isCardVisible);
    }

    smoothMouse() {
        const target = (document.documentElement || document.body.parentNode || document.body)
        const speed = 50;
        const smooth = 20;

        let moving = false;
        let pos = target.scrollTop;

        target.addEventListener('mousewheel', scroll, { passive: false });

        function scroll(e) {
            // disable default scrolling
            e.preventDefault();

            let delta;

            if (e.detail) {
                if (e.wheelDelta) delta = e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1);
                else delta = -e.detail / 3;
            } else {
                delta = e.wheelDelta / 120;
            }

            pos += -delta * speed > 20 ? 20 : -delta * speed;
            pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight));

            // document.getElementById('skew').style.transform = `skewY(${pos < .01 ? 0 : delta * 30}deg)`;
            // let cards = document.getElementsByName('card');
            // for (let el of cards) {
            // 	console.log(delta)
            // 	el.style.marginBottom = `calc(${Math.abs(delta * 100)}px + 20px)`;
            // }

            if (!moving) update();
        }

        function update() {
            moving = true;

            const delta = (pos - target.scrollTop) / smooth;

            target.scrollTop += delta;

            if (Math.abs(delta) > 0.5) window.requestAnimationFrame(update);
            else moving = false;

        }
    }

    handleScroll = (event) => {
        // console.log("handling scroll")

        // var self = this;

        // const cards = document.getElementsByName("card");
        // for (let card of cards) {
        // 	const rect = card.getBoundingClientRect();
        // 	if (rect.top >= window.innerHeight / 2 - 60 && rect.bottom <= (window.innerHeight / 2 + 60 || document.documentElement.clientHeight / 2 + 60)) {
        // 		card.style.filter = 'grayscale(20%)';
        // 		card.style.transform = 'rotate3d(1, 0, 0, 40deg)'
        // 	} else if (rect.top >= window.innerHeight / 3 && rect.bottom <= (window.innerHeight * 2 / 3 || document.documentElement.clientHeight * 2 / 3)) {
        // 		card.style.filter = 'grayscale(20%)';
        // 		card.style.transform = 'rotate3d(1, 0, 0, 30deg)'
        // 		// card.style.width = '550px';
        // 		card.style.filter = 'grayscale(20%)';
        // 		card.style.transform = 'rotate3d(1, 0, 0, 15deg)'
        // 	} else {
        // 		card.style.filter = 'grayscale(100%)';
        // 		card.style.transform = 'rotate3d(1, 0, 0, 0deg)'
        // 	}
        // }

        // if (this.state.timer !== undefined) {
        // 	clearTimeout(this.state.timer);
        // }

        // this.state.timer = setTimeout(function () {
        // 	const cards = document.getElementsByName("card");
        // 	for (let card of cards) {
        // 		card.style.filter = 'grayscale(100%)';
        // 		card.style.transform = 'rotate3d(1, 0, 0, 0deg)'
        // 	}
        // }, 150);
    }


    render() {
        return (
            <div>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <div className={styles.fadetop}>
                        <h1 class={styles.name}>Beno&icirc;t Ortalo-Magn&eacute;</h1>
                    </div>
                    <div id="skew" className={styles.skew}>
                        <div id="card" name="card" className={styles.blackcard}>
                            <div className={styles.darken}>

                            </div>
                        </div>
                        {this.state.map.map((element, index) => {
                            return (
                                <div id="card" name="card" className={styles.card}>
                                    <div className={styles.darken}>
                                        <div className={styles.cardindex}>{index}</div>
                                        <div className={styles.cardlocation}>Buena Vista, CO</div>

                                    </div>
                                </div>
                            )
                        })}
                        <div id="card" name="card" className={styles.blackcard}>
                            <div className={styles.darken}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.fadebottom} />
                </main>
            </div>
        )
    }
}

export default Home;
