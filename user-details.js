
document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users-container');
    let userId = new URLSearchParams(window.location.search).get('userId'); // Отримуємо ID користувача з URL

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) // Отримуємо інформацію про конкретного користувача
        .then(response => response.json())
        .then(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-block');

            const userInfo = document.createElement('div');
            userInfo.innerHTML = `
                <h2>User Information</h2>
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p><strong>Geo:</strong> ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                <p><strong>Company:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
            `;
            userDiv.appendChild(userInfo);

            const button = document.createElement('button');
            button.classList.add('button');
            button.innerText = 'Post of current user';
            button.style.margin = 'auto';
            button.onclick = function() {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`) // Отримуємо всі пости користувача
                    .then(response => response.json())
                    .then(posts => {
                        const postTitles = document.createElement('div');
                        postTitles.classList.add('post-titles');
                        posts.forEach(post => {
                            const postTitle = document.createElement('p');
                            postTitle.textContent = post.title;
                            postTitles.appendChild(postTitle);
                        });
                        userDiv.appendChild(postTitles);
                    })
                    .catch(error => console.error('Error fetching posts:', error));
            };
            userDiv.appendChild(button);

            usersContainer.appendChild(userDiv);
        })
        .catch(error => console.error('Error fetching user:', error));
});