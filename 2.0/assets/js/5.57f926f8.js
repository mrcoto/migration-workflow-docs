(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(a,t,e){"use strict";e.r(t);var s=e(28),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"delete-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-command"}},[a._v("#")]),a._v(" Delete Command")]),a._v(" "),e("p",[a._v("Delete last migration workflow from database and/or from filesystem that match input.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan delete:workflow "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("className"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("v1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Options and arguments:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("className")]),a._v(": Name of your migration workflow.")]),a._v(" "),e("li",[e("strong",[a._v("version")]),a._v(": Version of your migration workflow")]),a._v(" "),e("li",[e("strong",[a._v("--file")]),a._v(": Should the file be removed?")])]),a._v(" "),e("h2",{attrs:{id:"basic-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-example"}},[a._v("#")]),a._v(" Basic Example")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan delete:workflow MyWorkflow develop\n")])])]),e("p",[a._v("This command should look for last workflow that match "),e("strong",[a._v("MyWorkflow")]),a._v(" name and "),e("strong",[a._v("develop")]),a._v(" version, then remove it from database.")]),a._v(" "),e("h2",{attrs:{id:"removing-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removing-file"}},[a._v("#")]),a._v(" Removing File")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan delete:workflow MyWorkflow develop --file\n")])])]),e("p",[a._v("This command should look for last workflow that match "),e("strong",[a._v("MyWorkflow")]),a._v(" name and "),e("strong",[a._v("develop")]),a._v(" version, then remove it from database and filesystem.")])])}),[],!1,null,null,null);t.default=o.exports}}]);