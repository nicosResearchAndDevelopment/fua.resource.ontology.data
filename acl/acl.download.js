const
    util     = require('../ontology.util.js'),
    prefix   = 'acl',
    ontology = 'http://www.w3.org/ns/auth/acl#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override),
    util.downloadOntology(ontology, 'text/n3', `${prefix}/local/${prefix}.n3`, override)
]).then(util.logDone).catch(util.logError);
