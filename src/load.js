module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.data',
    'dct:requires':    [
        {
            'dct:identifier': './dcat/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './geo/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './org/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './prov/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './schema/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './shacl/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './time/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './vcard/load.js',
            'dct:format':     'application/fua.load+js'
        }
    ]
};
