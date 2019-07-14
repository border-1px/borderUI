(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{375:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("pre",[a("code",[t._v('<bo-uploader \n  :action="http://abc.com/up.php"\n  @onAllFilesUploaded = "onAllFilesUploaded"\n  @onFileUpload = "onFileUpload"\n></bo-uploader>\n')])])])],1)],1),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("有的时候我们想自己处理逻辑，上传base64编码给后端，我们可以这样配置：")]),t._v(" "),t._m(6),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("pre",[a("code",[t._v('<bo-uploader \n  :action="http://abc.com/up.php"\n  :autoUpload = false\n  @onFilesBase64 = "onFilesBase64"\n>\n</bo-uploader>\n')])])])],1)],1),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("ul",[e("li",[this._v("默认使用FomData上传(自动)。")]),this._v(" "),e("li",[this._v("使用promise管理多文件的并发上传。")]),this._v(" "),e("li",[this._v("若需要base64上传，需要调用者自己处理上传逻辑。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"代码示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码示例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"基础用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础用法")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      imgArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onAllFilesUploaded")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'所有文件上传完成'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFileUpload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imgArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("onFileUpload")]),t._v("事件"),a("br"),t._v("\n使用"),a("code",[t._v("异步")]),t._v("、"),a("code",[t._v("并发")]),t._v("、"),a("code",[t._v("FormData")]),t._v("上传多文件，每个文件上传完成都会触发一次 "),a("code",[t._v("onFileUpload")]),t._v(" 事件，参数为服务器返回的json数据(假定数据会包含图片的外网访问地址)。由于后端返回数据格式不一，这里的逻辑需要交给调用者自己处理,比如push进数组，等待和其他表单内容一块提交。")]),t._v(" "),a("li",[a("code",[t._v("onAllFilesUploaded")]),t._v("事件"),a("br"),t._v("\n该事件触发表明，所有文件已上传完成，便于进行后续操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"自己处理上传逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自己处理上传逻辑","aria-hidden":"true"}},[this._v("#")]),this._v(" 自己处理上传逻辑")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("设置 "),a("code",[t._v("autoUpload")]),t._v(" 为 "),a("code",[t._v("false")]),t._v("  (组件默认FormData自动上传)")]),t._v(" "),a("li",[t._v("监听 "),a("code",[t._v("onFilesBase64")]),t._v(" 事件")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFilesBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arrBase64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arrBase64 是所有文件的base64编码数组，上传逻辑需要自己处理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" props")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否可用")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("accept")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文件过滤器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("image/*")])]),t._v(" "),a("tr",[a("td",[t._v("maxSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可上传的文件最大尺寸 （单位：M）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("action")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文件上传地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",[t._v("quality")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片品质")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("threshold")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文件体积超过多少时开启压缩功能 (单位：KB)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2048")])]),t._v(" "),a("tr",[a("td",[t._v("autoUpload")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开启自动上传（二进制FormData）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("maxImgWidth")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片最大宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("800")])]),t._v(" "),a("tr",[a("td",[t._v("withCredentials")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("跨域cookie")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" events")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("onFileUpload")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单个文件上传成功")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器返回json")])]),t._v(" "),a("tr",[a("td",[t._v("onFileError")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单个文件上传失败")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器返回json")])]),t._v(" "),a("tr",[a("td",[t._v("onAllFilesUploaded")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有文件上传完成")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("二进制文件数据")])]),t._v(" "),a("tr",[a("td",[t._v("onFilesBase64")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所选文件的base64编码数组")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("base64组成的数组")])])])])}],!1,null,null,null);e.default=s.exports}}]);