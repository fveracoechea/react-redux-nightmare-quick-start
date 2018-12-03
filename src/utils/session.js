import Cryptr from 'cryptr';


const crypt = new Cryptr('application-key');
const USER = 'user_key';
const TOKEN = 'bearer_key';

export const saveData = (user, bearer) => {
  localStorage.clear();
  try {
    const strigifyUser = JSON.stringify(user);
    localStorage.setItem(USER, crypt.encrypt(strigifyUser));
    localStorage.setItem(TOKEN, crypt.encrypt(bearer));
    return true;
  } catch (error) {
    console.warn('SESSION ERROR: ', error);
    return false;
  }
};

export const getData = () => {
  try {
    const user = JSON.parse(crypt.decrypt(localStorage.getItem(USER)));
    const token = crypt.decrypt(localStorage.getItem(TOKEN));
    return { user, token };
  } catch (error) {
    console.warn('SESSION ERROR: ', error);
    return {};
  }
};
