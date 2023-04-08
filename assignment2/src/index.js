
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from "./Shop.js";

     
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>
);

//function App(){
  //  return (


{/* <body>
<header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="./index.html" class="navbar-brand d-flex align-items-center">
        <strong>Point Guards</strong>
      </a>

      

      
    </div>
  </div>
</header>

<main>

    <section>
        <h1 style="text-align: center;">Top Guards in the league</h1>
        </section>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light"></h1>
        <p class="lead text-muted">Here Are the top 3 Point Gaurds currently in the NBA according to stats from <a href="https://insider.espn.com/nba/hollinger/statistics/_/position/pg" target="_blank">ESPN.com</a></p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src = "./images/lucaD.webp" alt = "Luka_Doncic" />
                    
            <div class="card-body" id="lukaCard">
              <h3>Luka Doncic</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/3945274/luka-doncic" target="_blank">Number 1</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/shaiGA.webp" alt="shaiGA" />
            <div class="card-body" id="shaiCard">
              <h3>Shai Gilgeous-Alexander</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">

                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/4278073/shai-gilgeous-alexander" target="_blank">Number 2</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <img src="images/Damian-Lillard.webp" alt="Damian_Lillard" />
            <div class="card-body" id="dameCard">
              <h3>Damian Lillard</h3>
              <p class="card-text"></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted"><a href="https://insider.espn.com/nba/player/hollinger/_/id/6606/damian-lillard" target="_blank">Number 3</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</main>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">A website made by basketball fans, for basketball fans.</p>
    <p class="mb-1">March 09, 2023</p>
  </div>
</footer>




        <Button variant="primary">
            Checkout
        </Button>
        </body>
    ); */}
//}