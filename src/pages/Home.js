import React from 'react';
import '../scss/Home.scss';
import mainImg from '../assets/main_img.png';
import buttonImg from '../assets/main_button.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <div className="main-img">
          <img src={mainImg} alt="mainImage" />
        </div>
        {/* <div className="count">현재까지 참여한 인원 1203명</div> */}
        <div className="team-info">
          <NavLink to={'/team'}>테스트를 만든 사람들</NavLink>
        </div>
        <div className="button-img">
          <NavLink to={'/quiz'}>
            <img src={buttonImg} alt="buttonImage" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
