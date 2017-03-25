import genUrl from '@/api/genUrl';

export default {
  login( data ) {
    return fetch(genUrl('/user/login'), {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(function(response) {
      console.log(response.status) ;    //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers);    //=> Headers
      console.log(response.url);        //=> String

      return response.text();
    }, function(error) {
      console.log(error.message); //=> String
    })
  }
}