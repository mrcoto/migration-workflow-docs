(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"migrate-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate-command"}},[a._v("#")]),a._v(" Migrate Command")]),a._v(" "),t("p",[a._v("This command executes a single migration workflow without checking if it's present in database.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan migrate:workflow "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("--class"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Options and arguments:")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("--class")]),a._v(": Full class name of the migration workflow file (namespace and class name).")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("Each migration workflow has it's own "),t("strong",[a._v("transaction")]),a._v(", so if a migration workflow fails (some migration file or seed throws an exception), then all migration workflow changes are rollbacked.")])]),a._v(" "),t("h2",{attrs:{id:"basic-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-example"}},[a._v("#")]),a._v(" Basic Example")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan migrate:workflow --class"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("MigrationWorkflows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("MyWorkflow_develop_2020_02_01_205630\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("If you are using Windows, then use a simple backslash.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);