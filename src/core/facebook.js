/* eslint-disable */
export async function loadFbSdk() {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '715340261988670',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0'
      });
      resolve('SDK Loaded!');
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}
export function getFbLoginStatus() {
  return new Promise(resolve => {
    window.FB.getLoginStatus(responseStatus => {
      resolve(responseStatus);
    });
  });
}

export function fbLogin() {
  return new Promise(resolve => {
    window.FB.login(response => resolve(response), { scope: 'email' });
  });
}
export function fbLogout() {
  return new Promise(resolve => {
    window.FB.logout(response => resolve(response));
  });
}
