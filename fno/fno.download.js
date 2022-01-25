const
    util     = require('../ontology.util.js'),
    prefix   = 'fno',
    ontology = 'https://w3id.org/function/ontology#',
    override = false;

Promise.all([
    util.downloadOntology('https://w3id.org/function/ontology/1.0.0', null, `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology('https://w3id.org/function/vocabulary/mapping/0.2.1', null, `${prefix}/local/${prefix}m.ttl`, override),
    util.downloadOntology('https://w3id.org/function/vocabulary/implementation/0.1.1', null, `${prefix}/local/${prefix}i.ttl`, override),
    util.downloadOntology('https://w3id.org/function/vocabulary/composition/0.1.0', null, `${prefix}/local/${prefix}c.ttl`, override)
]).then(util.logDone).catch(util.logError);
