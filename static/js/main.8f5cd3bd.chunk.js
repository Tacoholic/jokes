(this.webpackJsonpjokes=this.webpackJsonpjokes||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(15),r=a.n(s),l=(a(28),a(4)),i=a(5),c=a(6),u=a(7),m=a(1),d=(a(14),a(29),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).inputChange=function(e){var t=e.target.value;n.setState((function(){return{firstName:t}}))},n.displayNameHandler=function(){n.setState((function(e){return{submitedFirstName:e.firstName,showModal:!1}}))},n.state={showModal:!0,firstName:"",submittedName:"",submitedFirstName:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return o.a.createElement("div",null,e?o.a.createElement("div",{className:"my-modal"},o.a.createElement("h1",null,"Welcome to the joke machine!"),o.a.createElement("p",null,"Please enter your name"),o.a.createElement("form",null,o.a.createElement("input",{autoFocus:!0,className:"new task",placeholder:"Name",type:"text",name:"firstName",onChange:this.inputChange})),o.a.createElement("button",{className:"modal-btn",type:"button",disabled:!this.state.firstName,onClick:this.displayNameHandler},"Submit")):null,o.a.createElement("div",{class:"homepage"},this.state.submitedFirstName&&o.a.createElement("h1",null,"Hello, ",this.state.submitedFirstName,"!")),o.a.createElement("div",{class:"homepage"},o.a.createElement("p",null,"Please select a category ")),o.a.createElement("div",{class:"homepage"},o.a.createElement(m.b,{to:"/ProgrammingJokes"},o.a.createElement("button",{class:"btn programming"},"Programming Jokes"))),o.a.createElement("div",{class:"homepage"},o.a.createElement(m.b,{to:"/SportsJokes"},o.a.createElement("button",{class:"btn sports"},"Sports Jokes"))),o.a.createElement("div",{class:"homepage"},o.a.createElement(m.b,{to:"/DadJokes"},o.a.createElement("button",{class:"btn dad"},"Dad Jokes"))),o.a.createElement("div",{class:"homepage"},o.a.createElement(m.b,{to:"/SpanishJokes"},o.a.createElement("button",{class:"btn spanish"},"Chistes en \xf1"))))}}]),a}(o.a.Component)),h=a(9),b=(a(35),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getJokes=n.getJokes.bind(Object(h.a)(n)),n.state={joke:null},n}return Object(i.a)(a,[{key:"getJokes",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com/",{headers:{"Content-Type":"appliction/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(e),e.setState({joke:t})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("ul",null,this.state.joke&&o.a.createElement("div",{key:this.state.joke.id},o.a.createElement("div",{class:"flex"},o.a.createElement("p",null,this.state.joke.joke)))),o.a.createElement("div",{class:"flex"},o.a.createElement("button",{class:"btn joke",onClick:this.getJokes},"Click here for joke")),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/ProgrammingJokes"},o.a.createElement("button",{class:"programming"},"Programming Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/SportsJokes"},o.a.createElement("button",{class:"btn sports"},"Sports Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/SpanishJokes"},o.a.createElement("button",{class:"btn spanish"},"Chistes en \xf1"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/"},o.a.createElement("button",{class:"btn home"},"Home Page"))))}}]),a}(n.Component)),p=[{id:"1",question:"What did the baseball glove say to the ball?",answer:"Catch ya later!"},{id:"2",question:"What are the rules for zebra baseball?",answer:"Three stripes and you\u2019re out."},{id:"3",question:"Why are umpires always overweight?",answer:"It\u2019s their job to clean their plates."},{id:"4",question:"Which baseball player holds water?",answer:"The pitcher"},{id:"5",question:"How do baseball players keep in touch?",answer:"They touch base every once in a while."},{id:"6",question:"Why can\u2019t basketball players go on vacation?",answer:"They aren\u2019t allowed to travel."},{id:"7",question:"What do you call twelve millionaires gathered around the TV to watch the NBA Finals?",answer:"The Chicago Bulls"},{id:"8",question:"Why can't Aaron Rogers use the phone anymore?",answer:"Because he can't find the receiver."},{id:"9",question:"Why do the Germans always get beat by the Canadians in hockey?",answer:"Canadians bring the \u201ceh\u201d game, while Germans bring their wurst."},{id:"10",question:"What do soccer referees send during the holidays?",answer:"Yellow cards."},{id:"11",question:"What does a Dallas Cowboys fan do when his team has won the Super Bowl?",answer:"He turns off the PlayStation."},{id:"12",question:"Why dpn't the Cubs have a website?",answer:"They can't get 3 W's in a row"},{id:"13",question:"Whats the difference between the Chicago White Sox and a mosquito?",answer:"A mosquito stops sucking."},{id:"14",question:"Does anyone know what they call winning teams in Chicago",answer:"Visitors"},{id:"15",question:"Why do Packer fans smell so bad?",answer:"So blind people can hate them as well."},{id:"16",question:"Trump's favorite baseball team is the Yankees",answer:"Except during the draft, then it's the Dodgers."},{id:"17",question:"How do you keep the Detroit Lions out of your front yard?",answer:"Put up goal posts."},{id:"18",question:"Why did the young boy ask his parents to take him to the Cowboys\u2019 AT&T Stadium during the tornado warning?",answer:"He said, \u201cThere\u2019s never a touchdown there."},{id:"19",question:"Why didn\u2019t your neighbor\u2019s dog want to play football?",answer:"It was a boxer."},{id:"20",question:"Why didn\u2019t your neighbor\u2019s dog want to play football?",answer:"It was a boxer."}],E={randomJoke:[]},k=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getRandomJoke=n.getRandomJoke.bind(Object(h.a)(n)),n.state=E,n}return Object(i.a)(a,[{key:"getRandomJoke",value:function(){this.setState({randomJoke:p[p.length*Math.random()<<0]})}},{key:"render",value:function(){var e=this.state.randomJoke;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"flex"},o.a.createElement("p",null,e.question)),o.a.createElement("div",{class:"flex"},o.a.createElement("p",null,e.answer)),o.a.createElement("div",{class:"flex"},o.a.createElement("button",{class:"joke",onClick:this.getRandomJoke},"Click here for joke ")),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/ProgrammingJokes"},o.a.createElement("button",{class:"btn programming"},"Programming Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/DadJokes"},o.a.createElement("button",{class:"btn dad"},"Dad Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/SpanishJokes"},o.a.createElement("button",{class:"btn spanish"},"Chistes en \xf1"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/"},o.a.createElement("button",{class:"btn home"},"Home Page"))))}}]),a}(o.a.Component),g=(a(36),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=n.getData.bind(Object(h.a)(n)),n.state={isLoaded:!1,error:null,jokes:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){if(4===t.readyState)if(200===t.status){var a=t.responseText,n=JSON.parse(a);e.setState((function(e){return{isLoaded:!0,jokes:n}}))}else e.setState({isLoaded:!0,error:t.responseText})})),t.open("GET"," https://sv443.net/jokeapi/v2/joke/Programming",!0),t.send()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("ul",null,this.state.jokes&&o.a.createElement("div",{key:this.state.jokes.id},o.a.createElement("div",{class:"flex"},o.a.createElement("p",null,this.state.jokes.setup)),o.a.createElement("div",{class:"flex"},o.a.createElement("p",null,this.state.jokes.delivery)))),o.a.createElement("div",{class:"flex"},o.a.createElement("button",{class:"btn joke",onClick:this.getData},"Click here for joke")),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/SportsJokes"},o.a.createElement("button",{class:"btn sports"},"Sports Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/DadJokes"},o.a.createElement("button",{class:"btn dad"},"Dad Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/SpanishJokes"},o.a.createElement("button",{class:"btn spanish"},"Chistes en \xf1"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/"},o.a.createElement("button",{class:"btn home"},"Home Page"))))}}]),a}(o.a.Component)),f=[{id:1,question:"\xbfPor qu\xe9 las focas del circo miran siempre hacia arriba?",answer:"Porque es donde est\xe1n los focos."},{id:2,question:"\xbfSabes c\xf3mo se queda un mago despu\xe9s de comer?",answer:"Magordito"},{id:3,question:"Buenos d\xedas, me gustar\xeda alquilar Batman Forever",answer:"No es posible, tiene que devolverla tomorrow."},{id:4,question:"\xbfQu\xe9 le dice un techo a otro?",answer:"Techo de menos."},{id:5,question:"\xbfCu\xe1l es la fruta m\xe1s divertida?",answer:"La naranja ja ja ja ja"},{id:6,question:"\xbfQu\xe9 le dice una iguana a su hermana gemela?",ansser:"Somos iguanitas"},{id:7,question:"\xbfPor qu\xe9 se suicid\xf3 el libro de matem\xe1ticas?",answer:"Porque ten\xeda muchos problemas."},{id:8,question:"\xbfQu\xe9 le dice un huevo a una sart\xe9n?",answer:"Me tienes frito."},{id:9,question:"\xbfQu\xe9 le dice un \xe1rbol a otro?",answer:"\xa1Qu\xe9 pasa tronco!"},{id:10,question:"\xbfPor qu\xe9 el mar no se seca?",answer:"Porque no tiene toalla."},{id:11,question:"\xbfC\xf3mo se llama el primo vegano de Bruce Lee?",answer:"Broco Lee."},{id:12,question:"\xbfQu\xe9 son 50 f\xedsicos y 50 qu\xedmicos juntos?",answer:"Pues 100tificos."},{id:13,question:"Hola, \xbftienen libros para el cansancio?",answer:"S\xed, pero est\xe1n agotados."},{id:14,question:" \xbfQu\xe9 hace un perro con un taladro?",answer:"Taladrando."},{id:15,question:"\xbfSabes por qu\xe9 no se puede discutir con un DJ?",answer:"Porque siempre est\xe1n cambiando de tema."},{id:16,question:"\xbfPor qu\xe9 Bob Esponja no va al gimnasio?",answer:"Porque ya est\xe1 cuadrado."},{id:17,question:"\xbfQu\xe9 es un pelo en una cama?",answer:"El bello durmiente."},{id:18,question:"\xbfC\xf3mo se despiden los qu\xedmicos?",answer:"\xc1cido un placer"},{id:19,question:"\xbfQu\xe9 hacen dos vascos encima de una nube?",answer:"Chubascos."},{id:20,question:"\xbfQu\xe9 le dice una morsa a otra morsa?",answer:"\xbfAlmorsamos o qu\xe9?"}],v=(a(37),{randomJoke:[]}),w=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getRandomJoke=n.getRandomJoke.bind(Object(h.a)(n)),n.state=v,n}return Object(i.a)(a,[{key:"getRandomJoke",value:function(){this.setState({randomJoke:f[f.length*Math.random()<<0]})}},{key:"render",value:function(){var e=this.state.randomJoke;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{class:"flex"},o.a.createElement("p",null," ",e.question," ")),o.a.createElement("div",{class:"flex"},o.a.createElement("p",null," ",e.answer," ")),o.a.createElement("div",{class:"flex"},o.a.createElement("button",{class:"joke",onClick:this.getRandomJoke},"Oprime aqu\xed para el chiste")),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/ProgrammingJokes"},o.a.createElement("button",{class:"btn programming"},"Programming Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/DadJokes"},o.a.createElement("button",{class:"btn sports"}," Sports Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/DadJokes"},o.a.createElement("button",{class:"btn dad"}," Dad Jokes"))),o.a.createElement("div",{class:"flex"},o.a.createElement(m.b,{to:"/"},o.a.createElement("button",{class:"btn home"},"Home Page"))))}}]),a}(o.a.Component),y=a(11),j=(a(38),document.getElementById("modal")),q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).element=document.createElement("div"),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){j.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){j.removeChild(this.element)}},{key:"render",value:function(){return Object(s.createPortal)(this.props.children,this.element)}}]),a}(o.a.Component);var J=function(){return o.a.createElement("main",null,o.a.createElement(q,null),o.a.createElement(y.c,null,o.a.createElement(y.a,{path:"/DadJokes",component:b}),o.a.createElement(y.a,{path:"/SportsJokes",component:k}),o.a.createElement(y.a,{path:"/ProgrammingJokes",component:g}),o.a.createElement(y.a,{path:"/SpanishJokes",component:w}),o.a.createElement(y.a,{path:"/",component:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8f5cd3bd.chunk.js.map