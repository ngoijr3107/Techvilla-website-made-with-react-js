import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logo from "../image/techvilla-logo.png";
import hero from "../image/element-1.png";
import creative from "../image/design.png";
import web from "../image/web.png";
import digitalmarket from "../image/digitalmarket.png";


class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navigation-bar border-gray-200 px-2 sm:px-4 py-2.5">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <a href="" className="flex items-center">
                            <img src={logo} className="mr-3 h-9 sm:h-12"></img>
                        </a>
                        <div className="flex md:order-2">
                            <a href="" className="quote font-medium">pricing</a>
                            <button data-collapse-toggle="mobile-menu-4" data-target="#mobile-meu-4" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden" id="menu-btn" aria-controls="mobile-menu-4" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden collapse navbar-collapse justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Techvilla</a>
                                </li>
                                <li>
                                    <a href="">creative studio</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

class Hero extends React.Component {
    render() {
        return (
            <div class="max-w-screen-xl px-4 py-8 mx-auto mt-28 sm:px-6 lg:px-8" id="hero-section">
                <h1 className="text-4xl text-center lg:text-6xl font-bold">We are <span>Techvilla.</span>
                    <br></br>We are a company people<br></br><span>love</span> to work with!</h1>
                <hr className="mx-auto mt-8 flex justify-center" id="divider-row"></hr>
            </div>
        );
    }
}

class Service extends React.Component {
    render() {
        return (
            <div className="container flex flex-wrap justify-center mt-24" id="service-section">
                <div className="order-1">
                    <div className="max-w-sm p-10 grid flex place-items-center rounded overflow-hidden content-center">
                        <img className="w-full" src={web}></img>
                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2"><h3>Website design</h3></div>
                            <p className="text-base">
                                Everything you need to know about creating a website for your business.
                            </p>
                        </div>
                        <div className="m-10">
                            <a href="" className="action-btn">Get started</a>
                        </div>
                    </div>
                </div>

                <div className="order-2">
                    <div className="max-w-sm p-10 grid flex place-items-center rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={creative}></img>
                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2"><h3>Creative design</h3></div>
                            <p className="text-base">
                                Everything you need to know about creating creative designs for your business.
                            </p>
                        </div>
                        <div className="m-10">
                            <a href="" className="action-btn">Get started</a>
                        </div>
                    </div>
                </div>

                <div className="order-3">
                    <div className="max-w-sm p-10 grid flex place-items-center rounded overflow-hidden">
                        <img className="w-full" src={digitalmarket}></img>
                        <div className="px-6 py-4 text-center">
                            <div className="font-bold text-xl mb-2"><h3>Digital marketing</h3></div>
                            <p className="text-base">
                                Everything you need to know about digital marketing for your business.
                            </p>
                        </div>
                        <div className="m-10">
                            <a href="" className="action-btn">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 mt-28" id="about-section">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">We love Building large brands.</h1>
                        <p className="text-md">We are a creative and experienced team with proven processes and systems to help your company grow.
                            You should love the journey to grow your company. Whether you need a project,
                            ongoing help, or a jump-start,
                            you’ll work with a team where everyone has over 3 years of experience.</p>
                        <p className="text-md">
                            A better story, increased visitors to your website, a higher conversion rate, more leads,
                            more sales opportunities, a higher close rate, a faster sales cycle,
                            help with your technical projects and more consistent revenue generation — you’ll love working with us.
                        </p>
                        <p className="text-md">
                            We developed the company we love and we want every client and team member to feel the same.
                            Our goal is to ensure you love your team with us, and our team to love the work they do,
                            and both to feel the love through our ongoing processes to make your business grow.
                        </p>

                        <button className="about">Got a project? Lets's talk!</button>
                    </div>

                    <div class="flex justify-center space-x-4 text-xs text-gray-400 lg:justify-end">
                        <img src={hero} className="mt-auto mx-auto"></img>
                    </div>
                </div>
            </div>
        );
    }
}

class Subscription extends React.Component {
    render() {
        return (
            <aside class="p-12 sm:p-16 lg:p-24 cta-section">
                <hr className="mx-auto mt-8 flex justify-center" id="divider-row"></hr>
                <div class="max-w-xl mx-auto mt-8 text-center">
                    <p class="text-md font-md">
                        Receive updates about our offers
                    </p>

                    <p class="mt-2 text-lg sm:text-3xl font-md">
                        Subscribe to our Email's newsletter.
                    </p>

                    <form class="mt-8 sm:flex">
                        <div className="sm:flex-1">
                            <label for="email" class="sr-only">Email</label>

                            <input
                                type="email"
                                placeholder="Your Email address"
                                className="w-full p-3 cta-sub"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-between w-full px-5 py-3 mt-4 sm:w-auto sm:mt-0 sm:ml-4 quote"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </aside>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (

            <footer class="footer mt-5">
                <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <p class="text-sm text-center text-gray-400 lg:text-left">
                            Copyright &copy; 2022 <span>Techvilla</span>. All rights reserved.
                        </p>

                        <nav class="flex justify-center space-x-4 text-xs text-gray-400 lg:justify-end">
                            <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span class="sr-only"> Facebook </span>

                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span class="sr-only"> Instagram </span>

                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span class="sr-only"> Twitter </span>

                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>
        );
    }
}
export { Navbar, Hero, Service, About, Subscription, Footer };