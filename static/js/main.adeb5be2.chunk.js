(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(8),c=s.n(n),o=s(6),i=s(2),r=s(3),l=s(5),h=s(4),u=s(0),d=function(e){return Object(u.jsx)("div",{children:e.snakeDots.map((function(e,t){var s={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(u.jsx)("div",{className:"snake",style:s},t)}))})},p=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return Object(u.jsx)("div",{className:"apple",style:t})},f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).play=function(){a.setState({play:!0,pause:!1}),a.audio.play()},a.pause=function(){a.setState({play:!1,pause:!0}),a.audio.pause()},a.state={play:!1,pause:!0},a.url="https://topmyz.com/uploads/files/2019-11/1574054851_s108lc0u0cf6.mp3",a.audio=new Audio(a.url),a}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:this.play,children:"Play \u266a"}),Object(u.jsx)("button",{onClick:this.pause,children:"Pause \u266a"})]})}}]),s}(a.Component),j=s.p+"static/media/rs_school_js.ad178c0d.svg",k=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("div",{className:"footer-author",children:[Object(u.jsx)("span",{children:"by"}),Object(u.jsx)("a",{href:"https://github.com/korytsa",className:"footer__link",children:"Anna Korytko"}),Object(u.jsx)("span",{children:"2021"})]}),Object(u.jsxs)("a",{href:"https://rs.school/react/",className:"footer-rsschool",children:[Object(u.jsx)("img",{src:j,alt:"rs school",className:"footer-rsschool__img"}),Object(u.jsx)("span",{className:"footer-rsschool__link footer__link",children:"RS School"})]})]})}}]),s}(a.Component),b=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},O={apple:b(),speed:200,direction:"DOWN",snakeDots:[[0,0],[2,0]]},v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state=O,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(o.a)(e.state.snakeDots),s=t[t.length-1];switch(e.state.direction){case"RIGHT":s=[s[0]+2,s[1]];break;case"LEFT":s=[s[0]-2,s[1]];break;case"DOWN":s=[s[0],s[1]+2];break;case"UP":s=[s[0],s[1]-2]}t.push(s),t.shift(),e.setState({snakeDots:t})},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(o.a)(this.state.snakeDots),s=t[t.length-1];t.pop(),t.forEach((function(t){s[0]==t[0]&&s[1]==t[1]&&e.onGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.apple;e[0]==t[0]&&e[1]==t[1]&&(this.setState({apple:b()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(o.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakeDots.length)),this.setState(O)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"all__field",children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"game__field",children:[Object(u.jsx)(d,{snakeDots:this.state.snakeDots}),Object(u.jsx)(p,{dot:this.state.apple})]}),Object(u.jsx)(k,{})]})}}]),s}(a.Component);s(14);c.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.adeb5be2.chunk.js.map