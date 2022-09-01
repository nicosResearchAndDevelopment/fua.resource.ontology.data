module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.dcat',
    'dct:alternative': '@nrd/fua.resource.ontology/dcat',
    'dct:requires':    [{
        'dct:identifier': './local/dcat.ttl',
        'dct:format':     'text/turtle'
    }]
};
