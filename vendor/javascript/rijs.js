// rijs@0.9.1 downloaded from https://ga.jspm.io/npm:rijs@0.9.1/index.js

import r from"utilise/client";import o from"rijs.core";import i from"rijs.singleton";import t from"rijs.data";import m from"rijs.css";import e from"rijs.fn";import s from"rijs.sync";import p from"rijs.components";import f from"path";import n from"rijs.sessions";import a from"rijs.serve";import c from"rijs.pages";import j from"rijs.resdir";var l={};const u=r;u&&!window.ripple&&create();l=create;function create(r){const l=o(r);i(l,r);t(l,r);m(l,r);e(l,r);s(l,r);p(l,r);if(!u){r.serve=f.resolve(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname,"client");n(l,r);a(l,r);c(l,r);j(l,r)}return l}var d=l;export default d;

