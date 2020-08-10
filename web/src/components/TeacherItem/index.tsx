import React from 'react';

import './style.css';

import wpp from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/53279921?s=460&u=d3937bd5d2da91433ff1bd9af3cba0373e6e7d21&v=4" alt="Eduardo Toledo" />
            <div className="">
              <strong>Eduardo Toledo</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br />
          Donec fringilla, urna ut ultricies laoreet, magna purus mattis risus, vel cursus eros nisl sit amet nibh. Pellentesque semper sem at leo fringilla, eu hendrerit mauris accumsan. Morbi varius rhoncus convallis. Ut et lorem consectetur, laoreet sapien vitae, dapibus metus. Nullam condimentum, libero in viverra lacinia, lorem enim maximus tellus, vel consequat
          </p>

          <footer>
            <p>
              Preço/hora<strong>R$ 80,00</strong>
            </p>

            <button type="button">
              <img src={wpp} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;