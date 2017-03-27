import Router from 'vue-router'

export default {
  errorResponse(errorMessage) {
    let code, msg;
    if (errorMessage == "permission deny") {
      msg = "Please login first.";
      code = "Permission Deny";
    } else if (errorMessage == "token verify error") {
      msg = "Please login first.";
      code = "Token Verify Error";
    } else if (!_.isUndefined(errorMessage) && errorMessage != null && !_.isUndefined(errorMessage.code)) {
      msg = errorMessage.msg;
      code = errorMessage.code;
    } else {
      msg = "Service Unavailable";
      code = 503;
    }

    if (code == 503 || errorMessage == null) {
      console.log("503 error")
      return;
    } else {
      alert( msg, code );
      Router.push( 'login' );
    }

  },

  checkSession: function() {
    if (_.isUndefined($cookies.get('email')) || _.isEmpty($cookies.get('email'))) {
      return false;
    } else {
      return true;
    }
  }
}