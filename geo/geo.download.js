const
    util     = require('../ontology.util.js'),
    prefix   = 'geo',
    ontology = 'http://www.w3.org/2003/01/geo/wgs84_pos#',
    override = false;

Promise.all([
    util.downloadOntology('http://www.w3.org/2003/01/geo/wgs84_pos', 'application/rdf+xml', `${prefix}/local/wgs84.xml`, override),
    util.downloadOntology('http://www.opengis.net/ont/geosparql', 'application/rdf+xml', `${prefix}/local/geosparql.xml`, override),
    util.downloadOntology('http://www.opengis.net/ont/gml', 'application/rdf+xml', `${prefix}/local/gml.xml`, override),
    util.downloadOntology('http://www.opengis.net/ont/sf', 'application/rdf+xml', `${prefix}/local/sf.xml`, override),
    util.downloadOntology('https://geojson.org/geojson-ld/vocab.rdf', 'application/rdf+xml', `${prefix}/local/geojson.xml`, override)
]).then(util.logDone).catch(util.logError);
