"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

// Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

var createMenuItem = function (route) {
    if (route.getChildRoutes || route.getIndexRoute) {
        console.warn('getChildRoutes and getIndexRoute are not supported yet.');
        return;
    }
    if (route.path === '/') {
        return createMenuItemFromRoutes(route.childRoutes);
    }
    if (!route.childRoutes && !route.getChildRoutes) {
        return (React.createElement(Menu.Item, { key: route.path },
            React.createElement(Link, { to: route.path }, route.title)));
    }
    else {
        return (React.createElement(Menu.SubMenu, { key: route.path, title: route.title }, createMenuItemFromRoutes(route.childRoutes)));
    }
};
var createMenuItemFromRoutes = function (childRoutes) {
    if (childRoutes === void 0) { childRoutes = []; }
    return childRoutes.map(function (route) {
        return createMenuItem(route);
    });
};

var createReactRouterMenu = function (route) {
    var r = createMenuItem(route);
    return function (props) { return (React.createElement(Menu, __assign({}, props), r)); };
};

export default {'createReactRouterMenu':createReactRouterMenu};
