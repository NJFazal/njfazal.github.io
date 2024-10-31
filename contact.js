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
                <form action="https://formsubmit.co/nicolejfazal@gmail.com" method="POST">
                <input type="hidden" name="_template" value="box">
                    <a style="text-decoration: none; text-align: center; font-size: 50px;" href="https://github.com/NJFazal">GitHub</a></br>
                    <a style="text-decoration: none; text-align: center; font-size: 50px" href="https://www.linkedin.com/in/nicole-fazal">LinkedIn</a><br>
                    <input type="email" name="email" placeholder="Email Address" required><br>
                    <input type="hidden" name="_next" value="https://nicolefazal.netlify.app/thankyou.html">
                    <input type="hidden" name="_captcha" value="false">
                    <input style="height: 100px" type="text" name="message" placeholder="Send me a message!" required> <br>
                    <button style="border-radius: 5px; font-size:30px; background-color: #E7717D;" type="submit">Send</button>
                </form>
                </p>
            </div>
 
        </div>
        `;
    });
    document.getElementById('contact-me').innerHTML = contactHTML;
}

showContact();
