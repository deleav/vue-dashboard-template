import genUrl from '@/api/genUrl';

export default {
  logout() {
    console.log( 'logout' );
    return new Promise(( resolve, reject ) => {
      fetch(genUrl( '/logout' ), {
        method: 'GET',
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