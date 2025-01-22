// Blog data storage key
const BLOG_STORAGE_KEY = "blog_posts";

// Load existing posts when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Hide loader after content is loaded
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1000);

    loadPosts();
});

// Save new or edited posts
document.getElementById("blogPostForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!title || !content) {
        alert("Both title and content are required!");
        return;
    }

    let posts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY)) || [];
    const existingIndex = posts.findIndex((post) => post.title === title);

    if (existingIndex >= 0) {
        posts[existingIndex].content = content;
    } else {
        posts.push({ title, content });
    }

    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    loadPosts();
    document.getElementById("blogPostForm").reset();
});

// Load posts from localStorage
function loadPosts() {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";

    const posts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY)) || [];
    posts.forEach((post, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <div class="card-actions">
                <button onclick="deletePost(${index})"><i class="fas fa-trash"></i> Delete</button>
                <button onclick="editPost(${index})"><i class="fas fa-edit"></i> Edit</button>
            </div>
        `;
        postsContainer.appendChild(card);
    });
}

// Delete a post
function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY)) || [];
    posts.splice(index, 1);
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    loadPosts();
}

// Edit a post
function editPost(index) {
    const posts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY)) || [];
    const post = posts[index];
    document.getElementById("title").value = post.title;
    document.getElementById("content").value = post.content;
}
