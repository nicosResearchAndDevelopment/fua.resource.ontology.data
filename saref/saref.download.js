const
    util     = require('../ontology.util.js'),
    prefix   = 'saref',
    ontology = 'https://saref.etsi.org/core/',
    override = false;

Promise.all([
    util.downloadOntology(ontology + 'v3.1.1/saref.ttl', null, `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology(ontology + 'v3.1.1/saref.jsonld', null, `${prefix}/local/${prefix}.json`, override),
    util.downloadOntology(ontology + 'v3.1.1/saref.rdf', null, `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
