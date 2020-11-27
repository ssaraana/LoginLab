var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState;


export function Form() {
    var _useState = useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        email = _useState2[0],
        setEmail = _useState2[1];

    var _useState3 = useState(''),
        _useState4 = _slicedToArray(_useState3, 2),
        pass = _useState4[0],
        setPass = _useState4[1];

    var login = function login() {
        console.log(email, pass);

        var req = new XMLHttpRequest();
        req.open('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANf7N6dHJOHfsDzsvA_Q5ToVbYssm2d7M');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = function () {
            console.log('res', req.response);
        };
        req.send(JSON.stringify({ email: email, password: pass, returnSecureToken: true }));
    };
    return React.createElement(
        'div',
        { className: 'main' },
        React.createElement(
            'form',
            null,
            React.createElement(
                'h1',
                null,
                '\u041D\u044D\u0432\u0442\u0440\u044D\u0445'
            ),
            React.createElement(
                'div',
                null,
                React.createElement('img', { src: '/img/login.jpg', width: '100', height: '100' })
            ),
            React.createElement(
                'label',
                null,
                '\u0426\u0430\u0445\u0438\u043C \u0448\u0443\u0443\u0434\u0430\u043D:'
            ),
            React.createElement('br', null),
            React.createElement('input', { type: 'email', placeholder: 'Email@gmail.com', className: 'husnegt', onChange: function onChange(e) {
                    return setEmail(e.target.value);
                } }),
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                '\u041D\u0443\u0443\u0446 \u04AF\u0433:'
            ),
            React.createElement('br', null),
            React.createElement('input', { type: 'password', className: 'husnegt', id: 'text', placeholder: 'Enter a Password', onChange: function onChange(e) {
                    return setPass(e.target.value);
                } }),
            React.createElement('br', null),
            React.createElement(
                'button',
                { className: 'tovch', id: 'submit', onClick: login },
                '\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445'
            )
        )
    );
}