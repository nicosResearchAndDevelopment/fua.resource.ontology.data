const
    util     = require('../ontology.util.js'),
    prefix   = 'vc',
    ontology = 'https://www.w3.org/2018/credentials#',
    override = false;

Promise.all([
    util.downloadOntology('https://www.w3.org/2018/credentials/v1', null, `${prefix}/local/${prefix}.json`, override)
]).then(util.logDone).catch(util.logError);
