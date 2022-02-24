const
    util     = require('../ontology.util.js'),
    prefix   = 'qudt',
    ontology = 'http://qudt.org/schema/qudt/',
    override = false;

Promise.all([
    util.downloadOntology('http://qudt.org/schema/qudt', 'text/turtle', `${prefix}/local/schema/qudt.ttl`, override),
    util.downloadOntology('http://qudt.org/schema/datatype', 'text/turtle', `${prefix}/local/schema/datatype.ttl`, override),
    util.downloadOntology('http://qudt.org/schema/mathematics', 'text/turtle', `${prefix}/local/schema/mathematics.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/constant', 'text/turtle', `${prefix}/local/vocab/constant.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/discipline', 'text/turtle', `${prefix}/local/vocab/discipline.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/prefix', 'text/turtle', `${prefix}/local/vocab/prefix.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/dimensionvector', 'text/turtle', `${prefix}/local/vocab/dimensionvector.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/quantitykind', 'text/turtle', `${prefix}/local/vocab/quantitykind.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/soqk', 'text/turtle', `${prefix}/local/vocab/soqk.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/sou', 'text/turtle', `${prefix}/local/vocab/sou.ttl`, override),
    util.downloadOntology('http://qudt.org/vocab/unit', 'text/turtle', `${prefix}/local/vocab/unit.ttl`, override)
]).then(util.logDone).catch(util.logError);
