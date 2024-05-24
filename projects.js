function showProjects(){
    let allProjects = [
        {
            name: "Trivia Game",
            imageUrl: "images/trivia.png",
            websiteUrl: "https://mytriviagame.netlify.app/",
            description: "This is a fun trivia game project I made for fun to practice my coding knowledge."
        },
        {
            name: "Drag and Drop Tasks",
            imageUrl: "images/dragdrop.png",
            websiteUrl: "https://main--peaceful-gingersnap-271bef.netlify.app/",
            description: "This is a small project I made to explore drag and drop functionality for a separate project."
        },
        {
            name: "Accessibility Tool",
            imageUrl: "images/accessibility.png",
            websiteUrl: "https://njfazal.github.io/RDF-Acc-Tool",
            description: "This is a somewhat more advanced project that I did to help create better accessibility for websites. I adapted this plugin from an opensource project and created a better UI experience."
        },
        {
            name: "Capstone",
            imageUrl: "images/meowchow.png",
            websiteUrl: "https://youtu.be/E7FqRsZNVKs?feature=shared",
            description: "This is my full-stack capstone project from MIT xPRO. This is a comical proof of concept food ordering app for cats called MeowChow. I chose frugality and took it down but here is a video presentation of all of the functionality."
        },
        {
            name: "Bad Bank",
            imageUrl: "images/badbank.png",
            websiteUrl: "https://jocular-shortbread-037189.netlify.app",
            description: "This is a front end project that I did for MIT xPRO. With it, I demonstrated my knowledge of how to use react, bootstrap, carrying of context and state and general themes of front end development. As the name suggests, this is a 'bad bank' because it stores your data without a back end for all the world to see. That was our professor's sense of humor, with the task of making it into a better banking app for the full stack capstone project."
        },
        {
            name: "Hanoi Tower Game",
            imageUrl: "images/hanoi.png",
            websiteUrl: "https://keen-salmiakki-977693.netlify.app",
            description: "This was a clever little project from MIT xPRO where I was challenged to create the Hanoi tower with recursion."
        },
        {
            name: "Bus Tracker",
            imageUrl: "images/bus.png",
            websiteUrl: "https://cool-beijinho-41e529.netlify.app",
            description: "This is a simple bus tracker project from MIT xPRO as a further study into animation and loops."
        },
        {
            name: "ToDoList",
            imageUrl: "images/todo.png",
            websiteUrl: "https://reliable-marshmallow-21a5e1.netlify.app",
            description: "This was an introductory piece from MIT xPRO for React. It is the first time I used components like forms to create lists that could be interacted with. It is Halloween Themed because I originally did this in late October."
        },
        {
            name: "TicTacToe",
            imageUrl: "images/tictactoe.png",
            websiteUrl: "https://sage-chimera-360208.netlify.app",
            description: "This was the first game project I made. This is a normal tictactoe game and was pretty fun to make. I will be making more complex games in the future."
        },
        {
            name: "ATM",
            imageUrl: "images/atm.png",
            websiteUrl: "https://snazzy-licorice-24a85d.netlify.app",
            description: "This is a project where I first started experimenting with carrying state. It is a sample of what I ended up building for my 'badbank' project."
        },
        {
            name: "Eyes",
            imageUrl: "images/eyes.png",
            websiteUrl: "https://quiet-malabi-6f4f20.netlify.app",
            description: "This is a spooky little project. I was playing around with Javascript functions and CSS to create an eye ball that follows the user's cursor around the screen."
        },
        {
            name: "PacMan Animation",
            imageUrl: "images/pacman1.png",
            websiteUrl: "https://silly-dusk-3c3a03.netlify.app",
            description: "This was my first PacMan exercize. It is a very simply HTML and JavaScript project."
        },
        {
            name: "PacMan Factory",
            imageUrl: "images/pacman2.png",
            websiteUrl: "https://amazing-dusk-a0014b.netlify.app",
            description: "This is my second PacMan themed project where I learned to make a factory of pacmen and make them bounce rather than just pace back and forth!"
        },
        {
            name: "Bouncy Balls",
            imageUrl: "images/balls.png",
            websiteUrl: "https://sensational-starburst-0f91e3.netlify.app",
            description: "This was my very first MIT xPRO project! It was my introduction to JavaScript and it felt so good to figure out how to create my first functions!"
        },
    ];
    let projectsHTML = "";
    allProjects.forEach(project => {
        projectsHTML += `
        <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="projects" src="${project.imageUrl}" style="width:100%" alt="${project.name}" />
                    </div>
                    <div class="flip-card-back">
                        <a class="projecta" href="${project.websiteUrl}">${project.name}</a>
                        <p>${project.description}</p>
                    </div>
                </div>
        </div>
        `;
    })
    document.getElementById('newProject').innerHTML = projectsHTML   
    }
showProjects()

