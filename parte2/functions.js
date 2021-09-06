const functions = {
    add: (num1, num2) => num1 + num2,

    /* Same function, without arrow function syntax
    add2: function (num1, num2) {
        return num1 + num2;
    }
    */

    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Brad' }
        user['lastName'] = 'Traversy';
        return user;
    }
}

module.exports = functions;