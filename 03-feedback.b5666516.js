var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(x,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function x(){var e=d();if(j(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-u);return p?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function T(){var e=d(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(p)return f=setTimeout(x,t),y(u)}return void 0===f&&(f=setTimeout(x,t)),a}return t=g(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(d())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};b.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")})),b.textarea.addEventListener("input",t((function(e){const t=y.value,n=S.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:t,message:n}))}),500));const y=b.form.elements.email,S=b.form.elements.message;!function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);y.value=t.email,S.value=t.message}}();
//# sourceMappingURL=03-feedback.b5666516.js.map
