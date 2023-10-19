import { fs } from 'fs'

export async function createUsers(users) {
    const users_list = users;
    fs.appendFile('user_list.txt', user_list, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}