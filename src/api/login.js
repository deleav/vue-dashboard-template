import genUrl from '@/api/genUrl';

export default {
  login( data ) {
    console.log( 'login' );
    return new Promise(( resolve, reject ) => {
      fetch(genUrl('/user/login'), {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password
        }),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(
        response => response.text().then(text => resolve(text ? JSON.parse( text ) : '')),
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
        response => response.text().then(text => resolve(text ? JSON.parse( text ) : '')),
        error => reject( error.message )
      );
    });
  }
}