const
    util     = require('../ontology.util.js'),
    prefix   = 'cc',
    ontology = 'http://creativecommons.org/ns#',
    override = false;

Promise.all([
    util.downloadOntology('https://creativecommons.org/schema.rdf', null, `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
