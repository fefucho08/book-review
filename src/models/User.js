export default class User {
    constructor({
        id,
        username,
        firstname,
        lastname,
        email,
        password,
        bookmarks = [],
    }) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.bookmarks = bookmarks;
    }
}
