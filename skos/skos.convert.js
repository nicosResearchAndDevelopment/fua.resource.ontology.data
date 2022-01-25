const
    util     = require('../ontology.util.js'),
    prefix   = 'skos',
    context  = {
        'dct':  'http://purl.org/dc/terms/',
        'owl':  'http://www.w3.org/2002/07/owl#',
        'rdf':  'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'skos': 'http://www.w3.org/2004/02/skos/core#'
    },
    override = false;

Promise.all([
    util.convertOntology(`${prefix}/local/${prefix}.xml`, 'application/rdf+xml', `${prefix}/local/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
