import React from 'react';
 
  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-85" src="https://www.ece.uw.edu/wp-content/uploads/2021/06/Machine-Learning-and-Deep-Learning-v2-1920px-1024x684.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-85 " src="https://www.ece.uw.edu/wp-content/uploads/2021/06/Machine-Learning-and-Deep-Learning-v2-1920px-1024x684.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-85" src="https://www.ece.uw.edu/wp-content/uploads/2021/06/Machine-Learning-and-Deep-Learning-v2-1920px-1024x684.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   
 
        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">Innovation is applied creativity . The creation of new or improved knowledge with potential on implementation to business of the company, with positive impact and market acceptance.</p>
</div>   
          </div>   
        </section>   
 
        <section class="" id="Application">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Application</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Netflix</h4>
                          <p class="card-text text-secondary">In a process called collaborative filtering, Netflix uses machine learning to analyze the viewing habits of its millions of customers to make predictions on which media viewers may also enjoy. Recommendations are based on those predictions and determine what shows, movies and videos will display on the homepage and watch-next reel of each user.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>

                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Twitter</h4>
                          <p class="card-text text-secondary">Social media giant Twitter relies on machine learning to prioritize tweets that are the most relevant to every user. Twitter’s machine learning ranks tweets with a relevance score based on what you engage with the most and other metrics. High-ranking tweets based on similar engaged posts are placed at the top of feeds, so users are more likely to see them.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Apple</h4>
                          <p class="card-text text-secondary">Face ID authentication by Apple utilizes machine learning to carry out image recognition and unlock mobile devices. Apple’s biometric technology is powered by Vision, a deep learning framework which is able to detect the features of users’ faces and quickly match them to previous device records. The Vision framework can also be used to detect barcodes, text and landmarks through device cameras.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  
 
 
       <section class=""  id="Articles">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Articles</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               When Machine Learning goes off the rails
            </button>
            </h2>
         </div>
 
         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            <div>Date: January-Febuary 2021</div>
            <div>Author: Boris Babic, I.Glenn Cohen, Theodoros Evgeniou,Sara Gerke</div>
            <div>https://hbr.org/2021/01/when-machine-learning-goes-off-the-rails</div>
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               Applications of Machine Learning in cricket : A systematic review
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            <div>Date: December 15,2022</div> 
            <div>Author: Indika Wickramasinghe</div>
            <div>https://www.sciencedirect.com/science/article/pii/S2666827022001104</div>

            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Artifical Intelligence in Space: The Amazing Ways Machine Learning is helping to unravel the mysteries of the universe
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            <div>Date:April 24,2023</div>
               <div> Author: Bernard Marr</div>
               <div>https://bernardmarr.com/artificial-intelligence-in-space-the-amazing-ways-machine-learning-is-helping-to-unravel-the-mysteries-of-the-universe/</div>
            </div>
            </div>
         </div>
      </div>
      </div>
    </section>
 
     
    <section class="bg-light mt-5" id="Authors">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Authors</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://dickinsonlaw.psu.edu/sites/default/files/inline-images/Gerke-Sara-190x220-N.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Sara Gerke</h4>
          <h6 class="font-weight-bold blue-text my-3"></h6>
          <p class="font-weight-normal dark-grey-text"></p>
            <p>When Machine Learning goes off the rails</p>
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://i1.rgstatic.net/ii/profile.image/883940940337153-1587759351988_Q128/Indika-Wickramasinghe.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Indika Wickramasinghe</h4>
          <h6 class="font-weight-bold blue-text my-3"></h6>
          <p class="font-weight-normal dark-grey-text">
            <p>Applications of Machine Learning in cricket : A systematic review</p>
          </p>
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://extraordinarybusinessbooks.com/wp-content/uploads/2022/07/Bernard-Marr-200x300.jpeg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Bernard Marr</h4>
          <h6 class="font-weight-bold blue-text my-3"></h6>
          <p class="font-weight-normal dark-grey-text">
         <p>Artifical Intelligence in Space: The Amazing Ways Machine Learning is helping to unravel the mysteries of the universe</p>
         </p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
   
  export default Content;