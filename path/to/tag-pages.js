// Pagination logic for tag pages
const postsPerPage = 20;

function paginatePosts(posts) {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    return Array.from({ length: totalPages }, (v, i) => posts.slice(i * postsPerPage, i * postsPerPage + postsPerPage));
}

// Example usage
const allPosts = [...]; // Fetch all posts
const paginatedPosts = paginatePosts(allPosts); // Posts limited to 20 per page