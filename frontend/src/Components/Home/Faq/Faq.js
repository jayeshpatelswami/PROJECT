import React, { useState } from "react";

const Faq = () => {
  const [show0, setShow0] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div
      className="container rounded p-5"
      style={{ backgroundColor: "#9EC8B9" }}
    >
      <h2 style={{ display: "flex ", flexDirection: "column" }}>
        <span style={{ fontSize: "20px" }}>Frequently Asked Questions</span>
        Checkout our knowledge base for some of your answers!
      </h2>
      <div>
        <div className="container">
          <h6
            className="px-5"
            style={{ cursor: "pointer" }}
            onClick={() => setShow0(!show0)}
          >
            1. What is myScheme?
            {show0 ? (
              <p className="my-1">
                myScheme is an e-Marketplace for Govt. schemes and services.
                Using myScheme you can find various government schemes, check
                your eligibility, and apply for the schemes.
              </p>
            ) : null}
          </h6>
        </div>
        <div className="container">
          <h6
            className="px-5"
            style={{ cursor: "pointer" }}
            onClick={() => setShow1(!show1)}
          >
            2.How myScheme will help common citizens?
            {show1 ? (
              <p className="my-1">
                myScheme will reduce the time and effort of citizens in
                searching for appropriate government schemes.The easy user
                interface of myScheme helps common people a lot in discovering
                and applying for schemes.
              </p>
            ) : null}
          </h6>
        </div>
        <div className="container">
          <h6
            className="px-5"
            style={{ cursor: "pointer" }}
            onClick={() => setShow2(!show2)}
          >
            3. What all information about a particular scheme can I find on
            myScheme ?
            {show2 ? (
              <p className="my-1">
                myScheme provides details on the eligibility criteria,
                application process, and benefits being offered under that
                scheme. myScheme also answers the Frequently Asked
                Questions(FAQs) about the scheme
              </p>
            ) : null}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Faq;
