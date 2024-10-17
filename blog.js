function showBlogs(){
    let allBlogs = [
        {
            name: "First Blog",
            youtubeUrl: "https://youtu.be/tzLRND5t76w?feature=shared",
            description: "This is my first blog placeholder. Fun things to come!"
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

