(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(7),o=(a(0),a(97)),i={id:"remote-deployment",title:"Deploy on AWS",sidebar_label:"Deploy on AWS"},l={unversionedId:"remote-deployment",id:"remote-deployment",isDocsHomePage:!1,title:"Deploy on AWS",description:"You can set up a PayID server on AWS (Amazon Web Services) setting up your own virtual Linux server. Alternatively, you can set up a PayID server using AWS Lambda.",source:"@site/docs/remote-deployment.md",permalink:"/payid-documentation/review-apps/segment/cf9ed8/remote-deployment",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/remote-deployment.md",sidebar_label:"Deploy on AWS",sidebar:"docs",previous:{title:"Deploy on AWS Lambda",permalink:"/payid-documentation/review-apps/segment/cf9ed8/aws-lambda-deploy"},next:{title:"Set Up NGINX Reverse Proxy and SSL",permalink:"/payid-documentation/review-apps/segment/cf9ed8/nginx-ssl-deploy"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Deployment steps",id:"deployment-steps",children:[]}],p={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can set up a PayID server on AWS (Amazon Web Services) setting up your own virtual Linux server. Alternatively, you can set up a PayID server using ","[AWS Lambda][aws-lambda-deploy]","."),Object(o.b)("p",null,"When you have deployed a PayID server, you can then set up ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"nginx-ssl-deploy"}),"NGINX Reverse Proxy and SSL")," for load bearing and security."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An AWS account"),Object(o.b)("li",{parentName:"ul"},"Your own domain, for which you can update the DNS")),Object(o.b)("h2",{id:"deployment-steps"},"Deployment steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Initialize a ",Object(o.b)("inlineCode",{parentName:"li"},"t2.micro")," instance on AWS running Ubuntu 18.04m with a minimum of 8 GB SSD. For the purposes of this demo, you can use AWS Free Tier.\nSee ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html"}),"Getting Started with Amazon EC2 Linux Instances")," for more information about setting up your instance."),Object(o.b)("li",{parentName:"ol"},"Get an elastic IP address and associate it with your AWS ",Object(o.b)("inlineCode",{parentName:"li"},"t2.micro")," instance, as described in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html#ec2-launch-instance"}),"Step 1, part 10"),"."),Object(o.b)("li",{parentName:"ol"},"Update the DNS for your PayID domain as shown in the following table. Add any other subdomain you would like to use as a PayID as well.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"TTL"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"your-ip-address")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"600 seconds")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"your-payID-domain")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"your-ip-address")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1/2 Hour")))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set your instance's firewall/security group."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Port 80 (TCP) open for all address"),Object(o.b)("li",{parentName:"ul"},"Port 8081 (Admin API access) open for your local IP address only, or closed generally, or only available inside your virtual private cloud. If port 8081 is exposed publicly it allows anybody to update your payment information, potentially leading to a loss of funds."),Object(o.b)("li",{parentName:"ul"},"Port 22 (SSH) open"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"SSH into your instance."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Right-click on the instance."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Connect"),"."),Object(o.b)("li",{parentName:"ul"},"Copy the example command and run it in your local terminal. You must have local access to the private key file associated with your instance."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install git on your instance.\n",Object(o.b)("inlineCode",{parentName:"p"},"sudo apt-get install git"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Link the git on your instance to your GitHub account, as described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh"}),"Connecting to GitHub with SSH"),". Follow the instructions for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"}),"Generating a new SSH key and adding it to the ssh-agent"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install docker on your instance."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get update\nsudo apt install docker.io docker-compose\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the payid Github repository: ",Object(o.b)("inlineCode",{parentName:"p"},"git clone git@github.com:payid-org/payid.git"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set the docker port to 80 by modifying the ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the script editor: ",Object(o.b)("inlineCode",{parentName:"li"},"nano payid/docker-compose.yml")),Object(o.b)("li",{parentName:"ul"},"Go to the ",Object(o.b)("inlineCode",{parentName:"li"},"ports")," property, and change: ",Object(o.b)("inlineCode",{parentName:"li"},"8080:8080")," to ",Object(o.b)("inlineCode",{parentName:"li"},"80:8080")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run this script to start PayID with a Postgres database: ",Object(o.b)("inlineCode",{parentName:"p"},"npm run devEnvUp")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"To bring this down, run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run devDown")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check your IP address and the website in your browser to confirm the server is running. You should see a success page that looks like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ripplex.money/"}),"this"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Load up your desired PayID to the database using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.payid.org/?version=latest#7a19329b-80eb-451f-bbb8-d9656892a788"}),"Admin API"),". If you use a subdomain rather than a path, then you must set up a DNS record for the subdomain as described in step 3.\n",Object(o.b)("strong",{parentName:"p"},"Note:")," You can add PayIDs for each (pay_id, network, environment) tuple. Use this cURL command to set up a PayID."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl --location --request POST \'http://127.0.0.1:8081/users\' \\\n--header \'PayID-API-Version: 2020-06-16\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n "payId": "<user$domain.com>",\n "addresses": [{\n   "paymentNetwork": "XRPL",\n   "environment": "MAINNET",\n   "details": {\n     "address": "<your-address>"\n   }\n }]\n}\'\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From your local computer, run a cURL command to fetch your PayID. For example:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -X GET 'https://<domain.com/user>' --header 'Accept: application/xrpl-mainnet+json' --header 'PayID-version: 1.0'\n")),Object(o.b)("p",null,"For other PayID API methods, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.payid.org"}),"PayID API Reference"),"."),Object(o.b)("p",null,"To convert a PayID address to a URL endpoint, follow these patterns:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"user$wallet.com")," converts to ",Object(o.b)("inlineCode",{parentName:"li"},"https://wallet.com/user")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"user$subdomain.wallet.com/payid")," converts to ",Object(o.b)("inlineCode",{parentName:"li"},"https://subdomain.wallet.com/payid/user"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Public API requests hit port 80 and Admin API requests hit port 8081 per the config in step 10. Make sure that 8081 is limited so that outsiders cannot modify your server\u2019s database."),Object(o.b)("p",null,"For additional network formats, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.payid.org/?version=latest"}),"API Reference"),"."))}b.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);