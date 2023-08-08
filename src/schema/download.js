const
    util     = require('../util.js'),
    prefix   = 'schema',
    ontology = 'http://schema.org/',
    override = false;

Promise.all([
    util.downloadOntology('http://schema.org/version/latest/schemaorg-current-http.ttl', null, `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology('http://schema.org/version/latest/schemaorg-current-http.jsonld', null, `data/${prefix}/${prefix}.json`, override),
    util.downloadOntology('http://schema.org/version/latest/schemaorg-current-http.rdf', null, `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
