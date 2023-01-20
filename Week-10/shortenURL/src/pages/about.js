import React from "react";

const About = () => {

    return (
        <>
            <section id="starter">
                <div class="container text-center p-5">
                    <div class="row">
                        <div class="col p-3">
                            <ul class="list-unstyled">
                                <li>This is a list.</li>
                                <li>It appears completely unstyled.</li>
                                <li>Structurally, it's still a list.</li>
                                <li>However, this style only applies to immediate child elements.</li>
                                <li>Nested lists:
                                    <ul>
                                        <li>are unaffected by this style</li>
                                        <li>will still show a bullet</li>
                                        <li>and have appropriate left margin</li>
                                    </ul>
                                </li>
                                <li>This may still come in handy in some situations.</li>
                            </ul>
                        </div>
                        <div class="col">
                            <dl class="row">
                                <dt class="col-sm-3">Description lists</dt>
                                <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                                <dt class="col-sm-3">Term</dt>
                                <dd class="col-sm-9">
                                    <p>Definition for the term.</p>
                                    <p>And some more placeholder definition text.</p>
                                </dd>

                                <dt class="col-sm-3">Another term</dt>
                                <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

                                <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                                <dt class="col-sm-3">Nesting</dt>
                                <dd class="col-sm-9">
                                    <dl class="row">
                                        <dt class="col-sm-4">Nested definition list</dt>
                                        <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                                    </dl>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="row p-5 gy-5 ">
                        <div class="col-12">

                        </div>
                        <div class="col">

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default About