const
    {describe, test} = require('mocha'),
    expect           = require('expect'),
    {loadDataFiles}  = require('@nrd/fua.module.rdf'),
    {Dataset}        = require('@nrd/fua.module.persistence'),
    res_ontology     = require('@nrd/fua.resource.ontology');

describe('resource.ontology', function () {

    this.timeout(0);

    test('should load ontologies with rdf-module', async function () {
        const dataFiles = await loadDataFiles(res_ontology);
        expect(dataFiles.length).toBeGreaterThan(0);

        const ontologyData = new Dataset();
        dataFiles
            .map(({dataset}) => dataset)
            .filter(dataset => dataset)
            .forEach(dataset => ontologyData.add(dataset));
        expect(ontologyData.size).toBeGreaterThan(0);

        console.log('quads:', ontologyData.size);
        debugger;
    });

});
