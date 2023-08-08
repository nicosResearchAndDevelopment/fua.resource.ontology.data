module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.data/time',
    'dct:requires':    [{
        'dct:identifier': '../../data/time/time.ttl',
        'dct:format':     'text/turtle'
    }]
};
