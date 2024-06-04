document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('users-container');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-block');

                const userIdName = document.createElement('p');
                userIdName.textContent = `ID: ${user.id}, Name: ${user.name}`;
                userDiv.appendChild(userIdName);

                const detailsButton = document.createElement('button');
                detailsButton.textContent = 'User Details';
                detailsButton.classList.add('button');
                detailsButton.onclick = function() {
                    window.location.href = `user-details.html?userId=${user.id}`;
                };
                userDiv.appendChild(detailsButton);

                usersContainer.appendChild(userDiv);
            });
        });
});
