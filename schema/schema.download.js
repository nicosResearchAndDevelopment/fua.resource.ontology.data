const
    util     = require('../ontology.util.js'),
    prefix   = 'schema',
    ontology = 'http://schema.org/',
    override = false;

Promise.all([
    util.downloadOntology('http://schema.org/version/latest/schemaorg-current-http.ttl', null, `${prefix}/local/${prefix}.ttl`, override),
    util.downloadOntology('http://schema.org/version/latest/schemaorg-current-http.jsonld', null, `${prefix}/local/${prefix}.json`, override),
    util.downloadOntology('http://schema.org/version/latest/schemaorg-current-http.rdf', null, `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
