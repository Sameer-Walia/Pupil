import Footer from "./Footer"

function Thanks()
{

    return (
        <>
            <div className="thanks-page">
                <div className="thanks-container">
                    <div className="thanks-content">
                        <h2 className="thanks-heading">
                            Thanks for signing up. You will get an email on your registered
                            address. Click on the link in the mail to activate your account.
                        </h2>

                        <h2 className="thanks-subheading">
                            It’s a one-time activation only. After that you can login directly.
                        </h2>

                        <p className="thanks-message">
                            <strong>Thank you!</strong>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Thanks

