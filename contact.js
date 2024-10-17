function showContact() {

    let contactMe = [
        {
            imageUrl: "images/contactme.png"
        }
    ];
    let contactHTML = "";
    contactMe.forEach(contactMethod => {
        contactHTML += `
        <div class="card" style="background-color: bisque; width: 50rem; border: none">
            <img src="${contactMethod.imageUrl}" style="width:40%; margin-left:auto; margin-right:auto;" alt="me">
            <div class="card-body">
                <p class="card-text" style="text-align: center; font-size: 50px">
                                 <a style="text-decoration: none; text-align: center; font-size: 50px" href="https://github.com/NJFazal">GitHub</a></br>
                    <a style="text-decoration: none; text-align: center; font-size: 50px" href="https://www.linkedin.com/in/nicole-fazal">LinkedIn</a>
                <form action="https://formsubmit.co/nicolejfazal@gmail.com" method="POST">
                    <input type="email" name="email" placeholder="Email Address" required>
                    <input type="hidden" name="_next" value="https://nicolefazal.netlify.app/thankyou.html">
                    <input type="text" name="message" placeholder="Write your message here!" required>
                    <button type="submit">Send</button>
                </form>
                </p>
            </div>
 
        </div>
        `;
    });
    document.getElementById('contact-me').innerHTML = contactHTML;
}

showContact();
