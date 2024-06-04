document.addEventListener('DOMContentLoaded', () => {
    const postDetailsContainer = document.getElementById('post-details-container');
    let postId = new URLSearchParams(window.location.search).get('postId');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-block');

            const postInfo = document.createElement('div');
            postInfo.innerHTML = `
                <h2>Post Information</h2>
                <p><strong>ID:</strong> ${post.id}</p>
                <p><strong>Title:</strong> ${post.title}</p>
                <p><strong>Body:</strong> ${post.body}</p>
            `;
            postDiv.appendChild(postInfo);

            const commentsDiv = document.createElement('div');
            commentsDiv.classList.add('comments-block');
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    comments.forEach(comment => {
                        const commentDiv = document.createElement('div');
                        commentDiv.classList.add('comment');
                        commentDiv.innerHTML = `
                            <h3>Comment ${comment.id}</h3>
                            <p><strong>Name:</strong> ${comment.name}</p>
                            <p><strong>Email:</strong> ${comment.email}</p>
                            <p><strong>Body:</strong> ${comment.body}</p>
                        `;
                        commentsDiv.appendChild(commentDiv);
                    });
                })
                .catch(error => console.error('Error fetching comments:', error));

            postDiv.appendChild(commentsDiv);

            postDetailsContainer.appendChild(postDiv);
        })
        .catch(error => console.error('Error fetching post:', error));
});