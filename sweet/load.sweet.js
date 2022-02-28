const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.sweet.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.sweet',
    'dct:alternative': '@nrd/fua.resource.ontology/sweet',
    'dct:requires':    [{
        'dct:identifier': './local/human.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanAgriculture.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanCommerce.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanDecision.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanEnvirAssessment.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanEnvirConservation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanEnvirControl.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanEnvirStandards.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanJurisdiction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanKnowledgeDomain.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanResearch.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanTechReadiness.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/humanTransportation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matr.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrAerosol.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrAnimal.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrBiomass.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrCompound.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrElement.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrElementalMolecule.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrEnergy.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrEquipment.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrFacility.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrIndustrial.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrInstrument.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrIon.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrIsotope.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrMicrobiota.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrMineral.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrNaturalResource.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrOrganicCompound.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrParticle.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrPlant.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrRock.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrRockIgneous.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrSediment.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/matrWater.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phen.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmo.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoCloud.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoFog.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoFront.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoLightning.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoPrecipitation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoPressure.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoSky.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoTransport.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoWind.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenAtmoWindMesoscale.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenBiol.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenCryo.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenCycle.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenCycleMaterial.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenEcology.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenElecMag.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenEnergy.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenEnvirImpact.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenFluidDynamics.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenFluidInstability.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenFluidTransport.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenGeol.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenGeolFault.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenGeolGeomorphology.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenGeolSeismicity.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenGeolTectonic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenGeolVolcano.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenHelio.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenHydro.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenMixing.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenOcean.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenOceanCoastal.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenOceanDynamics.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenPlanetClimate.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenReaction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenSolid.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenStar.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenSystem.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenSystemComplexity.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenWave.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/phenWaveNoise.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/proc.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/procChemical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/procPhysical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/procStateChange.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/procWave.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/prop.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propBinary.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propCapacity.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propCategorical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propCharge.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propChemical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propConductivity.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propCount.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propDifference.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propDiffusivity.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propDimensionlessRatio.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propEnergy.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propEnergyFlux.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propFraction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propFunction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propIndex.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propMass.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propMassFlux.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propOrdinal.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propPressure.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propQuantity.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propRotation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpace.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpaceDirection.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpaceDistance.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpaceHeight.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpaceLocation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpaceMultidimensional.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpaceThickness.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propSpeed.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propTemperature.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propTemperatureGradient.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propTime.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/propTimeFrequency.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realm.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmAstroBody.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmAstroHelio.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmAstroStar.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmAtmo.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmAtmoBoundaryLayer.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmAtmoWeather.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmBiolBiome.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmClimateZone.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmCryo.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmEarthReference.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmGeol.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmGeolBasin.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmGeolConstituent.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmGeolContinental.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmGeolOceanic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmGeolOrogen.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmHydro.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmHydroBody.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandAeolian.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandCoastal.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandFluvial.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandGlacial.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandOrographic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandProtected.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandTectonic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandVolcanic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmLandform.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmOcean.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmOceanFeature.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmOceanFloor.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmRegion.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/realmSoil.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/rela.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaChemical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaClimate.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaHuman.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaMath.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaPhysical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaProvenance.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaSci.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaSpace.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/relaTime.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/repr.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataFormat.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataModel.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataProduct.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataService.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataServiceAnalysis.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataServiceGeospatial.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataServiceReduction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprDataServiceValidation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMath.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMathFunction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMathFunctionOrthogonal.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMathGraph.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMathOperation.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMathSolution.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprMathStatistics.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciComponent.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciFunction.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciLaw.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciMethodology.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciModel.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciProvenance.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSciUnits.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSpace.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSpaceCoordinate.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSpaceDirection.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSpaceGeometry.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSpaceGeometry3D.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprSpaceReferenceSystem.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprTime.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprTimeDay.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/reprTimeSeason.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/state.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateBiological.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateChemical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateDataProcessing.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateEnergyFlux.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateFluid.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateOrdinal.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/statePhysical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRealm.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRole.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRoleBiological.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRoleChemical.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRoleGeographic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRoleImpact.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRoleRepresentative.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateRoleTrust.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSolid.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSpace.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSpaceConfiguration.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSpaceScale.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSpectralBand.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSpectralLine.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateStorm.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateSystem.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateThermodynamic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateTime.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateTimeCycle.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateTimeFrequency.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateTimeGeologic.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/stateVisibility.ttl',
        'dct:format':     'text/turtle'
        // }, {
        //     'dct:identifier': './local/sweetAll.ttl',
        //     'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/sweetAll_includeV23Comments.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/sweet_v23Comments.ttl',
        'dct:format':     'text/turtle'
    }]
};
