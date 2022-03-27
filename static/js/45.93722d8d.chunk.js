"use strict";(self.webpackChunkadoptpet=self.webpackChunkadoptpet||[]).push([[45],{2732:function(e,n,t){t.d(n,{XZ:function(){return I}});var a=t(5971),r=t(9611),i=t(2791),c=t(3990),o=t(5223),l=t(3209),u=t(151),s=t(1856),d=t(3393),f=t(1212);function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}var h=(0,r.kr)({name:"CheckboxGroupContext",strict:!1}),p=(h[0],h[1]);function m(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}a.Ts;var k=["isIndeterminate","isChecked"],C="custom"in u.E?u.E.custom(l.m$.svg):(0,u.E)(l.m$.svg),b=function(e){return i.createElement(C,v({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),i.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},g=function(e){return i.createElement(C,v({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),i.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},y=function(e){var n=e.open,t=e.children;return i.createElement(s.M,{initial:!1},n&&i.createElement(u.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},t))},x=function(e){var n=e.isIndeterminate,t=e.isChecked,a=m(e,k),r=n?g:b;return i.createElement(y,{open:t||n},i.createElement(r,a))},E=["defaultIsChecked","defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function P(e){e.preventDefault(),e.stopPropagation()}var w=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange"],B=(0,l.m$)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),M=(0,l.m$)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative",_disabled:{cursor:"not-allowed"}}}),I=(0,l.Gp)((function(e,n){var t=p(),u=v({},t,e),s=(0,l.jC)("Checkbox",u),h=(0,l.Lr)(e),k=h.spacing,C=void 0===k?"0.5rem":k,b=h.className,g=h.children,y=h.iconColor,I=h.iconSize,z=h.icon,_=void 0===z?i.createElement(x,null):z,L=h.isChecked,D=h.isDisabled,R=void 0===D?null==t?void 0:t.isDisabled:D,S=h.onChange,O=m(h,w),A=L;null!=t&&t.value&&h.value&&(A=t.value.includes(h.value));var F=S;null!=t&&t.onChange&&h.value&&(F=(0,a.PP)(t.onChange,S));var H=function(e){void 0===e&&(e={});var n=(0,d.Kn)(e),t=n.isDisabled,l=n.isReadOnly,u=n.isRequired,s=n.isInvalid,h=n.id,p=n.onBlur,k=n.onFocus,C=n["aria-describedby"],b=e,g=b.defaultIsChecked,y=b.defaultChecked,x=void 0===y?g:y,w=b.isChecked,B=b.isFocusable,M=b.onChange,I=b.isIndeterminate,z=b.name,_=b.value,L=b.tabIndex,D=void 0===L?void 0:L,R=b["aria-label"],S=b["aria-labelledby"],O=b["aria-invalid"],A=m(b,E),F=(0,a.CE)(A,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),H=(0,c.u)(M),N=(0,c.u)(p),T=(0,c.u)(k),j=(0,o.kt)(),q=j[0],K=j[1],U=(0,o.kt)(),V=U[0],X=U[1],$=(0,o.kt)(),Z=$[0],G=$[1],W=(0,i.useRef)(null),J=(0,i.useState)(!0),Y=J[0],Q=J[1],ee=(0,i.useState)(!!x),ne=ee[0],te=ee[1],ae=(0,o.pY)(w,ne),re=ae[0],ie=ae[1];(0,a.ZK)({condition:!!g,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var ce=(0,i.useCallback)((function(e){l||t?e.preventDefault():(re||te(ie?e.target.checked:!!I||e.target.checked),null==H||H(e))}),[l,t,ie,re,I,H]);(0,c.a)((function(){W.current&&(W.current.indeterminate=Boolean(I))}),[I]),(0,o.rf)((function(){t&&K.off()}),[t,K]);var oe=t&&!B,le=(0,i.useCallback)((function(e){" "===e.key&&G.on()}),[G]),ue=(0,i.useCallback)((function(e){" "===e.key&&G.off()}),[G]);(0,c.a)((function(){W.current&&W.current.checked!==ie&&te(W.current.checked)}),[W.current]);var se=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,{ref:n,"data-active":(0,a.PB)(Z),"data-hover":(0,a.PB)(V),"data-checked":(0,a.PB)(ie),"data-focus":(0,a.PB)(q),"data-indeterminate":(0,a.PB)(I),"data-disabled":(0,a.PB)(t),"data-invalid":(0,a.PB)(s),"data-readonly":(0,a.PB)(l),"aria-hidden":!0,onMouseDown:(0,a.v0)(e.onMouseDown,(function(e){e.preventDefault(),G.on()})),onMouseUp:(0,a.v0)(e.onMouseUp,G.off),onMouseEnter:(0,a.v0)(e.onMouseEnter,X.on),onMouseLeave:(0,a.v0)(e.onMouseLeave,X.off)})}),[Z,ie,t,q,V,I,s,l,G,X.off,X.on]),de=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},F,e,{ref:(0,r.lq)(n,(function(e){e&&Q("LABEL"===e.tagName)})),onClick:(0,a.v0)(e.onClick,(function(){var e;Y||(null==(e=W.current)||e.click(),(0,a.T_)(W.current,{nextTick:!0}))})),"data-disabled":(0,a.PB)(t),"data-checked":(0,a.PB)(ie),"data-invalid":(0,a.PB)(s)})}),[F,t,ie,s,Y]),fe=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,{ref:(0,r.lq)(W,n),type:"checkbox",name:z,value:_,id:h,tabIndex:D,onChange:(0,a.v0)(e.onChange,ce),onBlur:(0,a.v0)(e.onBlur,N,K.off),onFocus:(0,a.v0)(e.onFocus,T,K.on),onKeyDown:(0,a.v0)(e.onKeyDown,le),onKeyUp:(0,a.v0)(e.onKeyUp,ue),required:u,checked:ie,disabled:oe,readOnly:l,"aria-label":R,"aria-labelledby":S,"aria-invalid":O?Boolean(O):s,"aria-describedby":C,"aria-disabled":t,style:f.NL})}),[z,_,h,ce,K.off,K.on,N,T,le,ue,u,ie,oe,l,R,S,O,s,C,t,D]),ve=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),v({},e,{ref:n,onMouseDown:(0,a.v0)(e.onMouseDown,P),onTouchStart:(0,a.v0)(e.onTouchStart,P),"data-disabled":(0,a.PB)(t),"data-checked":(0,a.PB)(ie),"data-invalid":(0,a.PB)(s)})}),[ie,t,s]);return{state:{isInvalid:s,isFocused:q,isChecked:ie,isActive:Z,isHovered:V,isIndeterminate:I,isDisabled:t,isReadOnly:l,isRequired:u},getRootProps:de,getCheckboxProps:se,getInputProps:fe,getLabelProps:ve,htmlProps:F}}(v({},O,{isDisabled:R,isChecked:A,onChange:F})),N=H.state,T=H.getInputProps,j=H.getCheckboxProps,q=H.getLabelProps,K=H.getRootProps,U=i.useMemo((function(){return v({opacity:N.isChecked||N.isIndeterminate?1:0,transform:N.isChecked||N.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:I,color:y},s.icon)}),[y,I,N.isChecked,N.isIndeterminate,s.icon]),V=i.cloneElement(_,{__css:U,isIndeterminate:N.isIndeterminate,isChecked:N.isChecked});return i.createElement(M,v({__css:s.container,className:(0,a.cx)("chakra-checkbox",b)},K()),i.createElement("input",v({className:"chakra-checkbox__input"},T({},n))),i.createElement(B,v({__css:s.control,className:"chakra-checkbox__control"},j()),V),g&&i.createElement(l.m$.span,v({className:"chakra-checkbox__label"},q(),{__css:v({marginStart:C},s.label)}),g))}));a.Ts&&(I.displayName="Checkbox")},7692:function(e,n,t){t.d(n,{nJ9:function(){return r},lsl:function(){return i}});var a=t(9983);function r(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"}}]})(e)}function i(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z"}},{tag:"path",attr:{d:"M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"}}]})(e)}},8617:function(e,n,t){t.d(n,{hBs:function(){return r}});var a=t(9983);function r(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}}]})(e)}},4373:function(e,n,t){t.d(n,{UkU:function(){return r}});var a=t(9983);function r(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}}]})(e)}},7425:function(e,n,t){t.d(n,{xuE:function(){return r},IIZ:function(){return i}});var a=t(9983);function r(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"}}]}]})(e)}function i(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"}}]}]})(e)}},1856:function(e,n,t){t.d(n,{M:function(){return m}});var a=t(9388),r=t(2791),i=t(2968),c=t(2199);function o(){var e=(0,r.useRef)(!1);return(0,c.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var l=t(131),u=t(9829),s=t(8174),d=function(e){var n=e.children,t=e.initial,i=e.isPresent,c=e.onExitComplete,o=e.custom,d=e.presenceAffectsLayout,v=(0,u.h)(f),h=(0,s.M)(),p=(0,r.useMemo)((function(){return{id:h,initial:t,isPresent:i,custom:o,onExitComplete:function(e){var n,t;v.set(e,!0);try{for(var r=(0,a.XA)(v.values()),i=r.next();!i.done;i=r.next()){if(!i.value)return}}catch(o){n={error:o}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(n)throw n.error}}null===c||void 0===c||c()},register:function(e){return v.set(e,!1),function(){return v.delete(e)}}}}),d?void 0:[i]);return(0,r.useMemo)((function(){v.forEach((function(e,n){return v.set(n,!1)}))}),[i]),r.useEffect((function(){!i&&!v.size&&(null===c||void 0===c||c())}),[i]),r.createElement(l.O.Provider,{value:p},n)};function f(){return new Map}var v=t(7497),h=t(1475),p=function(e){return e.key||""};var m=function(e){var n=e.children,t=e.custom,l=e.initial,u=void 0===l||l,s=e.onExitComplete,f=e.exitBeforeEnter,m=e.presenceAffectsLayout,k=void 0===m||m,C=(0,a.CR)(function(){var e=o(),n=(0,a.CR)((0,r.useState)(0),2),t=n[0],c=n[1],l=(0,r.useCallback)((function(){e.current&&c(t+1)}),[t]);return[(0,r.useCallback)((function(){return i.ZP.postRender(l)}),[l]),t]}(),1),b=C[0],g=(0,r.useContext)(v.p).forceRender;g&&(b=g);var y=o(),x=function(e){var n=[];return r.Children.forEach(e,(function(e){(0,r.isValidElement)(e)&&n.push(e)})),n}(n),E=x,P=new Set,w=(0,r.useRef)(E),B=(0,r.useRef)(new Map).current,M=(0,r.useRef)(!0);if((0,c.L)((function(){M.current=!1,function(e,n){e.forEach((function(e){var t=p(e);n.set(t,e)}))}(x,B),w.current=E})),(0,h.z)((function(){M.current=!0,B.clear(),P.clear()})),M.current)return r.createElement(r.Fragment,null,E.map((function(e){return r.createElement(d,{key:p(e),isPresent:!0,initial:!!u&&void 0,presenceAffectsLayout:k},e)})));E=(0,a.ev)([],(0,a.CR)(E),!1);for(var I=w.current.map(p),z=x.map(p),_=I.length,L=0;L<_;L++){var D=I[L];-1===z.indexOf(D)&&P.add(D)}return f&&P.size&&(E=[]),P.forEach((function(e){if(-1===z.indexOf(e)){var n=B.get(e);if(n){var a=I.indexOf(e);E.splice(a,0,r.createElement(d,{key:p(n),isPresent:!1,onExitComplete:function(){B.delete(e),P.delete(e);var n=w.current.findIndex((function(n){return n.key===e}));if(w.current.splice(n,1),!P.size){if(w.current=x,!1===y.current)return;b(),s&&s()}},custom:t,presenceAffectsLayout:k},n))}}})),E=E.map((function(e){var n=e.key;return P.has(n)?e:r.createElement(d,{key:p(e),isPresent:!0,presenceAffectsLayout:k},e)})),r.createElement(r.Fragment,null,P.size?E:E.map((function(e){return(0,r.cloneElement)(e)})))}}}]);
//# sourceMappingURL=45.93722d8d.chunk.js.map