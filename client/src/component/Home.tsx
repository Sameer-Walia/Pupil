import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home()
{
    return (
        <div id='home'>
            <header className="header">
                <div className="overlay mt-5">
                    <h1 className="title">AI-Powered Pupil Detection</h1>
                    <p className="descript">Detect.Analyze.Protect.</p>
                    <input type="text" placeholder="What do you need help with?" className="input" />
                    <button className="button">Detect Eye</button>
                </div>
            </header>

            <section className="service container">
                <h2 className="service-title">Featured Tasks</h2>
                <div className="service-container">
                    <div className="service-step transform hover:-translate-y-2 transition-all duration-300 ">
                        <h3 className="step-title">Get Started Now</h3>
                        <p className="service-cost">Involves organizing projects, setting a study schedule, reviewing key subjects.</p>
                        <Link to="/login" className='btn btn-primary  mt-3'>Login</Link>
                    </div>
                    <div className="service-step transform hover:-translate-y-2 transition-all duration-300 ">
                        <h3 className="step-title">Contact Us</h3>
                        <p className="service-cost">For inquiries or support, please reach out to us via email or phone!</p>
                        <Link to="/contact" className='btn btn-primary mt-3'>Contact</Link>
                    </div>
                </div>
            </section>


            <section className="how-it-works bgc">
                <h2 className="section-title">How It Works</h2>
                <div className="steps-container p-3">
                    <div className="step transform hover:-translate-y-2 transition-all duration-300">
                        <h3 className="step-title">Post a Task</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="step transform hover:-translate-y-2 transition-all duration-300">
                        <h3 className="step-title">Get Offers</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="step transform hover:-translate-y-2 transition-all duration-300">
                        <h3 className="step-title">Select & Get It Done</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="step transform hover:-translate-y-2 transition-all duration-300">
                        <h3 className="step-title">Payment & Review</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>




            <section className="how-it-works ">
                <h2 className="section-title">Why Choose Neibhrly?</h2>
                <div className="steps-container">
                    <div className="Choose2">
                        <h3 className="step-title">Secure Payments</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="Choose2">
                        <h3 className="step-title">Verified Taskers</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="Choose2">
                        <h3 className="step-title">Local & Reliable</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="Choose2">
                        <h3 className="step-title">Reviews & Ratings</h3>
                        <p className="step-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works bgc">
                <h2 className="section-title">Why Choose Neibhrly?</h2>
                <div className="steps-container">
                    <div className="Choose">
                        <h3 className="step-title">Secure Payments</h3>
                        <p className="step-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className="apply-btn">Apply Now</button>
                    </div>

                    <div className="Choose">
                        <h3 className="step-title">Verified Taskers</h3>
                        <p className="step-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className="apply-btn">Apply Now</button>
                    </div>

                    <div className="Choose">
                        <h3 className="step-title">Local &amp; Reliable</h3>
                        <p className="step-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className="apply-btn">Apply Now</button>
                    </div>

                    <div className="Choose">
                        <h3 className="step-title">Reviews &amp; Ratings</h3>
                        <p className="step-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className="apply-btn">Apply Now</button>
                    </div>

                </div>
            </section>


            <div id="solution" className="pd theme2" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h1 className="hd">Need a Beter Work? We are here to IT Solution with 30 years of experience</h1>
                            <ul className="nav nav-pills mb-4 mt-4 nav-fill" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">What we do</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Our Mission</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Social impact</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                    <h3>To believe that the smart looking website is the first impression all over.</h3>
                                    <p className="para">This Our History to a tendency to believe that the smart looking website is the first impression. Lorem dolor sit amet, elit!</p>
                                    <ul className="list-unstyled">
                                        <li><span className="fa fa-check"></span>Leading private equity firms</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                    <h3>This Our History to a tendency to believe that the smart looking website is the first impression.</h3>
                                    <p className="para">Lorem ipsum dolor sit amet, elit. Id ab commodi impedit magnam sint voluptates. Minima velit expedita maiores, sit at in!</p>
                                    <ul className="list-unstyled">
                                        <li><span className="fa fa-check"></span>Helping Nonprofit organizations</li>
                                        <li><span className="fa fa-check"></span>   Leading private equity firms</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                    <h3>This Our History to a tendency to believe thes that smart looking website is the first impression.</h3>
                                    <p className="para"> Lorem ipsum dolor sit amet, elit. Id ab commodi impedit magnam sint voluptates. Minima velit expedita maiores, sit at in!!</p>
                                    <ul className="list-unstyled">
                                        <li><span className="fa fa-check"></span> Always Fast and friendly support</li>
                                        <li><span className="fa fa-check"></span> Experienced Professional Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 ps-3 mt-lg-0 mt-5">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How much does a static website cost?
                                            <span className="plus"><i className="fa-solid fa-circle-plus"></i></span>
                                            <span className="minus"><i className="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How to choose a best web template?
                                            <span className="plus"><i className="fa-solid fa-circle-plus"></i></span>
                                            <span className="minus"><i className="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How to download a template?
                                            <span className="plus"><i className="fa-solid fa-circle-plus"></i></span>
                                            <span className="minus"><i className="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Why should i choose a free website?
                                            <span className="plus"><i className="fa-solid fa-circle-plus"></i></span>
                                            <span className="minus"><i className="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                            Why should i choose a free website?
                                            <span className="plus"><i className="fa-solid fa-circle-plus"></i></span>
                                            <span className="minus"><i className="fa-solid fa-circle-minus"></i></span>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className='pclr'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos vero quis quas eius distinctio nostrum voluptas numquam? Dolores dolor magni obcaecati iusto tempora esse rem at repellat vero beatae!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="download-section bgc">
                <h2 className="download-heading">Download the Neibhrly App</h2>
                <p className="download-text">Book and manage tasks on the go!</p>
                <div className="button-container">
                    <button className="google-play">Google Play</button>
                    <button className="app-store">App Store</button>
                </div>
            </section>

            <Footer />

        </div>


    )
}

export default Home
