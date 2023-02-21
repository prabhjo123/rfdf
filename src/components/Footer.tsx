import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
    <div className="verticle-section">
      <div className="verticle-body">
        <div className="vertical-columns w-row">
          <div className="vertical-column-1 w-col w-col-6">
            <Image src="/images/waste-collection-800.png" 
              width={800}
              height={500} 
            alt="Waste Collection" className="verticle-image"/></div>
          <div className="vertical-column-2 w-col w-col-6">
            <div className="verticale-content">
              <h2 className="verticle-heading bold">Commercial Waste Collection</h2>
              <div className="tick-box-quote">
                <Image src="/images/tick0_1tick0.png" 
                 width={100}
                 height={100} 
                loading="lazy" alt="Tick Image Icon" className="tick-image"/>
                <div className="tick-text">Nationwide Coverage</div>
              </div>
              <div className="tick-box-quote">
                <Image src="/images/tick0_1tick0.png" 
                 width={100}
                 height={100}
                loading="lazy" alt="Tick Image Icon" className="tick-image"/>
                <div className="tick-text">Free Bin Delivery</div>
              </div>
              <div className="tick-box-quote">
                <Image src="/images/tick0_1tick0.png" loading="lazy"
                width={100}
                height={100} 
                 alt="Tick Image Icon" className="tick-image"/>
                <div className="tick-text">Exceptional Customer Service</div>
              </div>
              <div className="tick-box-quote">
                <Image src="/images/tick0_1tick0.png" loading="lazy"
                 width={100}
                 height={100} 
                alt="Tick Image Icon" className="tick-image"/>
                <div className="tick-text">Quick &amp; Easy Set Up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="how-it-works-section">
      <div className="general-container">
        <div className="how-heading">
          <h2 className="section-heading bold">In partnership with WasteManaged</h2>
        </div>
        <div className="how-body">
          <div id="w-node-_2cdbe197-1097-773f-e314-ccbe9c5f4cca-9c5f4cc4" className="how-items">
            <Image src="/images/How1.png" loading="lazy" 
             width={100}
             height={100} 
            id="w-node-_2cdbe197-1097-773f-e314-ccbe9c5f4ccb-9c5f4cc4" alt="" className="how-image"/>
            <div className="how-item">
              <h2 className="how-item-title green">1. Complete Form</h2>
              <p className="cta-text">Tell us your supplier requirements in less than 60 seconds</p>
            </div>
          </div>
          <div id="w-node-_2cdbe197-1097-773f-e314-ccbe9c5f4cd5-9c5f4cc4" className="how-items">
            <Image src="/images/How2.png" loading="lazy" alt="" className="how-image"
             width={100}
             height={100} />
            <div className="how-item">
              <h2 className="how-item-title green">2. Best Match</h2>
              <p className="cta-text">We’ll search the market and find the best deal for your requirements</p>
            </div>
          </div>
          <div id="w-node-_2cdbe197-1097-773f-e314-ccbe9c5f4cde-9c5f4cc4" className="how-items">
            <Image src="" 
            loading="lazy" id="w-node-_2cdbe197-1097-773f-e314-ccbe9c5f4cdf-9c5f4cc4" 
            width={100}
            height={100}  alt="" className="how-image"/>
            <div className="how-item">
              <h2 className="how-item-title green">3. Receive Quotes</h2>
              <p className="cta-text">Receive quotes from highly rated suppliers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="quote-footer">
      <div className="quote-footer-section">
        <div className="quote-footer-columns w-row">
          <div className="quote-footer-column w-col w-col-6">
            <div className="quote-footer-heading green">Information</div>
            <a href="https://www.supplierscompared.co.uk/privacy-policy" className="quote-footer-link">Privacy Policy</a>
            <a href="https://www.supplierscompared.co.uk/terms-conditions" className="quote-footer-link">Terms and Conditions</a>
          </div>
          <div className="quote-footer-column w-col w-col-6">
            <div className="quote-footer-heading green">Get in touch</div>
            <a href="mailto:info@supplierscompared.co.uk" className="main-footer-link">info@supplierscompared.co.uk</a>
          </div>
        </div>
      </div>
      <div className="white-footer">
        <div className="white-footer-body">
          <div className="white-footer-block">Business Marketing Limited is a limited company registered in England and Wales under Company Number 13908371. Registered office address: 20-22 Wenlock Road, London, N1 7GU .  Business Marketing Limited © 2022</div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Footer
