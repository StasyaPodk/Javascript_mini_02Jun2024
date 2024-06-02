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

/*
            fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(user => {
                    userDetailsContainer.innerHTML = `
                                <h2>Інформація про користувача</h2> 
                                <p><strong>ID:</strong> ${user.id}</p>
                                <p><strong>Ім'я:</strong> ${user.name}</p>
                                <p><strong>Імейл:</strong> ${user.email}</p>
                                <p><strong>Ім'я користувача:</strong> ${user.username}</p>
                                <p><strong>Телефон:</strong> ${user.phone}</p>
                                <p><strong>Веб-сайт:</strong> ${user.website}</p>
                                <p><strong>Адреса:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                                <p><strong>Геолокація:</strong> ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                                <p><strong>Компанія:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                            `;
                })
                .catch(error => console.error('Помилка отримання даних про користувача:', error));
        }
    })
    .catch(error => console.error('Помилка отримання даних про користувачів:', error));

 */
