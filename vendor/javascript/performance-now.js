// performance-now@2.1.0 downloaded from https://ga.jspm.io/npm:performance-now@2.1.0/lib/performance-now.js

import e from"process";var n={};var r=e;(function(){var e,t,o,f,i,u;if("undefined"!==typeof performance&&null!==performance&&performance.now)n=function(){return performance.now()};else if("undefined"!==typeof r&&null!==r&&r.hrtime){n=function(){return(e()-i)/1e6};t=r.hrtime;e=function(){var e;e=t();return 1e9*e[0]+e[1]};f=e();u=1e9*r.uptime();i=f-u}else if(Date.now){n=function(){return Date.now()-o};o=Date.now()}else{n=function(){return(new Date).getTime()-o};o=(new Date).getTime()}}).call(n);var t=n;export default t;

