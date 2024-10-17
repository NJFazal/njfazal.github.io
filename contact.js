function showContact() {

    let contactMe = [
        {
            imageUrl: "images/contactme.png",
            email: "nicolejfazal@gmail.com"
        }
    ];
    let contactHTML = "";
    contactMe.forEach(contactMethod => {
        contactHTML += `
        <div class="card" style="background-color: bisque; width: 50rem; border: none">
            <img src="${contactMethod.imageUrl}" style="width:40%; margin-left:auto; margin-right:auto;" alt="me">
            <div class="card-body">
                <p class="card-text" style="text-align: center; font-size: 50px">
                    <a href="mailto:${contactMethod.email}" style="text-decoration: none; color: inherit;">
                        ${contactMethod.email}
                    </a>
                    <a style="text-decoration: none;" href="https://github.com/NJFazal">GitHub</a></br>
                    <a style="text-decoration: none;" href="https://www.linkedin.com/in/nicole-fazal">LinkedIn</a>
                </p>
            </div>
 
        </div>
        `;
    });
    document.getElementById('contact-me').innerHTML = contactHTML;
}

showContact();
