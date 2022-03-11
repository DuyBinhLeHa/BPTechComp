import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.9567674517425!2d-84.37349998479662!3d33.60642618072951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4fc3ec78eae7d%3A0x33459d7fecbfbf56!2s577%20Watson%20Ferry%20Dr%2C%20Forest%20Park%2C%20GA%2030297!5e0!3m2!1sen!2sus!4v1646283057991!5m2!1sen!2sus" aria-hidden="false" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
