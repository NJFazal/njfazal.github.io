function showBlogs(){
    let allBlogs = [
        {
            name: "First Blog",
            youtubeUrl: "https://youtu.be/eJ1ffovwlQg",
            description: "This is my first video blog"
        },
    ];
    let blogsHTML = "";
    allBlogs.forEach(blog => {
        blogsHTML += `
        <div>
                <div>
                    <div>
                        <a class="projecta" href="${blog.youtubeUrl}">${blog.name}</a>
                        <p>${blog.description}</p>
                    </div>
                </div>
        </div>
        `;
    })
    document.getElementById('newBlog').innerHTML = blogsHTML   
    }
showBlogs()

