/**  @type {import('next').NextConfig} **/

//module คือตัวแปรที่มีอยู่แล้วใน nodejs
module.exports = {
 //output : 'export' ,
 images : {
    //unoptimized : true
    remotePatterns : [
        {
            protocol : "http" ,
            hostname : "localhost" ,
            port : "1337" ,
            pathname : "/uploads/**" ,
        }
    ]
 }
};