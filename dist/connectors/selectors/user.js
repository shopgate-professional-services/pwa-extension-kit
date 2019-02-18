"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserId = exports.getUserLastName = void 0;

var _reselect = require("reselect");

var _user = require("@shopgate/pwa-common/selectors/user");

var getUserLastName = (0, _reselect.createSelector)(_user.getUserData, function (data) {
  if (!data) {
    return null;
  }

  return data.lastName;
});
exports.getUserLastName = getUserLastName;
var getUserId = (0, _reselect.createSelector)(_user.getUserData, function (data) {
  if (!data) {
    return null;
  }

  return data.id;
});
exports.getUserId = getUserId;