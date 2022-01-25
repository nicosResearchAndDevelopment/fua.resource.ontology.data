const
    util     = require('../ontology.util.js'),
    prefix   = 'dc',
    ontology = 'http://purl.org/dc/elements/1.1/',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
