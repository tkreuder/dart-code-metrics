"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5326],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(f,o(o({ref:a},m),{},{components:t})):r.createElement(f,o({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7995:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(7462),n=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_label:"Overview",sidebar_position:0},l="Rules overview",p={unversionedId:"rules/overview",id:"rules/overview",title:"Rules overview",description:"Rules are grouped by a category to help you understand their purpose.",source:"@site/docs/rules/overview.md",sourceDirName:"rules",slug:"/rules/overview",permalink:"/docs/rules/overview",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Overview",sidebar_position:0},sidebar:"sidebar",previous:{title:"Check unused l10n",permalink:"/docs/cli/check-unused-l10n"},next:{title:"Avoid collection methods with unrelated types",permalink:"/docs/rules/common/avoid-collection-methods-with-unrelated-types"}},m={},c=[{value:"Common",id:"common",level:2},{value:"Flutter specific",id:"flutter-specific",level:2},{value:"Intl specific",id:"intl-specific",level:2},{value:"Angular specific",id:"angular-specific",level:2}],u={toc:c};function d(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules-overview"},"Rules overview"),(0,i.kt)("p",null,"Rules are grouped by a category to help you understand their purpose."),(0,i.kt)("p",null,"Rules configuration is ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/configuration#configuring-a-rules-entry"},"described here"),"."),(0,i.kt)("h2",{id:"common"},"Common"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-collection-methods-with-unrelated-types"},"avoid-collection-methods-with-unrelated-types")),(0,i.kt)("p",{parentName:"li"},"  Avoid using collection methods with unrelated types, such as accessing a map of integers using a string key.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-dynamic"},"avoid-dynamic")),(0,i.kt)("p",{parentName:"li"},"  Warns when ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," type is used as variable type in declaration, return type of a function, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-global-state"},"avoid-global-state")),(0,i.kt)("p",{parentName:"li"},"  Warns about usage mutable global variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-ignoring-return-values"},"avoid-ignoring-return-values")),(0,i.kt)("p",{parentName:"li"},"  Warns when a return value of a method or function invocation or a class instance property access is not used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-late-keyword"},"avoid-late-keyword")),(0,i.kt)("p",{parentName:"li"},"  Warns when a field or variable is declared with a ",(0,i.kt)("inlineCode",{parentName:"p"},"late")," keyword.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-missing-enum-constant-in-map"},"avoid-missing-enum-constant-in-map")),(0,i.kt)("p",{parentName:"li"},"  Warns when a enum constant is missing in a map declaration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-nested-conditional-expressions"},"avoid-nested-conditional-expressions")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Warns about nested conditional expressions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-non-ascii-symbols"},"avoid-non-ascii-symbols")),(0,i.kt)("p",{parentName:"li"},"  Warns when a string literal contains non ascii characters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-non-null-assertion"},"avoid-non-null-assertion")),(0,i.kt)("p",{parentName:"li"},"  Warns when non null assertion operator (or \u201cbang\u201d operator) is used for a property access or method invocation. The operator check works at runtime and it may fail and throw a runtime exception.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-throw-in-catch-block"},"avoid-throw-in-catch-block")),(0,i.kt)("p",{parentName:"li"},"  Warns when call ",(0,i.kt)("inlineCode",{parentName:"p"},"throw")," in a catch block.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unnecessary-type-assertions"},"avoid-unnecessary-type-assertions")),(0,i.kt)("p",{parentName:"li"},"  Warns about unnecessary usage of 'is' and 'whereType' operators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unnecessary-type-casts"},"avoid-unnecessary-type-casts")),(0,i.kt)("p",{parentName:"li"},"  Warns about unnecessary usage of 'as' operators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unrelated-type-assertions"},"avoid-unrelated-type-assertions")),(0,i.kt)("p",{parentName:"li"},"  Warns about unrelated usages of 'is' operators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/avoid-unused-parameters"},"avoid-unused-parameters")),(0,i.kt)("p",{parentName:"li"},"  Checks for unused parameters inside a function or method body.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/ban-name"},"ban-name")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/ban-name#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Configure some names that you want to ban.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/binary-expression-operand-order"},"binary-expression-operand-order")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Warns when a literal value is on the left hand side in a binary expressions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/double-literal-format"},"double-literal-format")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Checks that double literals should begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"0.")," instead of just ",(0,i.kt)("inlineCode",{parentName:"p"},"."),", and should not end with a trailing ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/format-comment"},"format-comment")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/format-comment#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"Prefer format comments like sentences.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering"},"member-ordering")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Enforces ordering for a class members.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering-extended"},"member-ordering-extended")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/member-ordering-extended#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Enforces ordering for a class members.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/newline-before-return"},"newline-before-return")),(0,i.kt)("p",{parentName:"li"},"  Enforces blank line between statements and return in a block.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-boolean-literal-compare"},"no-boolean-literal-compare")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Warns on comparison to a boolean literal, as in x == true.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-empty-block"},"no-empty-block")),(0,i.kt)("p",{parentName:"li"},"  Disallows empty blocks except catch clause block.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-equal-arguments"},"no-equal-arguments")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,i.kt)("p",{parentName:"li"},"  Warns when equal arguments passed to a function or method invocation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-equal-then-else"},"no-equal-then-else")),(0,i.kt)("p",{parentName:"li"},"  Warns when if statement has equal then and else statements or conditional expression has equal then and else expressions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-magic-number"},"no-magic-number")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-magic-number#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Warns against using number literals outside of named constants or variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/no-object-declaration"},"no-object-declaration")),(0,i.kt)("p",{parentName:"li"},"  Warns when a class member is declared with Object type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-async-await"},"prefer-async-await")),(0,i.kt)("p",{parentName:"li"},"  Recommends to use async/await syntax to handle Futures result instead of ",(0,i.kt)("inlineCode",{parentName:"p"},".then()")," invocation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-commenting-analyzer-ignores"},"prefer-commenting-analyzer-ignores")),(0,i.kt)("p",{parentName:"li"},"  Warns when ",(0,i.kt)("inlineCode",{parentName:"p"},"// ignore:")," comments are left without any additional description why this ignore is applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-conditional-expressions"},"prefer-conditional-expressions")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Recommends to use a conditional expression instead of assigning to the same thing or return statement in each branch of an if statement.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-identifier-length"},"prefer-correct-identifier-length")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-identifier-length#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Warns when identifier name length very short or long.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-type-name"},"prefer-correct-type-name")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-correct-type-name#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Type name should only contain alphanumeric characters, start with an uppercase character and span between min-length and max-length characters in length.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-first"},"prefer-first")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Use ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," to gets the first element.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-immediate-return"},"prefer-immediate-return")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Warns when a method or a function returns a variable declared right before the return statement.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-last"},"prefer-last")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Use ",(0,i.kt)("inlineCode",{parentName:"p"},"last")," to gets the last element.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-match-file-name"},"prefer-match-file-name")),(0,i.kt)("p",{parentName:"li"},"  Warns when file name does not match class name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-trailing-comma"},"prefer-trailing-comma")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-trailing-comma#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Check for trailing comma for arguments, parameters, enum values and collections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/tag-name"},"tag-name")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/common/prefer-trailing-comma#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"Warns when tag name does not match class name."))),(0,i.kt)("h2",{id:"flutter-specific"},"Flutter specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/always-remove-listener"},"always-remove-listener")),(0,i.kt)("p",{parentName:"li"},"  Warns when an event listener is added but never removed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-border-all"},"avoid-border-all")),(0,i.kt)("p",{parentName:"li"},"  Avoid using Border.all constructor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-returning-widgets"},"avoid-returning-widgets")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-returning-widgets#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Warns when a method or function returns a Widget or subclass of a Widget.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-unnecessary-setstate"},"avoid-unnecessary-setstate")),(0,i.kt)("p",{parentName:"li"},"  Warns when ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," is called inside ",(0,i.kt)("inlineCode",{parentName:"p"},"initState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," methods and when it is called from a ",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," method that is called inside those methods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/avoid-wrapping-in-padding"},"avoid-wrapping-in-padding")),(0,i.kt)("p",{parentName:"li"},"  Warns when a widget is wrapped in a Padding widget but has a padding settings by itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-const-border-radius"},"prefer-const-border-radius")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Warns when used non const border radius.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-extracting-callbacks"},"prefer-extracting-callbacks")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-extracting-callbacks#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Warns about inline callbacks in a widget tree and suggest to extract them to a widget method.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-single-widget-per-file"},"prefer-single-widget-per-file")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/flutter/prefer-single-widget-per-file#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Warns when a file contains more than a single widget."))),(0,i.kt)("h2",{id:"intl-specific"},"Intl specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/intl/prefer-intl-name"},"prefer-intl-name")," ","\xa0"," ",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,i.kt)("p",{parentName:"li"},"  Recommends to use ClassName_ClassMemberName pattern for Intl methods name argument.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/intl/provide-correct-intl-args"},"provide-correct-intl-args")),(0,i.kt)("p",{parentName:"li"},"  Warns when the Intl.message() invocation has incorrect args."))),(0,i.kt)("h2",{id:"angular-specific"},"Angular specific"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/angular/avoid-preserve-whitespace-false"},"avoid-preserve-whitespace-false")),(0,i.kt)("p",{parentName:"li"},"  Warns when a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," annotation has explicit false value for preserveWhitespace.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/angular/component-annotation-arguments-ordering"},"component-annotation-arguments-ordering")," ","\xa0"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/rules/angular/component-annotation-arguments-ordering#config-example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"}))),(0,i.kt)("p",{parentName:"li"},"  Enforces Angular ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," annotation arguments ordering.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/rules/angular/prefer-on-push-cd-strategy"},"prefer-on-push-cd-strategy")),(0,i.kt)("p",{parentName:"li"},"  Prefer setting changeDetection: ChangeDetectionStrategy.OnPush in Angular ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," annotations."))))}d.isMDXComponent=!0}}]);