const
    util     = require('../ontology.util.js'),
    prefix   = 'vcard',
    ontology = 'http://www.w3.org/2006/vcard/ns#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/ld+json', `${prefix}/local/${prefix}.json`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);