function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

function acceptCookies() {
  setCookie('cookie-consent', 'accepted', 365);
  hideBanner();
}

function rejectCookies() {
  eraseCookie('cookie-consent');
  hideBanner();
}

function hideBanner() {
  var banner = document.getElementById('cookie-banner');
  if (banner !== null) {
    banner.parentNode.removeChild(banner);
  }
}

function showBanner() {
  var banner = document.getElementById('cookie-banner');
  if (banner !== null) {
    banner.style.display = 'block';
  }
}

function initializeBanner() {
  var consent = getCookie('cookie-consent');
  if (consent === null) {
    showBanner();
  }
}

window.onload = initializeBanner;

document.getElementById('accept-button').addEventListener('click', acceptCookies);
document.getElementById('reject-button').addEventListener('click', rejectCookies);
