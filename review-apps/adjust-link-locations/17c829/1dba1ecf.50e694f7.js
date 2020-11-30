(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return a?n.a.createElement(d,i(i({ref:t},l),{},{components:a})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(7),o=(a(0),a(100)),s={id:"metrics",title:"Metrics",sidebar_label:"Metrics"},i={unversionedId:"metrics",id:"metrics",isDocsHomePage:!1,title:"Metrics",description:"The reference implementation of PayID server automatically collects metrics using Prometheus. By default, metrics are pushed to the RippleX Prometheus pushgateway. This document describes how you can explicitly configure the PayID server to push to RippleX, or how to collect and analyze these metrics using your own metrics server.",source:"@site/docs/metrics.md",permalink:"/payid-documentation/review-apps/adjust-link-locations/17c829/metrics",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/metrics.md",sidebar_label:"Metrics",sidebar:"docs",previous:{title:"Integrate Existing User Databases",permalink:"/payid-documentation/review-apps/adjust-link-locations/17c829/integrate-payid-users"},next:{title:"Deployment Options",permalink:"/payid-documentation/review-apps/adjust-link-locations/17c829/intro-deploy"}},c=[{value:"Reporting metrics to RippleX",id:"reporting-metrics-to-ripplex",children:[]},{value:"Available metrics",id:"available-metrics",children:[]},{value:"Import metrics from the PayID server to Prometheus",id:"import-metrics-from-the-payid-server-to-prometheus",children:[{value:"How to pull metrics to Prometheus",id:"how-to-pull-metrics-to-prometheus",children:[]},{value:"How to push metrics from the PayID server to Prometheus",id:"how-to-push-metrics-from-the-payid-server-to-prometheus",children:[]}]},{value:"Visualize metrics with Prometheus and Grafana",id:"visualize-metrics-with-prometheus-and-grafana",children:[]},{value:"Deploy a PayID server with Docker, and pull PayID metrics into Prometheus",id:"deploy-a-payid-server-with-docker-and-pull-payid-metrics-into-prometheus",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build a Docker container for setting up a PayID server",id:"build-a-docker-container-for-setting-up-a-payid-server",children:[]},{value:"Create Docker network for PayID",id:"create-docker-network-for-payid",children:[]},{value:"Start a Postgres Database",id:"start-a-postgres-database",children:[]},{value:"Start and test the PayID server",id:"start-and-test-the-payid-server",children:[]},{value:"Start Prometheus",id:"start-prometheus",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The reference implementation of PayID server automatically collects metrics using Prometheus. By default, metrics are pushed to the RippleX Prometheus pushgateway. This document describes how you can explicitly configure the PayID server to push to RippleX, or how to collect and analyze these metrics using your own metrics server."),Object(o.b)("h2",{id:"reporting-metrics-to-ripplex"},"Reporting metrics to RippleX"),Object(o.b)("p",null,"RippleX runs a metrics collection server for general use by anyone running a PayID server. Sharing your metrics with RippleX allows the PayID community to aggregate and monitor PayID adoption and growth metrics in one place."),Object(o.b)("p",null,"Metrics are reported to RippleX by default but you can push metrics to your own Prometheus pushgateway. Here's how to configure your PayID server to do that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# RippleX's Prometheus pushgateway\nPUSH_GATEWAY_URL=https://push00.mon.payid.tech\n")),Object(o.b)("p",null,"To opt out of pushing metrics entirely, set the following environment variable on your server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"PUSH_PAYID_METRICS=false\n")),Object(o.b)("h2",{id:"available-metrics"},"Available metrics"),Object(o.b)("p",null,"The PayID server captures the following metrics."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Metric"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_count")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The number of PayID address mappings in the system. This is calculated periodically by querying the PayID database and published as metrics periodically (every 60 seconds by default). In Prometheus terms, this metric is a gauge.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_count.paymentNetwork")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The payment network for the PayID address mapping. (XRPL, BTC, ETH, ACH, ...)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_count.environment")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The payment network\u2019s environment for the PayID address mapping (MAINNET, TESTNET, RINKEBY, ...)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_lookup_request")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The number of PayID lookup requests. This metric is updated every time a PayID server is hit with a HTTP request to look up an address or addresses for a PayID.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_lookup_request.paymentNetwork")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The payment network for the PayID address mapping. (XRPL, BTC, ETH, ACH, ...)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_lookup_request.environment")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The payment network\u2019s environment for the PayID address mapping (MAINNET, TESTNET, RINKEBY, ...)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"payid_lookup_request.result")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The result of the lookup. Possible values include: ",Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("inlineCode",{parentName:"td"},"found")," - An address was found for the PayID lookup."),Object(o.b)("li",null,Object(o.b)("inlineCode",{parentName:"td"},"not_found")," - An address was not found for the PayID lookup (HTTP status code 404)"),Object(o.b)("li",null,Object(o.b)("inlineCode",{parentName:"td"},"error")," - There was an error in the PayID lookup request. For example, if the client provided an Accept request header that was invalid or missing.")))))),Object(o.b)("p",null,"You can use this data to generate real-time charts. For example, this chart shows how many PayID address mappings exist in the system over time:\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/docs/payid_address_count.png",alt:"PayID address mappings in system over time"}))),Object(o.b)("p",null,"This chart shows the rate per minute of PayID lookup requests:\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/docs/payid_lookups.png",alt:"PayID lookups per minute"}))),Object(o.b)("h2",{id:"import-metrics-from-the-payid-server-to-prometheus"},"Import metrics from the PayID server to Prometheus"),Object(o.b)("p",null,"You can use a push or pull method to obtain metrics from Prometheus."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tip:")," Note that both push and pull methods can be used together simultaneously. For example, to pull metrics into an internal Prometheus server and push metrics to a third-party Prometheus server like RippleX."),Object(o.b)("h3",{id:"how-to-pull-metrics-to-prometheus"},"How to pull metrics to Prometheus"),Object(o.b)("p",null,"Prometheus pulls metrics by scraping a known endpoint for metrics data. The PayID server exposes metrics in Prometheus format on the admin port (default ",Object(o.b)("inlineCode",{parentName:"p"},"8081"),"). For simplicity, you can configure Prometheus to scrape metrics directly from the PayID server. Prometheus must be running inside the same network as PayID server because Prometheus needs access to the admin port. If multiple instances of the PayID server are being run behind a load balancer, then Prometheus must pull metrics directly from each instance, not through the load balancer. This direct method is recommended for collecting metrics using your own Prometheus server."),Object(o.b)("p",null,"Here is a sample ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus.yml")," configuration file set up to pull metrics from a PayID server running locally."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"# my global config\nglobal:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n  # scrape_timeout is set to the global default (10s).\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n    honor_labels: true\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: ['localhost:8081']\n")),Object(o.b)("h3",{id:"how-to-push-metrics-from-the-payid-server-to-prometheus"},"How to push metrics from the PayID server to Prometheus"),Object(o.b)("p",null,"Alternatively, you can push metrics from the PayID server to Prometheus using a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/prometheus/pushgateway"}),"pushgateway"),". This setup requires running a pushgateway in addition to a Prometheus server, and configuring the PayID server to push metrics to the pushgateway. Prometheus then pulls metrics from the pushgateway. In this setup, Prometheus and pushgateway do not need to run inside the same network as the PayID server(s), but the PayID server must be able to reach the pushgateway over http. This is the recommended method for pushing metrics to a third party such as RippleX."),Object(o.b)("p",null,"By default, the reference PayID server pushes metrics to the RippleX pushgateway. To push metrics to your own pushgateway, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set the environment variables ",Object(o.b)("inlineCode",{parentName:"li"},"PUSH_GATEWAY_URL")," with the url to your pushgateway."),Object(o.b)("li",{parentName:"ol"},"Restart your PayID server.")),Object(o.b)("p",null,"For example, if the fictitious company Vandelay Industries wants to push metrics to a pushgateway running at ",Object(o.b)("inlineCode",{parentName:"p"},"https://some-pushgateway.com"),", then set these environment variables: ",Object(o.b)("inlineCode",{parentName:"p"},"PUSH_GATEWAY_URL= https://some-pushgateway.com"),"."),Object(o.b)("p",null,"By default, a PayID server will push metrics every 15 seconds to the configured pushgateway. To change this frequency, set the ",Object(o.b)("inlineCode",{parentName:"p"},"PUSH_METRICS_INTERVAL")," value. For example, to push every 5 minutes (300 seconds), set ",Object(o.b)("inlineCode",{parentName:"p"},"PUSH_METRICS_INTERVAL=300"),". This value must be a positive number."),Object(o.b)("p",null,"As mentioned above, you can also explicitly set ",Object(o.b)("inlineCode",{parentName:"p"},"PUSH_GATEWAY_URL=https://push00.mon.payid.tech")," to push the metrics from your PayID server to RippleX."),Object(o.b)("h2",{id:"visualize-metrics-with-prometheus-and-grafana"},"Visualize metrics with Prometheus and Grafana"),Object(o.b)("p",null,"Prometheus has an admin web console with limited visualization capabilities on port 9090 (default), as shown in this example."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/docs/prometheus-metrics.png",alt:"PayID metrics on Prometheus"}))),Object(o.b)("p",null,"To build dashboards with multiple charts, you can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prometheus.io/docs/visualization/grafana/"}),"use Grafana and configure Prometheus as a datasource"),"."),Object(o.b)("h2",{id:"deploy-a-payid-server-with-docker-and-pull-payid-metrics-into-prometheus"},"Deploy a PayID server with Docker, and pull PayID metrics into Prometheus"),Object(o.b)("p",null,"In this tutorial, you will deploy a PayID server and run Prometheus locally using Docker, and you will create a configuration file for the PayID server so that PayID metrics are pulled into Prometheus."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Install the following software on your machine, if not already present."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"git"))),Object(o.b)("h3",{id:"build-a-docker-container-for-setting-up-a-payid-server"},"Build a Docker container for setting up a PayID server"),Object(o.b)("p",null,"Run these commands to build a Docker container for a PayID server."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/payid-org/payid.git\ncd payid\ndocker build -t payid-server .\n")),Object(o.b)("h3",{id:"create-docker-network-for-payid"},"Create Docker network for PayID"),Object(o.b)("p",null,"You will run several containers in Docker that must talk to each other. To set up these containers, create a docker network called ",Object(o.b)("inlineCode",{parentName:"p"},"payid-network"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker network create payid-network\n")),Object(o.b)("h3",{id:"start-a-postgres-database"},"Start a Postgres Database"),Object(o.b)("p",null,"To have a PayID server, you require a Postgres database to store PayID accounts and address mappings. To do this, run the postgres database in docker with a default password of ",Object(o.b)("inlineCode",{parentName:"p"},"password"),", and tell the database to use the ",Object(o.b)("inlineCode",{parentName:"p"},"payid-network")," that you previously created. Name this docker container ",Object(o.b)("inlineCode",{parentName:"p"},"payid-postgres"),", so that you can reference the container by name when you connect your PayID server. Note that both the default database and the user are named ",Object(o.b)("inlineCode",{parentName:"p"},"postgres"),", as described at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/postgres"}),"Postgres Docker Official Images"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --rm --name payid-postgres --network payid-network -e POSTGRES_PASSWORD=password postgres\n")),Object(o.b)("h3",{id:"start-and-test-the-payid-server"},"Start and test the PayID server"),Object(o.b)("p",null,"To start the PayID server, run the PayID server in docker using the image you created. You must also use the docker network ",Object(o.b)("inlineCode",{parentName:"p"},"payid-network")," so that it can connect to the ",Object(o.b)("inlineCode",{parentName:"p"},"payid-postgres")," container."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -it -p 8080:8080 -p 8081:8081 --name payid-server --network payid-network -e DB_PASSWORD=password -e\n    DB_NAME=postgres -e DB_HOSTNAME=payid-postgres payid-server\n")),Object(o.b)("p",null,"Test whether the PayID server is running by creating a PayID with this cURL command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' curl --location --request POST \'http://127.0.0.1:8081/users\' --header \'PayID-API-Version: 2020-06-16\' --header \'Content-Type: application/json\' --data-raw \'{\n     "payId": "charlie$127.0.0.1",\n     "addresses": [\n         {\n             "paymentNetwork": "XRPL",\n             "environment": "TESTNET",\n             "details": {\n                 "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"\n             }\n         }\n     ]\n }\'\n')),Object(o.b)("p",null,"You should get a ",Object(o.b)("inlineCode",{parentName:"p"},"Created")," response."),Object(o.b)("p",null,"Query the PayID server to make sure it resolves, using this cURL command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl http://127.0.0.1:8080/charlie -H "PayID-Version: 1.0" -H "Accept: application/xrpl-testnet+json"`\n')),Object(o.b)("h3",{id:"start-prometheus"},"Start Prometheus"),Object(o.b)("p",null,"In this step, you will run prometheus in docker and configure it to scrape the PayID server\u2019s metrics. To do this, you need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus.yml")," file on the host machine and mount it in the docker container."),Object(o.b)("p",null,"Create a file named ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus.yml")," with these contents."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"global:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n\nscrape_configs:\n  - job_name: 'payid-metric'\n    honor_labels: true\n    static_configs:\n      - targets: ['payid-server:8081']\n")),Object(o.b)("p",null,"Start the docker container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d --network payid-network -p 9090:9090 -v $PWD/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus`\n")),Object(o.b)("p",null,"You can verify Prometheus is running by opening ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," in a browser."),Object(o.b)("p",null,"You can verify metrics collection metrics are being collected by entering the following expression into the form:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sum(payid_count)")),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Execute"),". If successful, the results look like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/docs/prometheus-sum.png",alt:"PayID Metrics setup and configuration"}))),Object(o.b)("p",null,"Click the ",Object(o.b)("strong",{parentName:"p"},"Graph")," tab to display the results in graph format."),Object(o.b)("p",null,"Here are some other example expressions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sum(payid_count) by (paymentNetwork)")," - Sum of ",Object(o.b)("inlineCode",{parentName:"li"},"payid")," count by payment network, such as XRPL, BTC, and so forth."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sum(payid_lookup_request)")," - Total number of ",Object(o.b)("inlineCode",{parentName:"li"},"payid")," lookup requests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rate(payid_lookup_request[5m])")," - Rate of ",Object(o.b)("inlineCode",{parentName:"li"},"payid")," lookup requests per second.")))}p.isMDXComponent=!0}}]);