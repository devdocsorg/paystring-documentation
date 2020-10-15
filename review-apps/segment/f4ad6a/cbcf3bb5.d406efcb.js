(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(7),o=(a(0),a(95)),i={id:"aws-lambda-deploy",title:"Deploy on AWS Lambda",sidebar_label:"Deploy on AWS Lambda"},c={unversionedId:"aws-lambda-deploy",id:"aws-lambda-deploy",isDocsHomePage:!1,title:"Deploy on AWS Lambda",description:"You can deploy a PayID server on AWS Lambda, a setup that allows you to run code without having to deploy or manage a server.",source:"@site/docs/aws-lambda-deploy.md",permalink:"/payid-documentation/review-apps/segment/f4ad6a/aws-lambda-deploy",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/aws-lambda-deploy.md",sidebar_label:"Deploy on AWS Lambda",sidebar:"docs",previous:{title:"Deploy a PayID Server with Docker",permalink:"/payid-documentation/review-apps/segment/f4ad6a/deploy-with-docker"},next:{title:"Deploy on AWS",permalink:"/payid-documentation/review-apps/segment/f4ad6a/remote-deployment"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Request or import a certificate to Amazon Certificate Manager (ACM)",id:"request-or-import-a-certificate-to-amazon-certificate-manager-acm",children:[{value:"Step 1: Open ACM in the AWS console in us-east-1",id:"step-1-open-acm-in-the-aws-console-in-us-east-1",children:[]},{value:"Step 2: Request a public certificate",id:"step-2-request-a-public-certificate",children:[]},{value:"Step 3: Specify your domain name",id:"step-3-specify-your-domain-name",children:[]},{value:"Step 4: Choose DNS validation",id:"step-4-choose-dns-validation",children:[]},{value:"Step 5: Add tags (optional)",id:"step-5-add-tags-optional",children:[]},{value:"Step 5: Review",id:"step-5-review",children:[]},{value:"Step 6: Add a CNAME at your registrar and wait for pending validation",id:"step-6-add-a-cname-at-your-registrar-and-wait-for-pending-validation",children:[]},{value:"Step 7: Wait for issuance (approximately 30 minutes)",id:"step-7-wait-for-issuance-approximately-30-minutes",children:[]},{value:"Step 8: Copy the certificate ARN (Amazon Resource Name) for use with this CloudFormation stack",id:"step-8-copy-the-certificate-arn-amazon-resource-name-for-use-with-this-cloudformation-stack",children:[]}]},{value:"Update your domain&#39;s nameservers for your PayID domain",id:"update-your-domains-nameservers-for-your-payid-domain",children:[]},{value:"Launch your stack",id:"launch-your-stack",children:[{value:"Step 1: Create the stack",id:"step-1-create-the-stack",children:[]},{value:"Step 2: View the nameservers in the stack output, or go to Route53 in the AWS console and click on your hosted zone",id:"step-2-view-the-nameservers-in-the-stack-output-or-go-to-route53-in-the-aws-console-and-click-on-your-hosted-zone",children:[]},{value:"Step 3: Find the nameservers",id:"step-3-find-the-nameservers",children:[]},{value:"Step 4: Update your registrar with Amazon&#39;s nameservers",id:"step-4-update-your-registrar-with-amazons-nameservers",children:[]}]},{value:"Test your PayID server",id:"test-your-payid-server",children:[]},{value:"Launch with AWS Lambda using scripts",id:"launch-with-aws-lambda-using-scripts",children:[{value:"Prequisites",id:"prequisites",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Add PayIDs to your Amazon S3 bucket",id:"add-payids-to-your-amazon-s3-bucket",children:[]},{value:"Upgrade the AWS Lambda function",id:"upgrade-the-aws-lambda-function",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can deploy a PayID server on AWS Lambda, a setup that allows you to run code without having to deploy or manage a server."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("p",null,"To deploy PayID server on AWS Lambda, you need the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An AWS account."),Object(o.b)("li",{parentName:"ul"},"A domain, which you control, to use for your PayIDs. This domain will be part of each PayID. ",Object(o.b)("strong",{parentName:"li"},"After you add the stack"),", you must update your domain to use Amazon's name servers in the Route53 hosted zone that's created for you."),Object(o.b)("li",{parentName:"ul"},"A certificate imported into Amazon Certificate Manager (ACM) in the ",Object(o.b)("inlineCode",{parentName:"li"},"us-east-1")," region. If you do not have such a certificate, you can use ACM to request one."),Object(o.b)("li",{parentName:"ul"},"If you have existing PayIDs to import, a ",Object(o.b)("inlineCode",{parentName:"li"},"json")," file containing the PayIDs that you want to upload to the S3 (Amazon Simple Storage Service) bucket created by the stack.")),Object(o.b)("p",null,"For more information about AWS Lambda and AWS CloudFormation, see:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://aws.amazon.com/lambda/"}),"AWS Lambda")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://aws.amazon.com/cloudformation/"}),"AWS CloudFormation"))),Object(o.b)("h2",{id:"request-or-import-a-certificate-to-amazon-certificate-manager-acm"},"Request or import a certificate to Amazon Certificate Manager (ACM)"),Object(o.b)("p",null,"If you do not already have a certificate, then you will need to request one in ACM. If you do have one, you will need to import it."),Object(o.b)("h3",{id:"step-1-open-acm-in-the-aws-console-in-us-east-1"},"Step 1: Open ACM in the AWS console in us-east-1"),Object(o.b)("p",null,"You ",Object(o.b)("strong",{parentName:"p"},"must")," use the ",Object(o.b)("inlineCode",{parentName:"p"},"US East (N. Virginia) us-east-1")," region to open ACM and request or import your certificate, or CloudFormation will not create your stack/PayID server correctly. AWS Lambda uses API Gateway for HTTP access which leverages a Cloudfront distribution for pointing a domain to it, and Cloudfront distributions require ACM certificates to exist in ",Object(o.b)("inlineCode",{parentName:"p"},"us-east-1"),". See: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html"}),"AWS ACM regions documentation"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://console.aws.amazon.com/acm/home?region=us-east-1"}),"ACM console"),"."),Object(o.b)("li",{parentName:"ul"},"Below ",Object(o.b)("strong",{parentName:"li"},"Provision Certificates"),", click ",Object(o.b)("strong",{parentName:"li"},"Get Started"),"."),Object(o.b)("li",{parentName:"ul"},"If you already have a certificate, click ",Object(o.b)("strong",{parentName:"li"},"Import a certificate"),"."),Object(o.b)("li",{parentName:"ul"},"If you do not have a certificate already, make sure ",Object(o.b)("strong",{parentName:"li"},"Request a public certificate")," is selected, and click ",Object(o.b)("strong",{parentName:"li"},"Request a certificate"),". Proceed through the steps as described to create the appropriate certificate.")),Object(o.b)("p",null,"If you import a certificate, enter the appropriate values and proceed with the import. Continue with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#step-6-wait-for-pending-validation-and-add-a-cname-at-your-registrar-step-6"}),"Step 6"),"."),Object(o.b)("h3",{id:"step-2-request-a-public-certificate"},"Step 2: Request a public certificate"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-acm-start.png",alt:"request a public certificate"}))),Object(o.b)("h3",{id:"step-3-specify-your-domain-name"},"Step 3: Specify your domain name"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-1.png",alt:"specify your domain name"}))),Object(o.b)("h3",{id:"step-4-choose-dns-validation"},"Step 4: Choose DNS validation"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-2.png",alt:"choose dns validation"}))),Object(o.b)("h3",{id:"step-5-add-tags-optional"},"Step 5: Add tags (optional)"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-3.png",alt:"optionally add tags"}))),Object(o.b)("h3",{id:"step-5-review"},"Step 5: Review"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-4.png",alt:"review"}))),Object(o.b)("p",null,"Click ",Object(o.b)("strong",{parentName:"p"},"Confirm and request"),"."),Object(o.b)("h3",{id:"step-6-add-a-cname-at-your-registrar-and-wait-for-pending-validation"},"Step 6: Add a CNAME at your registrar and wait for pending validation"),Object(o.b)("p",null,"After you click ",Object(o.b)("strong",{parentName:"p"},"Confirm and request")," in Step 5, you are at a screen pending validation as shown here:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-5.png",alt:"pending validation"}))),Object(o.b)("p",null,"For the validation to proceed, you must enter the CNAME information at the registrar site for your domain. Go to your registrar site, and use the CNAME information to add a ",Object(o.b)("inlineCode",{parentName:"p"},"CNAME")," record so ACM can validate that you own the domain. Here's an example of what this looks like for one registrar. The format for your registrar may differ."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-6.png",alt:"add a cname"}))),Object(o.b)("h3",{id:"step-7-wait-for-issuance-approximately-30-minutes"},"Step 7: Wait for issuance (approximately 30 minutes)"),Object(o.b)("p",null,"On the AWS site, wait for ACM to display the ",Object(o.b)("inlineCode",{parentName:"p"},"CNAME")," you added and issue the certificate. When this happens, you should see the status change:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-7.png",alt:"issued"}))),Object(o.b)("p",null,"If the validation is unsuccessful after 72 hours, the process times out. Repeat the steps, ensuring that your values are correct."),Object(o.b)("h3",{id:"step-8-copy-the-certificate-arn-amazon-resource-name-for-use-with-this-cloudformation-stack"},"Step 8: Copy the certificate ARN (Amazon Resource Name) for use with this CloudFormation stack"),Object(o.b)("p",null,"This ARN appears on the page where your certificate is issued, as shown here."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/request-cert-step-8.png",alt:"certificate arn"}))),Object(o.b)("h2",{id:"update-your-domains-nameservers-for-your-payid-domain"},"Update your domain's nameservers for your PayID domain"),Object(o.b)("p",null,"When you finish creating the CloudFormation Stack using our template, you next update your nameserver settings on your registrar to use Amazon's."),Object(o.b)("h2",{id:"launch-your-stack"},"Launch your stack"),Object(o.b)("p",null,"When you have requested or imported a certificate, and configured CNAME as described, you can create and launch the stack."),Object(o.b)("h3",{id:"step-1-create-the-stack"},"Step 1: Create the stack"),Object(o.b)("p",null,"Click the button below."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://us-west-1.console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?templateURL=https://payid-server-template.s3-us-west-2.amazonaws.com/payid-stack.yaml&stackName=my-payid-server"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png",alt:"Launch Stack"})))),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Create Stack")," page opens. Select the defaults on the ",Object(o.b)("strong",{parentName:"p"},"Create stack")," page and click ",Object(o.b)("strong",{parentName:"p"},"Next"),". The ",Object(o.b)("strong",{parentName:"p"},"Specify stack details")," page opens."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/stack-form.png",alt:"specify stack details"}))),Object(o.b)("p",null,"Enter your stack name and your domain name, and click ",Object(o.b)("strong",{parentName:"p"},"Next"),". Click through the pages, accepting the defaults."),Object(o.b)("p",null,"To use the AWS command line, instead of the AWS console, to launch your stack, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#launch-with-aws-lambda-using-scripts"}),"Launch with AWS Lambda using scripts"),". You will achieve the same results using our scripts."),Object(o.b)("h3",{id:"step-2-view-the-nameservers-in-the-stack-output-or-go-to-route53-in-the-aws-console-and-click-on-your-hosted-zone"},"Step 2: View the nameservers in the stack output, or go to Route53 in the AWS console and click on your hosted zone"),Object(o.b)("p",null,"If you're still on the CloudFormation page looking at the stack, the ",Object(o.b)("inlineCode",{parentName:"p"},"Outputs")," tab will list the nameservers you need to use."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/stack-outputs.png",alt:"stack outputs"}))),Object(o.b)("p",null,"If you've already closed the tab or navigated away, you can find the same information in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com/route53/v2/hostedzones"}),"Route53"),"."),Object(o.b)("p",null,"Once you're on this page, click the domain you used in the stack template (in this example, ",Object(o.b)("inlineCode",{parentName:"p"},"somedomainyouown.com"),"):"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/hosted-zone-list.png",alt:"hosted zones"}))),Object(o.b)("h3",{id:"step-3-find-the-nameservers"},"Step 3: Find the nameservers"),Object(o.b)("p",null,"Click the hosted zone to display the nameservers you need to use with your registrar:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/hosted-zone-nameservers.png",alt:"hosted zone nameservers"}))),Object(o.b)("h3",{id:"step-4-update-your-registrar-with-amazons-nameservers"},"Step 4: Update your registrar with Amazon's nameservers"),Object(o.b)("p",null,"Paste the values you saw in the previous step into wherever your registrar allows you to change them. For example:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/registrar-nameservers.png",alt:"registrar nameservers"}))),Object(o.b)("h2",{id:"test-your-payid-server"},"Test your PayID server"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://payidvalidator.com/"}),"PayID Validator")," to test your PayIDs."),Object(o.b)("h2",{id:"launch-with-aws-lambda-using-scripts"},"Launch with AWS Lambda using scripts"),Object(o.b)("p",null,"If you prefer not to use the AWS CLI, you can use these scripts to request a AWS certificate for your PayID domain and launch the payid lambda stack on your domain."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/xpring-eng/payid-lambda/blob/master/request-certificate.sh"}),"request-certificate.sh")," - Request a certificate via AWS certificate manager for a given domain."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/xpring-eng/payid-lambda/blob/master/create-stack.sh"}),"create-stack.sh")," - Create the payid lambda stack on your account for a given domain.")),Object(o.b)("h3",{id:"prequisites"},"Prequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"}),"AWS CLI"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure ",Object(o.b)("inlineCode",{parentName:"li"},"aws configure")," has been configured with an Access Key created via ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials"}),"IAM--Your Security Credentials"),"."),Object(o.b)("li",{parentName:"ul"},"You must have a domain and the ability to configure DNS for your domain.")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("h4",{id:"request-a-certificate"},"Request a certificate"),Object(o.b)("p",null,"Command: ",Object(o.b)("inlineCode",{parentName:"p"},"./request-certificate.sh <domain-name>")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ ./request-certificate.sh hodl.payid.ml\n\nRequesting certificate for hodl.payid.ml\nCertificate requested. Please create the following CNAME record for your domain:\n_09dee7696e4d458fb16fead080465035.hodl.payid.ml.    CNAME   _b1fddaad4657f8e03167be7b61dc3685.jfrzftwwjs.acm-validations.aws.\n")),Object(o.b)("p",null,"When the certificate request is completed, create the CNAME for your domain as specified in the output. You have to visit your registrar site, as described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#step-6-pending-validation-and-adding-a-cname-at-your-registrar"}),"Steps 6 and 7"),"."),Object(o.b)("p",null,"Wait for AWS Certificate Manager to issue your certificate before proceeding to the next command."),Object(o.b)("h4",{id:"launch-the-payid-lambda-stack"},"Launch the PayID Lambda stack"),Object(o.b)("p",null,"Command: ",Object(o.b)("inlineCode",{parentName:"p"},"./create-stack.sh <domain-name>")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ ./create-stack.sh hodl.payid.ml\n\nCreating stack hodl-payid-ml-payid-stack in AWS...\n\nWaiting for changeset to be created..\nWaiting for stack create/update to complete\nSuccessfully created/updated stack - hodl-payid-ml-payid-stack\n\nCreated successfully\nPlease update the Nameservers for your domain to\nnameserver1 ns-1288.awsdns-33.org\nnameserver2 ns-852.awsdns-42.net\nnameserver3 ns-1593.awsdns-07.co.uk\nnameserver4 ns-8.awsdns-01.com\n")),Object(o.b)("p",null,"Once completed, update the nameservers for your domain to the ones specified in the output, as described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#step-3-find-the-nameservers"}),"Step 3 and 4"),"."),Object(o.b)("h2",{id:"add-payids-to-your-amazon-s3-bucket"},"Add PayIDs to your Amazon S3 bucket"),Object(o.b)("p",null,"When the stack is created, an Amazon S3 bucket titled ",Object(o.b)("inlineCode",{parentName:"p"},"{name of stack}-s3bucket-{unique hash}")," is also created."),Object(o.b)("p",null,"You can add PayIDs by uploading ",Object(o.b)("inlineCode",{parentName:"p"},"json")," files to this bucket, each of which contains a single user that conforms to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"payid-schemas#example-single-user-schema"}),"the PayID schema"),". You can upload new files to the bucket via the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://s3.console.aws.amazon.com/s3/buckets/"}),"Amazon S3 console"),"."),Object(o.b)("p",null,"When the stack is created, a test account is provided at ",Object(o.b)("inlineCode",{parentName:"p"},"testaccount.json"),". The name of the file used to resolve the PayID--",Object(o.b)("inlineCode",{parentName:"p"},"testaccount.json"),"--is resolved by ",Object(o.b)("inlineCode",{parentName:"p"},"mydomain.tld/testaccount"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "addresses":[\n        {\n            "paymentNetwork":"XRPL",\n            "environment":"TESTNET",\n            "addressDetailsType":"CryptoAddressDetails",\n            "addressDetails":{\n                "address":"T772A73My52QaUonaai6VE4X98zLu7VBQSXJKLYimjXDAJi"\n            }\n        }\n    ]\n}\n')),Object(o.b)("h2",{id:"upgrade-the-aws-lambda-function"},"Upgrade the AWS Lambda function"),Object(o.b)("p",null,"To see if there is a release with an upgraded AWS Lambda function, look for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/xpring-eng/payid-lambda/releases"}),"releases")," with the file ",Object(o.b)("inlineCode",{parentName:"p"},"payid-stack.yaml")," attached."),Object(o.b)("p",null,"The version you have installed is visible in the description of the stack in CloudFormation (for example, ",Object(o.b)("inlineCode",{parentName:"p"},"[v1.0] PayID Lambda Server and API Gateway front end"),") and also in the ",Object(o.b)("inlineCode",{parentName:"p"},"Outputs")," of the stack under the name ",Object(o.b)("inlineCode",{parentName:"p"},"PayIdLambdaStackVersion"),"."),Object(o.b)("p",null,"To perform an update, click the ",Object(o.b)("inlineCode",{parentName:"p"},"Update")," button when viewing the stack and upload the version of ",Object(o.b)("inlineCode",{parentName:"p"},"payid-stack.yaml")," to which you want to upgrade."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/update-button.png",alt:"update button"}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/docs/update-form.png",alt:"update button"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": This upgrade updates the AWS Lambda function, but it could also update other resources as well in the stack, including API Gateway, Amazon S3, and others. The release notes will outline changes if other resources are altered, but be sure to also look at the changelog to see if other resources may be impacted."))}l.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);