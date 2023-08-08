const
    util     = require('../util.js'),
    prefix   = 'time',
    ontology = 'https://www.w3.org/2006/time',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/ld+json', `data/${prefix}/${prefix}.json`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
