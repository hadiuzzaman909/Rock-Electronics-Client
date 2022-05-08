import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className=" container Accordion mt-5">
            <h3 className="title-package text-center mb-2">Conceptual Question & Answer </h3>
            <div className="row row2 d-flex flex-column-reverse flex-md-row ">
                <div className="col-md-12 col-lg-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Difference between javascript and nodejs
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    JavaScript is a lightweight and powerful interpreted language used for client-side scripting; it runs on all browsers. Node JS, on the flip side, is a server-side language that runs on the V8 engine only.JavaScript can be run on any browser that supports the JavaScript engine. Node JS is a running environment of JavaScript.JavaScript follows the standards of the JavaScript programming language.Node JS can write in C++ and provide an environment for the written JavaScript program to run on its browser.In a web application, JavaScript is used to perform client-side operations, including web page display, business validation process, and Ajax calls. On the other hand, Node JS is used in web pages for non-blocking accessibility and OS execution.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Differences between sql and nosql databases.
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body mb-5">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Key Areas</th>
                                                <th scope="col">SQL</th>
                                                <th scope="col">NoSQL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Type of database</td>
                                                <td>Relational Database</td>
                                                <td>Non-relational Database</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Schema</td>
                                                <td>Pre-defined Schema	</td>
                                                <td> Dynamic Schema</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Database Categories	</td>
                                                <td>Table based Databases</td>
                                                <td>Document-based databases, Key-value stores, graph stores, wide column stores</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Hierarchical Data Storage</td>
                                                <td>Not the best fit	</td>
                                                <td>Fits better when compared to SQL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Complex Queries</td>
                                                <td>Good for complex queries</td>
                                                <td>Not a good fit for complex queries</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What is the purpose of jwt and how does it work?

                        
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body mb-5">
                                <p>JWT, or JSON Web Token, is an open standard set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.A JWT is a Base64URL encoded string, split into three sections, delimited by periods.</p>

                                <p>1.Section one is the header. This section contains JWT metadata; typically information about the type of token and the algorithm used to sign it. It is encoded JSON.</p>
                                <p>2.Section two is the payload. This is the content of the token and is also encoded JSON.</p>
                                <p>3.Section three is the signature. This is the SHA256 (or some other HMAC) hash of the encoded header, encoded payload, and a secret. This part of the JWT is used to verify the integrity of the message.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;