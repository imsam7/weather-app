(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{1236:function(a,n,t){"use strict";t.r(n);var i=t(4),o=t(0),p=t.n(o),l=t(103),r=t.n(l),e=t(396),c=t(216),u=t(78),d=(t(409),t(35)),s=t(281),m=t(389),y=t(390),h=t(209),I=t(397),_=t(395),g="GET_USERCITY",N="GET_USERCITY_SUCCESS",j="GET_USERCITY_FAILURE",b=function(a){return{type:g,payload:a}},x="GET_WEATHER",O="GET_WEATHER_SUCCESS",f="GET_WEATHER_FAILURE",v=function(a){return{type:x,payload:a}},w=t(394),P=t.p+"static/media/sun.6d48da50.png",C=t.p+"static/media/cloudy.a6d0b7d8.png",k=t(391);var T=function(a){for(var n=a.weatherData,t=m(n.weather.city.sunrise),p=m(n.weather.city.sunset),l=[],r=0;r<n.weather.list.length;r++)r%8==0&&l.push(n.weather.list[r]);var e=Object(o.useState)(l[0]),c=Object(w.a)(e,2),u=c[0],d=c[1],s=function(){for(var a=[],n=0;n<5;n++){var t=new Date;a.push(t.toString().split(" ")[0])}return a}();function m(a){return new Date(1e3*a).toLocaleString("en-GB",{hour:"numeric",minute:"numeric",hour12:!0})}function y(a){return Math.round(a-273.15)}return Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("div",{className:"demo",children:Object(i.jsx)("div",{className:"carousel",children:l.map((function(a,n){return Object(i.jsx)("div",{className:"tablinks c-item active",onClick:function(){return function(a){d(l[a])}(n)},children:Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:s[n]}),Object(i.jsx)("br",{}),Object(i.jsxs)("b",{children:[y(a.main.temp_max),"\xb0 ",Object(i.jsxs)("span",{style:{color:"rgb(167, 165, 165)"},children:[y(a.main.temp_min),"\xb0 "]})]}),Object(i.jsx)("br",{}),"Clear"==a.weather[0].main&&Object(i.jsx)("img",{src:P,width:"24px",height:"25px"}),"Clouds"==a.weather[0].main&&Object(i.jsx)("img",{src:C,width:"24px",height:"25px"}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{style:{color:"rgb(167, 165, 165)"},children:(t=a.weather[0].main,"Rain"==t?"Rainy":"Clear"==t?"Sunny":"Clouds"==t?"Cloudy":void 0)}),Object(i.jsx)("br",{})]})});var t}))})}),Object(i.jsxs)("div",{id:"Mon1",className:"tabcontent",children:[Object(i.jsx)("div",{className:"bodyOfdiv",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"about",children:Object(i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(i.jsx)("h1",{style:{fontSize:"50px",marginTop:"0px",marginBottom:"0px",marginRight:"15px"},children:Object(i.jsxs)("b",{children:[y(u.main.temp),"\xb0C"]})}),"Clear"==u.weather[0].main&&Object(i.jsx)("img",{src:P,style:{height:"50px",width:"50px"}}),"Clouds"==u.weather[0].main&&Object(i.jsx)("img",{src:C,style:{height:"50px",width:"50px"}})]})}),Object(i.jsx)("div",{className:"axis graph",children:Object(i.jsx)(k.Line,{options:{tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[{display:!1,gridLines:{drawBorder:!1,display:!1}}],xAxes:[{gridLines:{display:!1}}]}},data:{labels:n.weather.list.map((function(a){return y(a.main.temp)+"\xb0C"})),datasets:[{data:n.weather.list.map((function(a){return y(a.main.temp)})),label:"Infected",borderColor:"#3333ff",fill:!0}]}})})]})}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)("div",{className:"",style:{width:"50%",flex:"1"},children:Object(i.jsx)("div",{className:"innerbox",style:{height:"auto",paddingTop:"10px",marginRight:"8px"},children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Pressure"}),Object(i.jsx)("br",{}),u.main.pressure," hpa"]})})}),Object(i.jsx)("div",{className:"",style:{width:"50%",flex:"1"},children:Object(i.jsx)("div",{className:"innerbox",style:{height:"auto",paddingTop:"10px",marginRight:"8px"},children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Humidity"}),Object(i.jsx)("br",{}),u.main.humidity," hpa"]})})})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{style:{display:"flex",marginTop:"-20px"},children:[Object(i.jsx)("div",{className:"boxes",style:{width:"50%",flex:"1"},children:Object(i.jsx)("div",{className:"innerbox",style:{height:"auto",paddingTop:"0px",marginRight:"40px",marginBottom:"5px",backgroundColor:"white"},children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Sunrise"}),Object(i.jsx)("br",{}),t]})})}),Object(i.jsx)("div",{className:"",style:{width:" 50%",flex:"1",height:"auto"},children:Object(i.jsx)("div",{className:"innerbox",style:{height:"auto",paddingTop:"0px",marginLeft:"40px",marginBottom:"5px",backgroundColor:"white"},children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Sunrise"}),Object(i.jsx)("br",{}),p]})})})]})]})]})};function B(){return Object(i.jsxs)("div",{className:"load",children:[Object(i.jsx)("div",{className:"lds-css",children:Object(i.jsx)("div",{className:"lds-rolling",style:{width:"100%",height:"100%"},children:Object(i.jsx)("div",{})})}),Object(i.jsx)("span",{children:"Please wait"})]})}t(476);var M=t(392),S={display:"form",components:[{label:"",tableView:!0,dataSrc:"json",data:{values:[{label:"",value:""}],json:[{city:"Delhi",lat:"28.6600",lng:"77.2300",country:"India",iso2:"IN",admin_name:"Delhi",capital:"admin",population:"29617000",population_proper:"16753235"},{city:"Mumbai",lat:"18.9667",lng:"72.8333",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"admin",population:"23355000",population_proper:"12478447"},{city:"Kolkata",lat:"22.5411",lng:"88.3378",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"admin",population:"17560000",population_proper:"4496694"},{city:"Bangalore",lat:"12.9699",lng:"77.5980",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"admin",population:"13707000",population_proper:"8443675"},{city:"Chennai",lat:"13.0825",lng:"80.2750",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"admin",population:"11324000",population_proper:"6727000"},{city:"Hyderabad",lat:"17.3667",lng:"78.4667",country:"India",iso2:"IN",admin_name:"Telangana",capital:"admin",population:"9746000",population_proper:"6993262"},{city:"Pune",lat:"18.5196",lng:"73.8553",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"7764000",population_proper:"3124458"},{city:"Ahmadabad",lat:"23.0300",lng:"72.5800",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"minor",population:"7410000",population_proper:"5570585"},{city:"S\u016brat",lat:"21.1700",lng:"72.8300",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"5807000",population_proper:"4466826"},{city:"Lucknow",lat:"26.8470",lng:"80.9470",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"admin",population:"3382000",population_proper:"3382000"},{city:"Jaipur",lat:"26.9167",lng:"75.8667",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"admin",population:"3073350",population_proper:"3073350"},{city:"Kanpur",lat:"26.4725",lng:"80.3311",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"2701324",population_proper:"2701324"},{city:"Mirzapur",lat:"25.1500",lng:"82.5800",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"2496970",population_proper:"2496970"},{city:"Nagpur",lat:"21.1539",lng:"79.0831",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"2405665",population_proper:"2405665"},{city:"Ghaziabad",lat:"28.6667",lng:"77.4167",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"2381452",population_proper:"2381452"},{city:"Indore",lat:"22.7206",lng:"75.8472",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"2201927",population_proper:"2201927"},{city:"Vadodara",lat:"22.3000",lng:"73.2000",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"2065771",population_proper:"2065771"},{city:"Vishakhapatnam",lat:"17.7333",lng:"83.3167",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"2035922",population_proper:"2035922"},{city:"Bhopal",lat:"23.2500",lng:"77.4167",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"admin",population:"1883381",population_proper:"1883381"},{city:"Chinchvad",lat:"18.6278",lng:"73.8131",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"1729320",population_proper:"1729320"},{city:"Patna",lat:"25.6100",lng:"85.1414",country:"India",iso2:"IN",admin_name:"Bihar",capital:"admin",population:"1684222",population_proper:"1684222"},{city:"Ludhiana",lat:"30.9083",lng:"75.8486",country:"India",iso2:"IN",admin_name:"Punjab",capital:"",population:"1649000",population_proper:"1545368"},{city:"\u0100gra",lat:"27.1800",lng:"78.0200",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"1585705",population_proper:"1585705"},{city:"Kalyan",lat:"19.2502",lng:"73.1602",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"1576614",population_proper:"1576614"},{city:"Madurai",lat:"9.9197",lng:"78.1194",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"minor",population:"1561129",population_proper:"1561129"},{city:"Jamshedpur",lat:"22.8000",lng:"86.1833",country:"India",iso2:"IN",admin_name:"Jharkhand",capital:"",population:"1558000",population_proper:"1558000"},{city:"Nasik",lat:"20.0000",lng:"73.7833",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"1486053",population_proper:"1486053"},{city:"Far\u012bdabad",lat:"28.4333",lng:"77.3167",country:"India",iso2:"IN",admin_name:"Haryana",capital:"",population:"1394000",population_proper:"1394000"},{city:"Aurangabad",lat:"19.8800",lng:"75.3200",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"1371330",population_proper:"1371330"},{city:"Rajkot",lat:"22.2969",lng:"70.7984",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"1335397",population_proper:"1335397"},{city:"Meerut",lat:"28.9900",lng:"77.7000",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"1305429",population_proper:"1305429"},{city:"Jabalpur",lat:"23.1667",lng:"79.9333",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"1267564",population_proper:"1267564"},{city:"Thane",lat:"19.1800",lng:"72.9633",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"1261517",population_proper:"1261517"},{city:"Dhanbad",lat:"23.7928",lng:"86.4350",country:"India",iso2:"IN",admin_name:"Jharkhand",capital:"",population:"1246000",population_proper:"219636"},{city:"Allahabad",lat:"25.4550",lng:"81.8400",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"1201000",population_proper:"1073438"},{city:"Varanasi",lat:"25.3189",lng:"83.0128",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"1198491",population_proper:"1198491"},{city:"Sr\u012bnagar",lat:"34.0911",lng:"74.8061",country:"India",iso2:"IN",admin_name:"Jammu and Kashm\u012br",capital:"admin",population:"1180570",population_proper:"1180570"},{city:"Amritsar",lat:"31.6167",lng:"74.8500",country:"India",iso2:"IN",admin_name:"Punjab",capital:"",population:"1132383",population_proper:"1132383"},{city:"Al\u012bgarh",lat:"27.8800",lng:"78.0800",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"1131160",population_proper:"1131160"},{city:"Bhiwandi",lat:"19.3000",lng:"73.0667",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"1125898",population_proper:"1125898"},{city:"Gwalior",lat:"26.2150",lng:"78.1931",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"1101981",population_proper:"1101981"},{city:"Bhilai",lat:"21.2167",lng:"81.4333",country:"India",iso2:"IN",admin_name:"Chhatt\u012bsgarh",capital:"",population:"1097000",population_proper:"1097000"},{city:"Haora",lat:"22.5900",lng:"88.3100",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"1077075",population_proper:"1077075"},{city:"Ranchi",lat:"23.3556",lng:"85.3347",country:"India",iso2:"IN",admin_name:"Jharkhand",capital:"admin",population:"1073440",population_proper:"1073440"},{city:"Bezwada",lat:"16.5167",lng:"80.6167",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"1048240",population_proper:"1048240"},{city:"Chand\u012bgarh",lat:"30.7353",lng:"76.7911",country:"India",iso2:"IN",admin_name:"Chand\u012bgarh",capital:"admin",population:"1026459",population_proper:"1026459"},{city:"Mysore",lat:"12.3086",lng:"76.6531",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"1014227",population_proper:"1014227"},{city:"Raipur",lat:"21.2379",lng:"81.6337",country:"India",iso2:"IN",admin_name:"Chhatt\u012bsgarh",capital:"admin",population:"1010087",population_proper:"1010087"},{city:"Kota",lat:"25.1800",lng:"75.8300",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"1001694",population_proper:"1001694"},{city:"Bareilly",lat:"28.3640",lng:"79.4150",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"1000000",population_proper:"1000000"},{city:"Jodhpur",lat:"26.2918",lng:"73.0168",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"995000",population_proper:"921476"},{city:"Coimbatore",lat:"11.0000",lng:"76.9667",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"959823",population_proper:"959823"},{city:"Dispur",lat:"26.1500",lng:"91.7700",country:"India",iso2:"IN",admin_name:"Assam",capital:"admin",population:"957352",population_proper:"957352"},{city:"Guwahati",lat:"26.1667",lng:"91.7667",country:"India",iso2:"IN",admin_name:"Assam",capital:"",population:"957352",population_proper:"957352"},{city:"Solapur",lat:"17.6833",lng:"75.9167",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"951558",population_proper:"951558"},{city:"Trichinopoly",lat:"10.8269",lng:"78.6928",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"916857",population_proper:"916857"},{city:"Hubli",lat:"15.3600",lng:"75.1250",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"890000",population_proper:"792804"},{city:"Jalandhar",lat:"31.3256",lng:"75.5792",country:"India",iso2:"IN",admin_name:"Punjab",capital:"",population:"873725",population_proper:"873725"},{city:"Bhubaneshwar",lat:"20.2644",lng:"85.8281",country:"India",iso2:"IN",admin_name:"Odisha",capital:"admin",population:"837737",population_proper:"837737"},{city:"Bhayandar",lat:"19.3000",lng:"72.8500",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"814655",population_proper:"814655"},{city:"Moradabad",lat:"28.8418",lng:"78.7568",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"787000",population_proper:"721139"},{city:"Kolhapur",lat:"16.7000",lng:"74.2333",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"750000",population_proper:"561841"},{city:"Thiruvananthapuram",lat:"8.5000",lng:"76.8997",country:"India",iso2:"IN",admin_name:"Kerala",capital:"admin",population:"743691",population_proper:"743691"},{city:"Saharanpur",lat:"29.9640",lng:"77.5460",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"705478",population_proper:"705478"},{city:"Warangal",lat:"17.9756",lng:"79.6011",country:"India",iso2:"IN",admin_name:"Telangana",capital:"",population:"704570",population_proper:"704570"},{city:"Salem",lat:"11.6500",lng:"78.1667",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"693236",population_proper:"693236"},{city:"Malegaon",lat:"20.5500",lng:"74.5500",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"690844",population_proper:"435362"},{city:"Kochi",lat:"9.9667",lng:"76.2833",country:"India",iso2:"IN",admin_name:"Kerala",capital:"",population:"677381",population_proper:"677381"},{city:"Gorakhpur",lat:"26.7611",lng:"83.3667",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"673446",population_proper:"673446"},{city:"Shimoga",lat:"13.9304",lng:"75.5600",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"654055",population_proper:"319550"},{city:"Tirupp\u016br",lat:"11.1075",lng:"77.3398",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"650000",population_proper:"444543"},{city:"Gunt\u016br",lat:"16.3000",lng:"80.4500",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"647508",population_proper:"647508"},{city:"Raurkela",lat:"22.2492",lng:"84.8828",country:"India",iso2:"IN",admin_name:"Odisha",capital:"",population:"625831",population_proper:"483629"},{city:"Mangalore",lat:"12.8703",lng:"74.8806",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"623841",population_proper:"623841"},{city:"Nanded",lat:"19.1500",lng:"77.3333",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"623708",population_proper:"550564"},{city:"Cuttack",lat:"20.4500",lng:"85.8667",country:"India",iso2:"IN",admin_name:"Odisha",capital:"",population:"606007",population_proper:"606007"},{city:"Chanda",lat:"19.9500",lng:"79.3000",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"595118",population_proper:"328351"},{city:"Dehra D\u016bn",lat:"30.3180",lng:"78.0290",country:"India",iso2:"IN",admin_name:"Uttarakhand",capital:"admin",population:"578420",population_proper:"578420"},{city:"Durgapur",lat:"23.5500",lng:"87.3200",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"566517",population_proper:"566517"},{city:"\u0100sansol",lat:"23.6833",lng:"86.9667",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"563917",population_proper:"563917"},{city:"Bhavnagar",lat:"21.7650",lng:"72.1369",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"554978",population_proper:"464602"},{city:"Amravati",lat:"20.9333",lng:"77.7500",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"549370",population_proper:"549370"},{city:"Nellore",lat:"14.4333",lng:"79.9667",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"547621",population_proper:"547621"},{city:"Ajmer",lat:"26.4680",lng:"74.6390",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"542321",population_proper:"542321"},{city:"Tinnevelly",lat:"8.7289",lng:"77.7081",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"542200",population_proper:"435844"},{city:"B\u012bkaner",lat:"28.0181",lng:"73.3169",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"529007",population_proper:"529007"},{city:"Agartala",lat:"23.8333",lng:"91.2667",country:"India",iso2:"IN",admin_name:"Tripura",capital:"admin",population:"522613",population_proper:"522613"},{city:"Ujjain",lat:"23.1828",lng:"75.7772",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"515215",population_proper:"515215"},{city:"Jhansi",lat:"25.4486",lng:"78.5696",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"507000",population_proper:"507000"},{city:"Ulhasnagar",lat:"19.2167",lng:"73.1500",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"506098",population_proper:"506098"},{city:"Davangere",lat:"14.4667",lng:"75.9167",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"503564",population_proper:"435125"},{city:"Jammu",lat:"32.7333",lng:"74.8500",country:"India",iso2:"IN",admin_name:"Jammu and Kashm\u012br",capital:"",population:"502197",population_proper:"502197"},{city:"Belgaum",lat:"15.8667",lng:"74.5000",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"488157",population_proper:"488157"},{city:"Gulbarga",lat:"17.3333",lng:"76.8333",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"483615",population_proper:"481478"},{city:"Jamnagar",lat:"22.4700",lng:"70.0700",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"479920",population_proper:"479920"},{city:"Dh\u016blia",lat:"20.9000",lng:"74.7833",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"479073",population_proper:"366980"},{city:"Gaya",lat:"24.7500",lng:"85.0167",country:"India",iso2:"IN",admin_name:"Bihar",capital:"",population:"474093",population_proper:"474093"},{city:"Jalgaon",lat:"21.0167",lng:"75.5667",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"460468",population_proper:"460468"},{city:"Kurnool",lat:"15.8222",lng:"78.0350",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"457633",population_proper:"457633"},{city:"Udaipur",lat:"24.5833",lng:"73.6833",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"451100",population_proper:"451100"},{city:"Bellary",lat:"15.1500",lng:"76.9150",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"445388",population_proper:"336681"},{city:"Sangli",lat:"16.8667",lng:"74.5667",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"436639",population_proper:"436639"},{city:"Tuticorin",lat:"8.7833",lng:"78.1333",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"436094",population_proper:"436094"},{city:"Calicut",lat:"11.2500",lng:"75.7667",country:"India",iso2:"IN",admin_name:"Kerala",capital:"minor",population:"431560",population_proper:"431560"},{city:"Akola",lat:"20.7333",lng:"77.0000",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"425817",population_proper:"425817"},{city:"Bhagalpur",lat:"25.2500",lng:"87.0167",country:"India",iso2:"IN",admin_name:"Bihar",capital:"",population:"410210",population_proper:"410210"},{city:"S\u012bkar",lat:"27.6119",lng:"75.1397",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"400000",population_proper:"237579"},{city:"Tumk\u016br",lat:"13.3300",lng:"77.1000",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"399606",population_proper:"307359"},{city:"Quilon",lat:"8.8853",lng:"76.5864",country:"India",iso2:"IN",admin_name:"Kerala",capital:"",population:"397419",population_proper:"397419"},{city:"Muzaffarnagar",lat:"29.4708",lng:"77.7033",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"392451",population_proper:"392451"},{city:"Bh\u012blwara",lat:"25.3500",lng:"74.6333",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"389911",population_proper:"326431"},{city:"Nizamabad",lat:"18.6704",lng:"78.1000",country:"India",iso2:"IN",admin_name:"Telangana",capital:"",population:"388505",population_proper:"305438"},{city:"Bhatpara",lat:"22.8667",lng:"88.4167",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"386019",population_proper:"386019"},{city:"Kakinada",lat:"16.9333",lng:"82.2167",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"384182",population_proper:"384182"},{city:"Parbhani",lat:"19.2704",lng:"76.7600",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"378326",population_proper:"289629"},{city:"Panihati",lat:"22.6900",lng:"88.3700",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"377347",population_proper:"377347"},{city:"Lat\u016br",lat:"18.4004",lng:"76.5700",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"374394",population_proper:"348967"},{city:"Rohtak",lat:"28.9000",lng:"76.5667",country:"India",iso2:"IN",admin_name:"Haryana",capital:"",population:"374292",population_proper:"374292"},{city:"Rajapalaiyam",lat:"9.4204",lng:"77.5800",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"369991",population_proper:"307959"},{city:"Ahmadnagar",lat:"19.0833",lng:"74.7333",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"350859",population_proper:"350859"},{city:"Cuddapah",lat:"14.4667",lng:"78.8167",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"344893",population_proper:"344893"},{city:"Rajahmundry",lat:"16.9833",lng:"81.7833",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"341831",population_proper:"341831"},{city:"Alwar",lat:"27.5667",lng:"76.6167",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"341422",population_proper:"341422"},{city:"Muzaffarpur",lat:"26.1200",lng:"85.3833",country:"India",iso2:"IN",admin_name:"Bihar",capital:"",population:"333200",population_proper:"333200"},{city:"Bilaspur",lat:"22.1500",lng:"82.0167",country:"India",iso2:"IN",admin_name:"Chhatt\u012bsgarh",capital:"",population:"331030",population_proper:"331030"},{city:"Mathura",lat:"27.4833",lng:"77.6833",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"330511",population_proper:"330511"},{city:"Kamarhati",lat:"22.6700",lng:"88.3700",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"330211",population_proper:"330211"},{city:"Patiala",lat:"30.3204",lng:"76.3850",country:"India",iso2:"IN",admin_name:"Punjab",capital:"",population:"329224",population_proper:"329224"},{city:"Saugor",lat:"23.8504",lng:"78.7500",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"328240",population_proper:"247333"},{city:"Bijapur",lat:"16.8244",lng:"75.7154",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"327427",population_proper:"327427"},{city:"Brahmapur",lat:"19.3200",lng:"84.8000",country:"India",iso2:"IN",admin_name:"Odisha",capital:"",population:"324726",population_proper:"324726"},{city:"Shahjanpur",lat:"27.8804",lng:"79.9050",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"320434",population_proper:"320434"},{city:"Trich\u016br",lat:"10.5200",lng:"76.2100",country:"India",iso2:"IN",admin_name:"Kerala",capital:"",population:"315596",population_proper:"315596"},{city:"Barddhaman",lat:"23.2500",lng:"87.8500",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"314265",population_proper:"314265"},{city:"Kulti",lat:"23.7300",lng:"86.8500",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"313809",population_proper:"313809"},{city:"Sambalpur",lat:"21.4704",lng:"83.9701",country:"India",iso2:"IN",admin_name:"Odisha",capital:"",population:"310852",population_proper:"162887"},{city:"Purnea",lat:"25.7800",lng:"87.4700",country:"India",iso2:"IN",admin_name:"Bihar",capital:"",population:"310817",population_proper:"310817"},{city:"Hisar",lat:"29.1489",lng:"75.7367",country:"India",iso2:"IN",admin_name:"Haryana",capital:"",population:"307024",population_proper:"307024"},{city:"F\u012brozabad",lat:"27.1500",lng:"78.3949",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"306409",population_proper:"306409"},{city:"B\u012bdar",lat:"17.9229",lng:"77.5175",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"300136",population_proper:"204071"},{city:"Rampur",lat:"28.8154",lng:"79.0250",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"296418",population_proper:"296418"},{city:"Shiliguri",lat:"26.7200",lng:"88.4200",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"294546",population_proper:"294546"},{city:"Bali",lat:"22.6500",lng:"88.3400",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"293373",population_proper:"293373"},{city:"Pan\u012bpat",lat:"29.4004",lng:"76.9700",country:"India",iso2:"IN",admin_name:"Haryana",capital:"",population:"292808",population_proper:"292808"},{city:"Kar\u012bmnagar",lat:"18.4333",lng:"79.1500",country:"India",iso2:"IN",admin_name:"Telangana",capital:"",population:"289821",population_proper:"289821"},{city:"Bhuj",lat:"23.2504",lng:"69.8100",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"289429",population_proper:"289429"},{city:"Ichalkaranji",lat:"16.7000",lng:"74.4700",country:"India",iso2:"IN",admin_name:"Maharashtra",capital:"",population:"287570",population_proper:"287570"},{city:"Tirupati",lat:"13.6500",lng:"79.4200",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"287482",population_proper:"287482"},{city:"Hospet",lat:"15.2667",lng:"76.4000",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"286007",population_proper:"197846"},{city:"\u0100\u012bzawl",lat:"23.7104",lng:"92.7200",country:"India",iso2:"IN",admin_name:"Mizoram",capital:"admin",population:"283021",population_proper:"265331"},{city:"Sannai",lat:"24.1600",lng:"80.8300",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"283004",population_proper:"283004"},{city:"Barasat",lat:"22.2333",lng:"88.4500",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"278435",population_proper:"278435"},{city:"Ratlam",lat:"23.3167",lng:"75.0667",country:"India",iso2:"IN",admin_name:"Madhya Pradesh",capital:"",population:"273892",population_proper:"273892"},{city:"Handwara",lat:"34.4000",lng:"74.2800",country:"India",iso2:"IN",admin_name:"Jammu and Kashm\u012br",capital:"",population:"269311",population_proper:"269311"},{city:"Drug",lat:"21.1900",lng:"81.2800",country:"India",iso2:"IN",admin_name:"Chhatt\u012bsgarh",capital:"",population:"268806",population_proper:"268806"},{city:"Imphal",lat:"24.8200",lng:"93.9500",country:"India",iso2:"IN",admin_name:"Manipur",capital:"admin",population:"268243",population_proper:"268243"},{city:"Anantapur",lat:"14.6833",lng:"77.6000",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"267161",population_proper:"267161"},{city:"Etawah",lat:"26.7855",lng:"79.0150",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"257448",population_proper:"257448"},{city:"Raich\u016br",lat:"16.2104",lng:"77.3550",country:"India",iso2:"IN",admin_name:"Karnataka",capital:"",population:"255240",population_proper:"225962"},{city:"Ongole",lat:"15.5000",lng:"80.0500",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"252739",population_proper:"252739"},{city:"Bharatpur",lat:"27.2172",lng:"77.4900",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"252342",population_proper:"252342"},{city:"Begusarai",lat:"25.4200",lng:"86.1300",country:"India",iso2:"IN",admin_name:"Bihar",capital:"",population:"252008",population_proper:"252008"},{city:"Son\u012bpat",lat:"28.9958",lng:"77.0114",country:"India",iso2:"IN",admin_name:"Haryana",capital:"",population:"250521",population_proper:"250521"},{city:"Ramgundam",lat:"18.8000",lng:"79.4500",country:"India",iso2:"IN",admin_name:"Telangana",capital:"",population:"242979",population_proper:"242979"},{city:"Hapur",lat:"28.7437",lng:"77.7628",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"242920",population_proper:"242920"},{city:"Uluberiya",lat:"22.4700",lng:"88.1100",country:"India",iso2:"IN",admin_name:"West Bengal",capital:"",population:"235345",population_proper:"235345"},{city:"Porbandar",lat:"21.6425",lng:"69.6047",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"",population:"234684",population_proper:"138872"},{city:"Pali",lat:"25.7725",lng:"73.3233",country:"India",iso2:"IN",admin_name:"Rajasthan",capital:"",population:"229956",population_proper:"229956"},{city:"Vizianagaram",lat:"18.1167",lng:"83.4167",country:"India",iso2:"IN",admin_name:"Andhra Pradesh",capital:"",population:"228720",population_proper:"228720"},{city:"Puducherry",lat:"11.9300",lng:"79.8300",country:"India",iso2:"IN",admin_name:"Puducherry",capital:"admin",population:"227411",population_proper:"227411"},{city:"Karnal",lat:"29.6804",lng:"76.9700",country:"India",iso2:"IN",admin_name:"Haryana",capital:"",population:"225049",population_proper:"225049"},{city:"Nagercoil",lat:"8.1700",lng:"77.4300",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"224329",population_proper:"213858"},{city:"Tanjore",lat:"10.8000",lng:"79.1500",country:"India",iso2:"IN",admin_name:"Tamil Nadu",capital:"",population:"222943",population_proper:"222943"},{city:"Sambhal",lat:"28.5800",lng:"78.5500",country:"India",iso2:"IN",admin_name:"Uttar Pradesh",capital:"",population:"220813",population_proper:"220813"},{city:"Shimla",lat:"31.1033",lng:"77.1722",country:"India",iso2:"IN",admin_name:"Himachal Pradesh",capital:"admin",population:"206575",population_proper:"206575"},{city:"Ghand\u012bnagar",lat:"23.2200",lng:"72.6800",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"admin",population:"195891",population_proper:"195891"},{city:"Shillong",lat:"25.5744",lng:"91.8789",country:"India",iso2:"IN",admin_name:"Meghalaya",capital:"admin",population:"143229",population_proper:"143229"},{city:"New Delhi",lat:"28.7000",lng:"77.2000",country:"India",iso2:"IN",admin_name:"Delhi",capital:"primary",population:"142004",population_proper:"142004"},{city:"Port Blair",lat:"11.6667",lng:"92.7500",country:"India",iso2:"IN",admin_name:"Andaman and Nicobar Islands",capital:"admin",population:"127562",population_proper:"112050"},{city:"Gangtok",lat:"27.3300",lng:"88.6200",country:"India",iso2:"IN",admin_name:"Sikkim",capital:"admin",population:"100286",population_proper:"100286"},{city:"Koh\u012bma",lat:"25.6667",lng:"94.1194",country:"India",iso2:"IN",admin_name:"Nagaland",capital:"admin",population:"99039",population_proper:"99039"},{city:"Itanagar",lat:"27.1000",lng:"93.6200",country:"India",iso2:"IN",admin_name:"Arunachal Pradesh",capital:"admin",population:"59490",population_proper:"59490"},{city:"Panaji",lat:"15.4800",lng:"73.8300",country:"India",iso2:"IN",admin_name:"Goa",capital:"admin",population:"40017",population_proper:"40017"},{city:"Daman",lat:"20.4170",lng:"72.8500",country:"India",iso2:"IN",admin_name:"Gujarat",capital:"admin",population:"39737",population_proper:"39737"},{city:"Kavaratti",lat:"10.5626",lng:"72.6369",country:"India",iso2:"IN",admin_name:"Lakshadweep",capital:"admin",population:"10688",population_proper:"10688"},{city:"Panchkula",lat:"30.6915",lng:"76.8537",country:"India",iso2:"IN",admin_name:"Haryana",capital:"minor",population:"",population_proper:""},{city:"Kagaznagar",lat:"19.3316",lng:"79.4661",country:"India",iso2:"IN",admin_name:"Telangana",capital:"minor",population:"",population_proper:""}]},placeholder:"Search City",valueProperty:"city",dataType:"string",idPath:"city",template:"<span>{{ item.city }}, {{item.admin_name}}</span>",selectThreshold:.3,validate:{onlyAvailableItems:!1},customClass:"searchFormio",key:"select",type:"select",indexeddb:{filter:{}},input:!0}]},R=function(a){Object(I.a)(t,a);var n=Object(_.a)(t);function t(a){var i;return Object(m.a)(this,t),(i=n.call(this,a)).cityChange=function(a){""!=a.data.select&&i.props.dispatch(v({city:a.data.select}))},i.cityChange=i.cityChange.bind(Object(h.a)(i)),i}return Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(b())}},{key:"componentWillReceiveProps",value:function(a){a.userCityData.userCityDetails.city!==this.props.userCityData.userCityDetails.city&&this.props.dispatch(v({city:a.userCityData.userCityDetails.city}))}},{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("center",{children:Object(i.jsx)(M.Form,{form:S,className:"myForm",onChange:this.cityChange})}),this.props.weatherData.loading?Object(i.jsx)(B,{}):Object(i.jsx)(T,{weatherData:this.props.weatherData})]})}}]),t}(p.a.Component),A=Object(c.b)((function(a){return{userCityData:a&&a.userCity,weatherData:a&&a.weather}}),(function(a){return{loadUserCity:b,loadWeather:v,dispatch:a}})),K=Object(u.d)(A)(R);var U=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(d.a,{exact:!0,path:"/",component:K})})},D=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,1255)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,p=n.getLCP,l=n.getTTFB;t(a),i(a),o(a),p(a),l(a)}))},G=t(59),E={loading:!0,userCityDetails:{},error:null},W=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return Object(G.a)(Object(G.a)({},a),{},{loading:!0});case N:return Object(G.a)(Object(G.a)({},a),{},{loading:!1,error:null,userCityDetails:n.data});case j:return Object(G.a)(Object(G.a)({},a),{},{loading:!0,error:n,userCityDetails:null});default:return a}},H={loading:!0,weather:{},error:null},J=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return Object(G.a)(Object(G.a)({},a),{},{loading:!0});case O:return Object(G.a)(Object(G.a)({},a),{},{loading:!1,error:null,weather:n.data});case f:return Object(G.a)(Object(G.a)({},a),{},{loading:!0,error:n,weather:null});default:return a}},F=Object(u.c)({userCity:W,weather:J}),L=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"RESET_STATE"===n.type&&(a=void 0),F(a,n)},z=t(63),V=t.n(z),Y=t(64),q={get:function(a,n){return fetch(""+a,{headers:{"Content-Type":"application/json"}}).then((function(a){if(200===a.status)return a.json();400===a.status||(404===a.status||"Not Found"===a.message?window.location.href="/":a.status)}))},post:function(a,n){return fetch(""+a,{headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(a){if(200===a.status)return a.json();400===a.status||"Not Found"===a.message||a.status}))}};var Q=function(){return q.get("https://api.ipify.org/?format=json")},X=function(a){return q.get("https://ipinfo.io/"+a+"?token=6dcd47678854be")},Z=function(a){return q.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q="+a+"&appid=59134621c7de17186764ccbd9b558499")},$=V.a.mark(na),aa=V.a.mark(ta);function na(a){var n,t;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Y.b)(Q);case 3:return n=a.sent,a.next=6,Object(Y.b)(X,n.ip);case 6:return t=a.sent,a.next=9,Object(Y.c)({type:N,data:t});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(Y.c)({type:j,data:a.t0});case 15:case"end":return a.stop()}}),$,null,[[0,11]])}function ta(){return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Y.d)(g,na);case 2:case"end":return a.stop()}}),aa)}var ia=V.a.mark(pa),oa=V.a.mark(la);function pa(a){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Y.b)(Z,a.payload.city);case 3:return n=t.sent,t.next=6,Object(Y.c)({type:O,data:n});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Y.c)({type:f,data:t.t0});case 12:case"end":return t.stop()}}),ia,null,[[0,8]])}function la(){return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Y.d)(x,pa);case 2:case"end":return a.stop()}}),oa)}var ra=V.a.mark(ea);function ea(){return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Y.a)([ta(),la()]);case 2:case"end":return a.stop()}}),ra)}var ca=Object(e.a)(),ua=Object(u.e)(L,Object(u.a)(ca));ca.run(ea),r.a.render(Object(i.jsx)(p.a.StrictMode,{children:Object(i.jsx)(c.a,{store:ua,children:Object(i.jsx)(U,{})})}),document.getElementById("root")),D()},409:function(a,n,t){}},[[1236,1,2]]]);
//# sourceMappingURL=main.b858aaf8.chunk.js.map