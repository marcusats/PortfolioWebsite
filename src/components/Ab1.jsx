import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";


Modal.setAppElement("#root");

const Ab1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    
    return(
        <>
        <div className="description">
        <h3 className="name"> Hi!</h3>
        <div className="description_inner">
          <div className="left">
            <p>
            My name is Marcos Salazar and I am a current Computer Engineering student, at Stevens Institute of Technology in Hoboken, NJ.
            </p>
            <p>
            Over the last three years I have found a passion for Web3 development and distributed ledger technologies. When I was a kid growing up in Mexico, I used to love taking to pieces any objects or electronics I found and trying to figure out how they worked on the inside. Fast-forward to today, I focus on deconstructing centralized technologies and using distributed technologies to make a more equitable and accessible economical ecosystem.
            </p>
            <p>
            Dedicated to making a positive impact in societies, my ultimate goal as an engineer is to make technology a more equitable, inclusive and person-centered tool— one that makes our lives better without leaving anyone behind. 
            </p>
            <div className="tokyo_tm_button">
              <button onClick={toggleModal} className="ib-button">
                Learn More
              </button>
            </div>
            {/* END TOKYO BUTTON */}
          </div>
          {/* END LEFT */}
          <div className="right">
            <ul>
              <li>
                <p>
                  <span>Email:</span>
                  <a href="mailto:salazartorres.ma@gmail.com">salazartorres.ma@gmail.com</a>
                </p>
              </li>
              <li>
                <p>
                  <span>Phone:</span>
                  <a href="tel:+16462269334">+1 (646) 226-9334</a>
                </p>
              </li>
              <li>
                <p>
                  <span>Study:</span>Stevens Institute of Technology
                </p>
              </li>
            </ul>
            {/* END UL */}
          </div>
          {/* END RIGHT */}
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
              <p></p>
          </div>
        {/* END DESCRIPTION INNER */}
        </div>

        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Programing Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Golang</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">React</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Solidity</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">C++</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">English</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Spanish</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>EthGlobalNYC</h3>
                      <span>Best Use Case for Valist </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>15</h3>
                      <span>Different Schools</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              {/*<div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
               */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    
    </>
    )
}

export default Ab1;