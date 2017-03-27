import genUrl from '@/api/genUrl';

export default {
  login( data ) {
    console.log( 'login' );
    return new Promise(( resolve, reject ) => {
      return fetch(genUrl('/user/login'), {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password
        }),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(
        response => resolve( response.json() ),
        error => reject( error.message )
      );
    });
  },
  uLogin( data ) {
    console.log( 'ulogin' );
    return new Promise(( resolve, reject ) => {
      fetch(genUrl('/user/ulogin'), {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(
        response => resolve( response.json() ),
        error => reject( error.message )
      );
    });
  }
}