(this["webpackJsonpshake-app"]=this["webpackJsonpshake-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(40)},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),c=(n(35),n(53)),i=n(54),s=n(21),u=n(22),m=n(24),h=n(23),d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={date:new Date,x:0,y:0,z:0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("devicemotion",(function(t){e.setState({x:t.acceleration.x})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Hello, world!"),o.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."),o.a.createElement("h2",null,"Accelerometer:"),o.a.createElement("p",null,"x: ",this.state.x),o.a.createElement("p",null,"y: ",this.state.y),o.a.createElement("p",null,"z: ",this.state.z))}}]),n}(o.a.Component);var p=function(){return o.a.createElement(i.a,{color:"text.primary"},o.a.createElement(d,null),o.a.createElement(c.a,{variant:"contained",color:"primary"},"Hello World"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f90b4fb5.chunk.js.map