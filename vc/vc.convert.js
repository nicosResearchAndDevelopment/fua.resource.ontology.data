const
    util     = require('../ontology.util.js'),
    prefix   = 'vc',
    context  = {
        'cred': 'https://www.w3.org/2018/credentials#',
        'sec':  'https://w3id.org/security#',
        'xsd':  'http://www.w3.org/2001/XMLSchema#'
    },
    override = false;

Promise.all([
    util.convertOntology(`${prefix}/local/${prefix}.json`, 'application/ld+json', `${prefix}/local/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
