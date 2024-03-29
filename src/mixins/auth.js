import moment from 'moment'

export const setLocalStorage = (responseObj) => {
    const expires = moment().add(responseObj.expiresIn);

    localStorage.setItem('token', responseObj.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
}

export const isLoggedIn = () => {
    return moment().isBefore(getExpiration());
}

export const isLoggedOut = () => {
    return !isLoggedIn();
}

export const getExpiration = () => {
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
}