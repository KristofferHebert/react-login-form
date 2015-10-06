'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsInput = require('components/input');

var _componentsInput2 = _interopRequireDefault(_componentsInput);

var _componentsForm = require('components/form');

var _componentsForm2 = _interopRequireDefault(_componentsForm);

var _componentsLogin = require('components/login');

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsSignup = require('components/signup');

var _componentsSignup2 = _interopRequireDefault(_componentsSignup);

var ReactForm = {
    Input: _componentsInput2['default'],
    Form: _componentsForm2['default'],
    Login: _componentsLogin2['default'],
    Signup: _componentsSignup2['default']
};

exports['default'] = ReactForm;
module.exports = exports['default'];
