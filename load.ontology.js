module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ontology',
    'dct:alternative': '@nrd/fua.resource.ontology',
    'dct:requires':    [
        {
            'dct:identifier': './acl/load.acl.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './cert/load.cert.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './dcat/load.dcat.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './fno/load.fno.js',
            'dct:format':     'application/fua.load+js'
        },
        // {
        //     'dct:identifier': './geo/load.geo.js',
        //     'dct:format':     'application/fua.load+js'
        // },
        {
            'dct:identifier': './http/load.http.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './ldn/load.ldn.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './ldp/load.ldp.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './odrl/load.odrl.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './org/load.org.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './prov/load.prov.js',
            'dct:format':     'application/fua.load+js'
        },
        // {
        //     'dct:identifier': './saref/load.saref.js',
        //     'dct:format':     'application/fua.load+js'
        // },
        {
            'dct:identifier': './schema/load.schema.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './shacl/load.shacl.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './time/load.time.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './vc/load.vc.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './vcard/load.vcard.js',
            'dct:format':     'application/fua.load+js'
        }
    ]
};
