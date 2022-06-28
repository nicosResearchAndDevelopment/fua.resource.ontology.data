module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.schema',
    'dct:alternative': '@nrd/fua.resource.ontology/schema',
    'dct:requires':    [{
        'dct:identifier': './local/schema.ttl',
        'dct:format':     'text/turtle'
    }]
};
