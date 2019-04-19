
const os = require('os');
const networkInterfaces = os.networkInterfaces();
const etherlink = networkInterfaces['以太网'];
const WLAN = networkInterfaces['WLAN'];
const eth0 = networkInterfaces['eth0'];
const dutyCycle = (arr) => {
    let IPv4
    for(var i=0;i<arr.length;i++){
        if(arr[i].family==='IPv4'){
            IPv4 = arr[i].address;
        }
    }
    return IPv4
}
const getIPv4 = () => {
    if(etherlink){
      return  dutyCycle(etherlink)
    } else if(WLAN) {
      return  dutyCycle(WLAN)
    }else if(eth0){
      return  dutyCycle(WLAN)
    }else{
      return '127.0.0.1'
    }
}

module.exports = getIPv4