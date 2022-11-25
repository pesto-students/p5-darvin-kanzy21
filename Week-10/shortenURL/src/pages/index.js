import React from "react";
import sideImg from '../assets/971.jpg'
import URLCard from './shortURL'

const Index = () => {
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
                    <div class="row p-5 ">
                        <div class="col">
                           <URLCard/>
                        </div>
                        {/* <div class="col">
                            2 of 3
                        </div>
                        <div class="col">
                            3 of 3
                        </div> */}
                    </div>
                </div>
            </section>
            <section id="urlshortner">

            </section>
        </>
    );
}
export default Index