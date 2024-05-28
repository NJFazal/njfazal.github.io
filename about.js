function showAbout() {
    let aboutMe = [
        {
            name: " Hi, I'm Nicky!",
            imageUrl: "images/aboutme.png",
            description: "I am a full stack web developer. I got my MERN stack certification from MIT xPRO. I have over 6 years of GIS experience but my favorite way to include topography in my life is to go snowboarding. I am passionate about games and puzzle solving, so I am always excited to learn new technologies and creative coding solutions."
        }
    ]
    let aboutHTML = "";
    aboutMe.forEach(aboutme => {
        aboutHTML += `
        <div class="card" style="background-color: bisque; width: 40rem; border: none; overflow-y: auto; padding:10px; padding-right:90px">
  <img  src="${aboutme.imageUrl}" style="width:40%; margin-left:auto; margin-right:auto;" alt="me">
  <div class="card-body" style="padding:0px">
    <h1 style="text-align: center; font-size: 50px" >${aboutme.name}</h1>
    <p class="card-text" style="text-align: center">${aboutme.description}</p>
  </div>
  <div class="card-body" style="text-align: center; text-decoration: none; font-size: 50px">
  <a class="cv" href="images/NICOLE FAZAL.pdf">My CV</a>
  </div>
</div>
        `;
    })
    document.getElementById('about').innerHTML = aboutHTML   
    }
showAbout()

