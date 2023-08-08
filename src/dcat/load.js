module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.data/dcat',
    'dct:requires':    [{
        'dct:identifier': '../../data/dcat/dcat.ttl',
        'dct:format':     'text/turtle'
    }]
};
