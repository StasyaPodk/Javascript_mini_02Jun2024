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


                const detailsLink = document.createElement('a');
                detailsLink.textContent = 'User Details';
                detailsLink.href = `user-details.html?userId=${user.id}`;
                userDiv.appendChild(detailsLink);

                usersContainer.appendChild(userDiv);
            });

        })

});

