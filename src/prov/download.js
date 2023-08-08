const
    util     = require('../util.js'),
    prefix   = 'prov',
    ontology = 'http://www.w3.org/ns/prov#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
