import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="w-75 mx-auto my-4 banner-height">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img className="img-fluid"  src="https://i.ibb.co/hVQCqz8/Successful-medical-team.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img className="img-fluid" src="https://i.ibb.co/BgqtnmP/doctor-nurses-special-equipment.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img className="img-fluid" src="https://i.ibb.co/567JML3/young-female-doctor-posing-corridor-hospital.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;