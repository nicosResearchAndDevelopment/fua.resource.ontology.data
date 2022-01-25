const
    util     = require('../ontology.util.js'),
    prefix   = 'shacl',
    ontology = 'http://www.w3.org/ns/shacl#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
