import $ from 'jquery';

var user = $('<li class="user">'), users = $('.random-users');
var listUsers = function(data){
    console.log(data);
    $('h4').remove();
    data.results.forEach(function(result){
        var u = user.clone();
        u.append(`
            <img src="${result.picture.large}">
            <span class="name">${result.name.first} ${result.name.last}</span>
            <span class="email">${result.email}</span>
            <span class="street-address">
                ${result.location.street}<br>
                ${result.location.city}, ${result.location.state}, ${result.location.postcode}
            </span>
            <span class="tel">Home: ${result.phone}</span>
            <span class="cell">Cell: ${result.cell}</span>
            <span class="SSN">${result.id.name}: <span>${result.id.value}</span></span>`);
        users.append(u); // for user
    });
};

export default listUsers;
