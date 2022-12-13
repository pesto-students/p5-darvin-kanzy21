import React, { useEffect, useState } from "react";
import sideImg from '../assets/971.jpg'
import URLCard from './shortURL'
import URLListing from './URLListing'

const Index = () => {
    const [urlObj, setURLObj] = useState([])
    const [flag, setFlag] = useState([])

    useEffect(() => {
        if (localStorage.getItem('URLObj') !== null) {
            setURLObj(JSON.parse(localStorage.getItem("URLObj")));
        } else {
            localStorage.setItem('URLObj', JSON.stringify({}));
        }
    }, [flag])

    return (
        <>
            <section id="starter">
                <div class="container text-center p-5">
                    <div class="row">
                        <div class="col p-3">
                            <h2>ShortURL</h2>
                            <h4 className="p-5">With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.</h4>
                        </div>
                        <div class="col">
                            <img src={sideImg} class=" rounded img-fluid" alt="..." />
                        </div>
                    </div>

                </div>
            </section>
            <section id="urlshortner">
                <div class="row p-5 gy-5 ">
                    <div class="col-12">
                        <URLCard setURLObj={setURLObj} setFlag={setFlag} flag={flag} />
                    </div>
                    <div class="col">
                        <URLListing urlObj={urlObj} setFlag={setFlag} flag={flag} />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Index