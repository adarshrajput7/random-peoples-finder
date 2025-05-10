const card = document.querySelector('#main-card');
const btn = document.querySelector('#btn');





function getUserdata(){

    return fetch('https://randomuser.me/api/')
    .then((response) => response.json())
}


function botn() {

    getUserdata()
    .then((data) => {
        // const data = data.results[0];
        let phone = data.results[0].phone.trim();
        const alldata = `
        <h2>Random User Finder</h2>

        <div id="dp"><img src="${data.results[0].picture.large}" alt=""></div>

        <div id="user-info">
            <p id="name">${data.results[0].name.first} ${data.results[0].name.last}</p>
            <p id="age">Age: <span>${data.results[0].dob.age}</span></p>
            <p id="email">Email: <span>${data.results[0].email}</span></p>
            <p id="phone">Phone: <span>${phone}</span></p>
            <p id="address">City & State: <span>${data.results[0].location.city}, ${data.results[0].location.state}</span></p>
            <p id="country">Country: <span>${data.results[0].location.country}</span></p>
        </div>   
        `;
        card.innerHTML = alldata;
    })
    .catch((error) => console.error('Error fetching user data:', error));

}



// Function to handle button click
btn.addEventListener('click', function() {
    botn();
    btn.innerHTML = "Another User";
    // alert();
});