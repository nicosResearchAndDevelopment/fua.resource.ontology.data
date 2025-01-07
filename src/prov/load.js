module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.data/prov',
    'dct:requires':    [{
        'dct:identifier': '../../data/prov/prov_fixed.ttl',
        'dct:format':     'text/turtle'
    }]
};
