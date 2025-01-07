module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.data/shacl',
    'dct:requires':    [{
        'dct:identifier': '../../data/shacl/shacl.ttl',
        'dct:format':     'text/turtle'
    }]
};
