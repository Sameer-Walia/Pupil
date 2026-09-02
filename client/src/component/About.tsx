import { useEffect } from 'react'
import Footer from './Footer'

function About()
{

    useEffect(() =>
    {
        document.title = "About US";
    }, []);

    return (
        <div>

            <div className="custom-text-center1 custom-margin-bottom1">
                <h2 className="custom-heading1">
                    <span className="custom-heading-span1">
                        <span className="custom-primary-text1">About Our Feedback Portal</span>
                        <img src="assets/images/line.svg" className="custom-image1" alt="underline" />
                    </span>
                </h2>
                <p className="custom-description1">A comprehensive feedback portal designed for educational institutions, enabling students to provide feedback on their teachers and courses.</p>
            </div>

            <div className="container ">
                <div className="custom-grid2">
                    <div className="custom-card2">
                        <h3 className="custom-heading2">Features of the Portal</h3>
                        <ul className="custom-list2">
                            <li>
                                <span className="custom-highlight2">Individual Teacher Feedback:</span>
                                Analyze feedback for each teacher on various parameters.
                            </li>
                            <li>
                                <span className="custom-highlight2">Graphical Representation:</span>
                                Feedback results are shown using bar graphs and comparison charts for better analysis.
                            </li>
                            <li>
                                <span className="custom-highlight2">Automated Suggestions:</span>
                                The system generates suggestions for teachers based on feedback to improve their performance.
                            </li>
                            <li>
                                <span className="custom-highlight2">Anonymous Feedback:</span>
                                Student feedback is kept anonymous, but each entry is mapped to a roll number for record-keeping.
                            </li>
                            <li>
                                <span className="custom-highlight2">Admin Management:</span>
                                Admin can manage feedback, update student details, and generate detailed reports.
                            </li>
                        </ul>
                    </div>
                    <div className="custom-card2">
                        <h3 className="custom-heading2">Entities and Constraints</h3>
                        <ul className="custom-list2">
                            <li>
                                <span className="custom-highlight2">className:</span>
                                Includes attributes like Program, Semester, Section.
                            </li>
                            <li>
                                <span className="custom-highlight2">Subject:</span>
                                Each subject has a code and name, associated with teachers.
                            </li>
                            <li>
                                <span className="custom-highlight2">Teacher:</span>
                                Information like Name, Mobile, Email, and Department are tracked.
                            </li>
                            <li>
                                <span className="custom-highlight2">Admin Table:</span>
                                Admin can modify student contact details and maintain records of feedback submissions.
                            </li>
                            <li>
                                <span className="custom-highlight2">Feedback:</span>
                                Students rate teachers based on specific parameters, and only one feedback submission per student is allowed.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="products" >
                <div className="container ">
                    <h1 className="hd text-center col-lg-5 col-md-10 mx-auto mt-5">To design and deliver the innovative products.</h1>
                    <div className="row pt-5 mb-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="pro rounded pr1 theme2">
                                <span className="fa-regular fa-sun" aria-hidden="true"></span>
                                <h3>Augmented Reality</h3>
                                <p className="para">Lorem ipsum dolor sit amet elit et. Debitis nam, minima iste ipsum.</p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-md-0 mt-5 " >
                            <div className="pro rounded pr2 theme2">
                                <span className="fa fa-wrench icon-fea" aria-hidden="true"></span>
                                <h3>Deep Expertise</h3>
                                <p className="para">Lorem ipsum dolor sit amet elit et. Debitis nam, minima iste ipsum.</p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-5 mx-auto ">
                            <div className="pro rounded pr3 theme2">
                                <span className="fa fa-flask" aria-hidden="true"></span>
                                <h3>Software development</h3>
                                <p className="para">Lorem ipsum dolor sit amet elit et. Debitis nam, minima iste ipsum.</p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="pd gr theme1 mt-5">
                <div className="container">
                    <h1 className="text-center hd head ">How It <span className='ccc'>Works</span></h1>
                    <div className="row mt-5">

                        <div className="col-lg-4 col-md-6 col-12 px-4">
                            <img src="/assets/images/loginIcon.png" className="imgheight" alt="Login Icon" />
                            <h3 className="write mt-3">Step 1: Login</h3>
                            <p className="text-gray-600 max-w-xs mt-3">Students login using their roll number and OTP sent to their email or phone.</p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 px-4 mt-md-0 mt-5">
                            <img src="/assets/images/feedbackIcon.png" className="imgheight" alt="Login Icon" />
                            <h3 className="write mt-3">Step 2: Submit Feedback</h3>
                            <p className="text-gray-600 max-w-xs mt-3">Choose the subject and teacher, and provide feedback on the various parameters.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 px-4 mt-lg-0 mt-5 mx-auto">
                            <img src="/assets/images/analysisIcon.png" className="imgheight" alt="Login Icon" />
                            <h3 className=" write mt-3">Step 3: Analyze Results</h3>
                            <p className="text-gray-600 max-w-xs mt-3">Admins can view and analyze the feedback, generating suggestions for improvement.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )

}

export default About
