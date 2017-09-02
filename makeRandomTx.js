
var IOTA = require('iota.lib.js');

//var myAddress = 'EMUCZHCCOSDPLVXTJTZWIADHYDSMAFKHVPYUSXOMVTDCURQGFXQRWAIU9FPTXAJLMQYABQAH9MSTHAPTD';

var myAddress = 'SUDDCQQKIIVKAAVBYDPNPPYJLIMLV9NLKOZNRHV9CHCQCS9QNNUUONXMUQDZAPFHORMDLUNSOTFHPNYVD';
var mySeed = 'XX'; //replace this!
const MWM = 9;


var iota = new IOTA({
    'provider' : 'http://52.59.39.201:14700'
});

iota.api.getNodeInfo(function(error, success) {
    console.log(success);
});


//function to send a Random number
function sendRand(randNum) {

  // the message which we will send with the transaction
  var messageToSend = {
      'name': 'sandro',
      'message': randNum
  }
  // Stringify to JSON
  var messageStringified = JSON.stringify(messageToSend);
  // Convert the string to trytes
  var messageTrytes = iota.utils.toTrytes(messageStringified);
  console.log('myMSG', messageTrytes) //ODGABDPCADTCGADBGAGDPCBDSCFDCDGAQAGAADTCGDGDPCVCTCGADBGAPBXCFDGDHDEAADTCGDGDPCVCTCEAUCFDCDADEABCPCBDSCFDCDEAGDTCBDHDEAKDXCHDWCEASBYBCCKBSAGAQD

  var transfer = [{
      'address': myAddress,
      'value': 0,
      'message': messageTrytes
  }]


  // We send the transfer from this seed, with depth 6 ancurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

  iota.api.sendTransfer(mySeed, 6, MWM, transfer, function(e, bundle) {
      if (e) throw e;
      console.log("Successfully sent your transfer: ", bundle);
  });

}

var randNum = Math.random().toString();

sendRand(randNum);
console.log('random number sent =', randNum);
