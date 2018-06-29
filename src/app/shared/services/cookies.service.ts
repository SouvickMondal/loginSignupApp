import { Injectable } from '@angular/core';

@Injectable()
export class CookiesService {

  constructor() { }
  readData(name: any) {
    if (name) {
      const cookieName = name + '=';
      const cookieValue = document.cookie.split(';');
      for (let i = 0; i < cookieValue.length; i++) {
        let c = cookieValue[i];
        while (c.indexOf(' ') == 0) {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(cookieName) == 0) {
          return c.substring(cookieName.length, c.length).trim();
        }
      }
      return null;
    }
  }
  createData(name: any, value: any, expire: any) {
    let expires = '';
    if (expire) {
      let date = new Date();
      date.setTime(date.getTime() + (expire * 24 * 60 * 60 * 1000));
      expires = '; expires= ' + date.toUTCString();
    }
    value = name + '=' + JSON.stringify(value) + expires + ';  path=/';
    document.cookie = value;
  }
}
