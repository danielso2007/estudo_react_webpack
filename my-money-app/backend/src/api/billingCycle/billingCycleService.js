const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
// Ajustes e obrigatoriedades no PUT - Update
BillingCycle.updateOptions({new: true, runValidators: true});

module.exports = BillingCycle;