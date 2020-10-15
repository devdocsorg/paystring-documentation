(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(7),o=(r(0),r(95)),i={id:"metrics-tutorial",title:"Metrics Tutorial",sidebar_label:"Metrics Tutorial"},c={unversionedId:"metrics-tutorial",id:"metrics-tutorial",isDocsHomePage:!1,title:"Metrics Tutorial",description:"Deploy a PayID server with Docker, and pull PayID metrics into Prometheus",source:"@site/docs/metrics-tutorial.md",permalink:"/payid-documentation/review-apps/segment/2a4c97/metrics-tutorial",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/metrics-tutorial.md",sidebar_label:"Metrics Tutorial",sidebar:"docs",previous:{title:"Get Started with RippleX Dev Kit and PayID",permalink:"/payid-documentation/review-apps/segment/2a4c97/ripplex-dev-kit-payid-get-started"},next:{title:"Reference Implementation Overview",permalink:"/payid-documentation/review-apps/segment/2a4c97/payid-reference-overview"}},s=[{value:"Deploy a PayID server with Docker, and pull PayID metrics into Prometheus",id:"deploy-a-payid-server-with-docker-and-pull-payid-metrics-into-prometheus",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build a Docker container for setting up a PayID server",id:"build-a-docker-container-for-setting-up-a-payid-server",children:[]},{value:"Create Docker network for PayID",id:"create-docker-network-for-payid",children:[]},{value:"Start a Postgres Database",id:"start-a-postgres-database",children:[]},{value:"Start and test the PayID server",id:"start-and-test-the-payid-server",children:[]},{value:"Start Prometheus",id:"start-prometheus",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"deploy-a-payid-server-with-docker-and-pull-payid-metrics-into-prometheus"},"Deploy a PayID server with Docker, and pull PayID metrics into Prometheus"),Object(o.b)("p",null,"In this tutorial, you will deploy a PayID server and run Prometheus locally using Docker, and you will create a configuration file for the PayID server so that PayID metrics are pulled into Prometheus."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Install the following software on your machine, if not already present."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"git"))),Object(o.b)("h3",{id:"build-a-docker-container-for-setting-up-a-payid-server"},"Build a Docker container for setting up a PayID server"),Object(o.b)("p",null,"Run these commands to build a Docker container for a PayID server."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/payid-org/payid.git\ncd payid\ndocker build -t payid-server .\n")),Object(o.b)("h3",{id:"create-docker-network-for-payid"},"Create Docker network for PayID"),Object(o.b)("p",null,"You will run several containers in Docker that must talk to each other. To set up these containers, create a docker network called ",Object(o.b)("inlineCode",{parentName:"p"},"payid-network"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker network create payid-network\n")),Object(o.b)("h3",{id:"start-a-postgres-database"},"Start a Postgres Database"),Object(o.b)("p",null,"To have a PayID server, you require a Postgres database to store PayID accounts and address mappings. To do this, run the postgres database in docker with a default password of ",Object(o.b)("inlineCode",{parentName:"p"},"password"),", and tell the database to use the ",Object(o.b)("inlineCode",{parentName:"p"},"payid-network")," that you previously created. Name this docker container ",Object(o.b)("inlineCode",{parentName:"p"},"payid-postgres"),", so that you can reference the container by name when you connect your PayID server. Note that both the default database and the user are named ",Object(o.b)("inlineCode",{parentName:"p"},"postgres"),", as described at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/_/postgres"}),"Postgres Docker Official Images"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --rm --name payid-postgres --network payid-network -e POSTGRES_PASSWORD=password postgres\n")),Object(o.b)("h3",{id:"start-and-test-the-payid-server"},"Start and test the PayID server"),Object(o.b)("p",null,"To start the PayID server, run the PayID server in docker using the image you created. You must also use the docker network ",Object(o.b)("inlineCode",{parentName:"p"},"payid-network")," so that it can connect to the ",Object(o.b)("inlineCode",{parentName:"p"},"payid-postgres")," container."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it -p 8080:8080 -p 8081:8081 --name payid-server --network payid-network -e DB_PASSWORD=password -e\n    DB_NAME=postgres -e DB_HOSTNAME=payid-postgres payid-server\n")),Object(o.b)("p",null,"Test whether the PayID server is running by creating a PayID with this cURL command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' curl --location --request POST \'http://127.0.0.1:8081/users\' --header \'PayID-API-Version: 2020-06-16\' --header \'Content-Type: application/json\' --data-raw \'{\n     "payId": "charlie$127.0.0.1",\n     "addresses": [\n         {\n             "paymentNetwork": "XRPL",\n             "environment": "TESTNET",\n             "details": {\n                 "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"\n             }\n         }\n     ]\n }\'\n')),Object(o.b)("p",null,"You should get a ",Object(o.b)("inlineCode",{parentName:"p"},"Created")," response."),Object(o.b)("p",null,"Query the PayID server to make sure it resolves, using this cURL command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl http://127.0.0.1:8080/charlie -H "PayID-Version: 1.0" -H "Accept: application/xrpl-testnet+json"`\n')),Object(o.b)("h3",{id:"start-prometheus"},"Start Prometheus"),Object(o.b)("p",null,"In this step, you will run prometheus in docker and configure it to scrape the PayID server\u2019s metrics. To do this, you need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus.yml")," file on the host machine and mount it in the docker container."),Object(o.b)("p",null,"Create a file named ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus.yml")," with these contents."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"global:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n\nscrape_configs:\n  - job_name: 'payid-metric'\n    honor_labels: true\n    static_configs:\n      - targets: ['payid-server:8081']\n")),Object(o.b)("p",null,"Start the docker container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --network payid-network -p 9090:9090 -v $PWD/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus`\n")),Object(o.b)("p",null,"You can verify Prometheus is running by opening ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," in a browser."),Object(o.b)("p",null,"You can verify metrics collection metrics are being collected by entering the following expression into the form:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sum(payid_count)")),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Execute"),". If successful, the results look like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/docs/prometheus-sum.png",alt:"PayID Metrics setup and configuration"}))),Object(o.b)("p",null,"Click the ",Object(o.b)("strong",{parentName:"p"},"Graph")," tab to display the results in graph format."),Object(o.b)("p",null,"Here are some other example expressions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sum(payid_count) by (paymentNetwork)")," - Sum of ",Object(o.b)("inlineCode",{parentName:"li"},"payid")," count by payment network, such as XRPL, BTC, and so forth."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sum(payid_lookup_request)")," - Total number of ",Object(o.b)("inlineCode",{parentName:"li"},"payid")," lookup requests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rate(payid_lookup_request[5m])")," - Rate of ",Object(o.b)("inlineCode",{parentName:"li"},"payid")," lookup requests per second.")))}p.isMDXComponent=!0},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);