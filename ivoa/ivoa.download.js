const
    util     = require('../ontology.util.js'),
    prefix   = 'ivoa',
    ontology = 'http://eurovotech.org/objects-structure.owl',
    override = false;

Promise.all([
    util.downloadOntology('https://wiki.ivoa.net/internal/IVOA/IvoaSemantics/ObjectTypes_0.99r.owl', 'application/rdf+xml', `${prefix}/local/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
