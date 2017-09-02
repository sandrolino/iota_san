


var IOTA = require('iota.lib.js');
let iota = new IOTA({provider: 'http://52.59.39.201:14700'});

var myAddress =  'SUDDCQQKIIVKAAVBYDPNPPYJLIMLV9NLKOZNRHV9CHCQCS9QNNUUONXMUQDZAPFHORMDLUNSOTFHPNYVD';

var mySeed = 'XX'


iota.api.findTransactions({addresses: [myAddress]}, function(e, res) {
  if (e) throw e;

  //console.log("Txs found ", res);
  iota.api.getTransactionsObjects(res, function(e, res) {
           if (e) throw e;

           //console.log(Date(res[500].timestamp))
           //console.log('Objects found', res);
           console.log('# of txs', res.length)
           for (var i = 0; i < res.length; i++) {

             var data = iota.utils.fromTrytes(res[i].signatureMessageFragment.slice(0, 2000));
             var t = ((res[i].timestamp));
             //console.log(Date(res[i].timestamp));
             console.log('Tx', data, 'UnixTime', t);
           }
         });
});
