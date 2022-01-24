const
    util     = require('../ontology.util.js'),
    prefix   = 'org',
    ontology = 'http://www.w3.org/ns/org#',
    override = false;

Promise.all([
    util.downloadOntology('https://www.w3.org/ns/org.ttl', 'text/turtle', `${prefix}/local/${prefix}.ttl`, override)
]).then(util.logDone).catch(util.logError);
