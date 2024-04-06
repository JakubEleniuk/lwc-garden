import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sidebar.css";

import _implicitScopedStylesheets from "./sidebar.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="main${0}"${2}><h1${3}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.27 19"${3}><path d="m17.01,0h-4.01C1.71,0,.01,6.26,0,10c0,.91.01,2.9,1.62,4.95-.27.92-.49,1.89-.6,2.94-.06.55.33,1.04.88,1.1.04,0,.07,0,.11,0,.5,0,.94-.38.99-.89.08-.75.23-1.44.39-2.11h2.61c5.13,0,11.38-2.25,12-13V1c0-.55-.45-1-1-1ZM6.01,14h-1.92c1.05-2.29,2.78-3.96,5.33-5.09.5-.22.73-.81.51-1.32s-.81-.73-1.32-.51c-2.8,1.25-4.82,3.08-6.09,5.55-.51-1.07-.52-2.03-.52-2.63.02-5.31,3.72-8,11-8h3.01v.94c-.43,7.44-3.7,11.06-10,11.06Z" fill="hsl(var(--garden-primary, #22c55e))"${3}/><g fill="hsl(var(--garden-foreground, #ffffff))"${3}><path d="m26.86,15.17V3.69h2.06v9.66h5.19v1.82h-7.25Z"${3}/><path d="m36.35,15.17l-3.58-11.48h2.3l2.47,8.83,2.42-8.83h2.22l2.41,8.83,2.51-8.83h2.29l-3.56,11.48h-2.3l-2.44-8.66-2.48,8.66h-2.27Z"${3}/><path d="m55.77,15.34c-1.21,0-2.27-.26-3.17-.77-.9-.51-1.59-1.21-2.06-2.1s-.71-1.9-.71-3.05.24-2.16.72-3.05c.48-.89,1.17-1.59,2.06-2.1.89-.51,1.95-.77,3.16-.77.78,0,1.49.11,2.14.32.65.21,1.27.54,1.88.97l-.79,1.58c-.52-.35-1.04-.62-1.56-.79-.53-.17-1.08-.26-1.67-.26-.78,0-1.46.17-2.03.51-.57.34-1.02.81-1.34,1.43s-.48,1.33-.48,2.16.16,1.53.48,2.14.77,1.09,1.34,1.43c.57.34,1.25.52,2.03.52.58,0,1.14-.09,1.67-.26.53-.17,1.05-.43,1.56-.79l.79,1.58c-.61.44-1.23.76-1.88.97-.65.21-1.36.32-2.14.32Z"${3}/><path d="m71.17,15.34c-1.21,0-2.27-.26-3.17-.77-.9-.51-1.59-1.21-2.06-2.1s-.71-1.9-.71-3.05.24-2.16.72-3.05c.48-.89,1.17-1.59,2.06-2.1.89-.51,1.95-.77,3.16-.77.79,0,1.55.11,2.27.32.72.21,1.39.54,1.99.97l-.79,1.58c-.53-.34-1.09-.6-1.68-.78-.59-.18-1.19-.27-1.8-.27-.78,0-1.46.17-2.04.51-.58.34-1.03.82-1.34,1.43-.31.62-.47,1.34-.47,2.15s.16,1.53.47,2.14.76,1.09,1.34,1.43c.58.34,1.26.52,2.04.52.62,0,1.17-.1,1.64-.31s.88-.5,1.21-.89v-1.89h-3.02v-1.68h5.09v4.23c-.5.76-1.17,1.34-2,1.75-.83.41-1.8.62-2.91.62Z"${3}/><path d="m80.4,15.34c-.57,0-1.09-.09-1.54-.28-.45-.18-.8-.46-1.06-.82-.25-.36-.38-.8-.38-1.33s.13-.98.38-1.31.61-.6,1.07-.79c.46-.19.97-.32,1.53-.39l2.73-.34c-.07-.53-.28-.91-.64-1.15s-.79-.36-1.3-.36c-.38,0-.77.07-1.18.21-.41.14-.86.38-1.35.7l-.65-1.46c.48-.35,1-.63,1.56-.82.56-.19,1.13-.28,1.71-.28,1.26,0,2.22.28,2.87.83s.98,1.39.98,2.5v4.92h-1.89v-1.05c-.31.42-.7.73-1.16.93-.46.19-1.02.29-1.68.29Zm.55-1.58c.47,0,.87-.09,1.19-.28.33-.18.58-.43.75-.74.17-.31.26-.64.26-.98v-.29l-2.13.28c-.54.06-.94.17-1.21.34-.27.17-.4.41-.4.73s.13.54.4.7c.27.16.65.24,1.14.24Z"${3}/><path d="m87.47,15.17V7.09h1.89v1.34c.22-.5.52-.87.89-1.1s.8-.34,1.27-.34c.15,0,.29,0,.42.03.13.02.23.04.3.08v1.87c-.16-.03-.32-.06-.48-.09s-.31-.03-.46-.03c-.53,0-.97.21-1.32.63-.35.42-.53,1.02-.53,1.79v3.9h-1.98Z"${3}/><path d="m96.9,15.34c-.73,0-1.39-.17-1.98-.51s-1.05-.82-1.38-1.45-.51-1.38-.51-2.25.17-1.62.51-2.25.8-1.11,1.38-1.45c.58-.34,1.24-.51,1.98-.51.6,0,1.12.11,1.57.33.45.22.81.52,1.07.89V3.69h1.94v11.48h-1.87v-1.17c-.25.41-.61.74-1.08.98-.46.24-1.01.36-1.64.36Zm.43-1.7c.46,0,.86-.1,1.2-.3.34-.2.61-.49.8-.87.19-.38.28-.83.28-1.34s-.1-.96-.29-1.33c-.2-.37-.46-.66-.81-.87s-.74-.31-1.19-.31-.85.1-1.19.31-.62.5-.82.87c-.2.37-.29.82-.29,1.33s.1.96.29,1.34c.19.38.47.67.82.87.35.2.75.3,1.19.3Z"${3}/><path d="m107.82,15.34c-.83,0-1.57-.16-2.23-.48s-1.19-.79-1.58-1.42c-.39-.62-.58-1.39-.58-2.31,0-.86.18-1.6.54-2.23s.86-1.12,1.49-1.46c.63-.34,1.33-.52,2.11-.52s1.5.15,2.1.46c.59.3,1.06.72,1.38,1.25s.49,1.13.49,1.8c0,.2-.03.41-.08.65s-.12.44-.2.6h-5.86c.06.43.2.8.43,1.11s.53.53.89.69c.37.15.8.23,1.31.23s.96-.08,1.37-.23c.41-.16.8-.36,1.18-.63l.62,1.41c-.46.35-.97.62-1.53.81-.56.18-1.18.28-1.84.28Zm-2.42-5.07h4.12s.02-.05.03-.07c0-.02,0-.06,0-.1,0-.32-.07-.6-.22-.84-.15-.24-.36-.43-.64-.56-.28-.13-.64-.2-1.08-.2-.37,0-.7.07-1.01.21s-.56.35-.76.62c-.21.27-.35.58-.45.94Z"${3}/><path d="m113.45,15.17V7.09h1.89v1.12c.24-.4.58-.72,1.01-.95.44-.23.97-.34,1.6-.34.93,0,1.65.26,2.17.79s.78,1.34.78,2.44v5.02h-1.98v-4.73c0-.62-.13-1.08-.38-1.37s-.64-.45-1.17-.45c-.62,0-1.1.21-1.44.62-.34.41-.52,1-.52,1.75v4.18h-1.98Z"${3}/></g></svg><span class="sr-only${0}"${2}>LWC Garden</span></h1><span class="button-container${0}"${2}><button class="icon-button${0}" aria-label="Search" title="Search"${2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-search${0}"${2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${3}/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"${3}/><path d="M21 21l-6 -6"${3}/></svg></button><button class="icon-button${0}" aria-label="Toggle theme" title="Toggle theme"${"a22:data-theme"}${2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-moon${0}"${2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${3}/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"${3}/></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sun${0}"${2}><path stroke="none" d="M0 0h24v24H0z" fill="none"${3}/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"${3}/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"${3}/></svg></button></span></div>`;
const $fragment2 = parseFragment`<summary${"a0:title"}${3}><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"${3}><path class="closed${0}" fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"${2}/><path class="open${0}" fill="currentColor" d="M5 11v2h14v-2z"${2}/></svg><span${3}>${"t5"}</span></summary>`;
const $fragment3 = parseFragment`<li${3}><a${"a1:data-name"}${"a1:data-is-active"}${"a1:href"}${"a1:title"}${3}>${"t2"}</a></li>`;
const $fragment4 = parseFragment`<li${3}>No modules found</li>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "details-container": true
  },
  key: 3
};
const stc2 = {
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, k: api_key, d: api_dynamic_text, i: api_iterator, h: api_element, fr: api_fragment} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("nav", stc0, [api_static_fragment($fragment1, 2, [api_static_part(17, {
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleSearchClick))
    }
  }, null), api_static_part(22, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleToggleTheme))
    },
    attrs: {
      "data-theme": $cmp.theme
    }
  }, null)]), api_element("div", stc1, [$cmp.modulesByCategory ? api_fragment(4, api_iterator($cmp.modulesByCategory, function (category) {
    return api_element("details", {
      attrs: {
        "data-category": category.label
      },
      key: api_key(5, category.label),
      on: {
        "toggle": _m2 || ($ctx._m2 = api_bind($cmp.handleToggleCategory))
      }
    }, [api_static_fragment($fragment2, 7, [api_static_part(0, {
      attrs: {
        "title": category.label
      }
    }, null), api_static_part(5, null, " " + api_dynamic_text(category.label) + " ")]), api_element("ul", stc2, api_iterator(category.components, function (item) {
      return api_static_fragment($fragment3, api_key(10, item.label), [api_static_part(1, {
        on: {
          "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClickModule))
        },
        attrs: {
          "data-name": item.name,
          "data-is-active": item.isActive,
          "href": item.href,
          "title": item.label
        }
      }, null), api_static_part(2, null, api_dynamic_text(item.label))]);
    }))]);
  }), 0) : api_fragment(4, [api_static_fragment($fragment4, 12)], 0)])])];
  /*LWC compiler v6.5.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-36cfo14e2ac";
tmpl.legacyStylesheetToken = "garden-sidebar_sidebar";
freezeTemplate(tmpl);
