(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(a,s,e){"use strict";e.r(s);var o=e(0),t=Object(o.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"deploy-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-command"}},[a._v("#")]),a._v(" Deploy Command")]),a._v(" "),e("p",[a._v("This command deploy your migration workflows (same way as migrations in Laravel).")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan migrate:deploy "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--versions"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Options and arguments:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("--versions")]),a._v(": List of versions to be deployed.")])]),a._v(" "),e("p",[a._v("Remember that a migration workflow class name look like this: "),e("code",[a._v("MyWorkflow_develop_2020_02_01_205639")]),a._v("\nSimple algorithm:")]),a._v(" "),e("ul",[e("li",[a._v("User input versions to be deployed (Ex: develop)")]),a._v(" "),e("li",[a._v("Command should look for all "),e("strong",[a._v("develop")]),a._v(" migration workflow files.")]),a._v(" "),e("li",[a._v("Sort found migration workflows in ascending order.")]),a._v(" "),e("li",[a._v("For each migration workflow, if it not in database, execute all it's step, and then save it into database.")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Each migration workflow has it's own "),e("strong",[a._v("transaction")]),a._v(", so if a migration workflow fails (some migration file or seed throws an exception), then, deploy stops and all failed migration workflow  changes are rollbacked.")])]),a._v(" "),e("h2",{attrs:{id:"all-versions-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-versions-deploy"}},[a._v("#")]),a._v(" All Versions Deploy")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan migrate:deploy\n")])])]),e("p",[a._v("Deploy all migration workflows in ascending order.")]),a._v(" "),e("h2",{attrs:{id:"single-version-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-version-deploy"}},[a._v("#")]),a._v(" Single Version Deploy")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan migrate:deploy --versions"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("develop\n")])])]),e("p",[a._v("Deploy "),e("strong",[a._v("develop")]),a._v(" migration workflows in ascending order.")]),a._v(" "),e("h2",{attrs:{id:"multiple-version-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-version-deploy"}},[a._v("#")]),a._v(" Multiple Version Deploy")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan migrate:deploy --versions"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("develop,production\n")])])]),e("p",[a._v("Deploy "),e("strong",[a._v("develop")]),a._v(" and "),e("strong",[a._v("production")]),a._v(" migration workflows in ascending order.")])])}),[],!1,null,null,null);s.default=t.exports}}]);