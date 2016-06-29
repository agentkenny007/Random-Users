import $ from 'jquery';
import callback from './listUsers'

// $.ajax('https://randomuser.me/api/').then(function(data){
//     console.log(data);
// }, function(data){
//     console.log(data.error || data);
// });

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  data: {
      noinfo: true,
      results: 12,
      inc: "picture, name, email, location, phone, cell, id",
      nat: "us",
      seed: "exact"
  },
  success: callback,
  error: function(data){
      console.log(data.error || data);
  }
});
