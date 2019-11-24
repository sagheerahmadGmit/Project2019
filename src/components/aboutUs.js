import React from 'react';
import '../App.css';


class AboutUs extends React.Component {
    render() {
        return (
            <div className="HomeApp">

                <a href="/">
                    <img
                        className="d-block w-100"
                        src="https://di-uploads-pod6.dealerinspire.com/midtowntoyota/uploads/2019/02/Couple_Getting_New_Car_Key_In_Showroom.jpg"
                        alt="Picture of a car"
                        className="center"
                        width="800px"
                    />
                </a>
                
                <br /><br />

                <h1>AutoTrader in Ireland</h1><br />
                <p id="para">This is our first store in Ireland and we are proud to open it in the heart of Dublin City.</p>
                <br />
                <h3>Reviews</h3>
                <p>
                    These are some of the reviews from our customers about our custmer service and products.<br /><br />
                    <b>Suzzane says:</b><br /> All the staff in the Dublin store we're extremely approachable, knowledgeable and friendly.<br />
                    As we were upgrading they found us a great deal on an amazing car, that suited us not their <br />targets/figures!
                    We left the store happy and satisfied with both their top customer service and<br /> the new contract deals signed.
                    Would definitely recommend their services!!<br /><br />
                    <b>Heather says:</b><br /> AutoTrader, in Dublin was very helpful,<br /> gave me plenty of time to digest
		            the information which helped me make a decision regarding the purchase.<br /><br />
                    <b>Daniel says:</b><br /> Purchased my new Mazda 3 in AutoTrader as it was they who started me
                    on the magical journey of owning a brand new car.<br /> Staff are always friendly and helpful. The service is always first class
                    and they always know who is a newbie <br />and who is not so tailoring the customer requirements to fit. The complex paperwork
	            	dealt with effortlessly<br /> and in no time at all I was off to start the learning process with my new car.
                </p>
            </div>
        );
    }
}

export default AboutUs;
