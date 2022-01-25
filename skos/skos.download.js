const
    util     = require('../ontology.util.js'),
    prefix   = 'skos',
    ontology = 'http://www.w3.org/2004/02/skos/core#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
