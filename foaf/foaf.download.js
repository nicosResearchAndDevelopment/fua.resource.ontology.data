const
    util     = require('../ontology.util.js'),
    prefix   = 'foaf',
    ontology = 'http://xmlns.com/foaf/0.1/',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'application/ld+json', `${prefix}/local/${prefix}.json`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
