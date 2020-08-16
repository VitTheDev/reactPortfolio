import React from 'react';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="ContactCard">
      <div className="card">
        <div className="card-head">
          <h2>Vit Busek</h2>
          <h4>Front-end Developer</h4>
        </div>
        <div className="card-body">
          <h4>
            Email: <span>busek.vit@gmail.com</span>
          </h4>
          <h4>
            Phone: <span>+44 747 592 2308</span>
          </h4>
          <h4>
            Website: <span>www.vitthedev.com</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
