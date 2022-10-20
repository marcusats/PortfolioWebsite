import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Posts = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_Posts">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <h3>Post</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="Posts_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
   
                
                {/*<Tab>Medium</Tab> */}

              </TabList>
              {/* END TABLIST */}

              <div className="list_wrapper">
                <TabPanel>
                  <ul className="Posts_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <a href={"https://medium.com/securemeeting/getting-web-development-right-webrtc-tutorial-golang-and-react-2c87a6eaf3ff"} target="_blank" rel="noopener noreferrer">
                        <div className="inner">
                          <div className="entry tokyo_tm_Posts_animation_wrap">
                            <img
                              src="assets/img/Posts/5.png"
                              alt="medium"
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Getting Web Development Right</h3>
                            <span>Medium</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <a href={"https://medium.com/securemeeting/dlts-bring-socio-financial-revolution-it-is-not-all-about-blockchain-7d0f4024a05d"} target="_blank" rel="noopener noreferrer">
                        <div className="inner">
                          <div className="entry tokyo_tm_Posts_animation_wrap">
                            <img
                              src="assets/img/Posts/2.jpeg"
                              alt="DLTs Bring Socio-Financial Revolution"
                              onClick={() => setOpen(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>DLTs Bring Socio-Financial Revolution</h3>
                            <span>Medium</span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <a href={"https://haciaelespacio.aem.gob.mx/revistadigital/articul.php?interior=827"} target="_blank" rel="noopener noreferrer">
                        <div className="inner">
                          <div className="entry tokyo_tm_Posts_animation_wrap">
                            
                            <img
                              src="assets/img/Posts/4.jpeg"
                              alt="El Príncipe de las matemáticas"
                            />
                            
                          </div>
                          <div className="mobile_title">
                            <h3>El Príncipe de las matemáticas</h3>
                            <span>Hacia el Espacio</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* END SHOT */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                       <a href={"https://haciaelespacio.aem.gob.mx/revistadigital/articul.php?interior=822"} target="_blank" rel="noopener noreferrer">
                        <div className="inner">
                         <div className="entry tokyo_tm_Posts_animation_wrap">
                           
                          <img
                            src="assets/img/Posts/3.jpeg"
                            alt="Besh Award"
                          />
                           
                         </div>
                         <div className="mobile_title">
                           <h3>La EEI nuevamente será visible en su paso por México.</h3>
                           <span>Hacia el Espacio</span>
                         </div>
                        </div>
                       </a>
                    </li>
                    {/* END SHOT */}
                    
                    {/* END DETAILS */}
                  </ul>
                  {/* END Posts LIST */}
                </TabPanel>
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      
  
    </>
  );
};

export default Posts;
