const
    util      = require('../ontology.util.js'),
    prefix    = 'sweet',
    ontology  = 'http://sweetontology.net/',
    github    = 'https://github.com/ESIPFed/sweet/tree/master/',
    githubRaw = 'https://raw.githubusercontent.com/ESIPFed/sweet/master',
    override  = false;

Promise.all([
    util.downloadOntology(`${githubRaw}/src/human.ttl`, 'text/turtle', `${prefix}/local/human.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanAgriculture.ttl`, 'text/turtle', `${prefix}/local/humanAgriculture.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanCommerce.ttl`, 'text/turtle', `${prefix}/local/humanCommerce.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanDecision.ttl`, 'text/turtle', `${prefix}/local/humanDecision.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanEnvirAssessment.ttl`, 'text/turtle', `${prefix}/local/humanEnvirAssessment.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanEnvirConservation.ttl`, 'text/turtle', `${prefix}/local/humanEnvirConservation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanEnvirControl.ttl`, 'text/turtle', `${prefix}/local/humanEnvirControl.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanEnvirStandards.ttl`, 'text/turtle', `${prefix}/local/humanEnvirStandards.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanJurisdiction.ttl`, 'text/turtle', `${prefix}/local/humanJurisdiction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanKnowledgeDomain.ttl`, 'text/turtle', `${prefix}/local/humanKnowledgeDomain.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanResearch.ttl`, 'text/turtle', `${prefix}/local/humanResearch.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanTechReadiness.ttl`, 'text/turtle', `${prefix}/local/humanTechReadiness.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/humanTransportation.ttl`, 'text/turtle', `${prefix}/local/humanTransportation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matr.ttl`, 'text/turtle', `${prefix}/local/matr.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrAerosol.ttl`, 'text/turtle', `${prefix}/local/matrAerosol.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrAnimal.ttl`, 'text/turtle', `${prefix}/local/matrAnimal.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrBiomass.ttl`, 'text/turtle', `${prefix}/local/matrBiomass.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrCompound.ttl`, 'text/turtle', `${prefix}/local/matrCompound.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrElement.ttl`, 'text/turtle', `${prefix}/local/matrElement.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrElementalMolecule.ttl`, 'text/turtle', `${prefix}/local/matrElementalMolecule.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrEnergy.ttl`, 'text/turtle', `${prefix}/local/matrEnergy.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrEquipment.ttl`, 'text/turtle', `${prefix}/local/matrEquipment.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrFacility.ttl`, 'text/turtle', `${prefix}/local/matrFacility.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrIndustrial.ttl`, 'text/turtle', `${prefix}/local/matrIndustrial.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrInstrument.ttl`, 'text/turtle', `${prefix}/local/matrInstrument.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrIon.ttl`, 'text/turtle', `${prefix}/local/matrIon.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrIsotope.ttl`, 'text/turtle', `${prefix}/local/matrIsotope.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrMicrobiota.ttl`, 'text/turtle', `${prefix}/local/matrMicrobiota.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrMineral.ttl`, 'text/turtle', `${prefix}/local/matrMineral.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrNaturalResource.ttl`, 'text/turtle', `${prefix}/local/matrNaturalResource.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrOrganicCompound.ttl`, 'text/turtle', `${prefix}/local/matrOrganicCompound.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrParticle.ttl`, 'text/turtle', `${prefix}/local/matrParticle.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrPlant.ttl`, 'text/turtle', `${prefix}/local/matrPlant.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrRock.ttl`, 'text/turtle', `${prefix}/local/matrRock.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrRockIgneous.ttl`, 'text/turtle', `${prefix}/local/matrRockIgneous.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrSediment.ttl`, 'text/turtle', `${prefix}/local/matrSediment.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/matrWater.ttl`, 'text/turtle', `${prefix}/local/matrWater.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phen.ttl`, 'text/turtle', `${prefix}/local/phen.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmo.ttl`, 'text/turtle', `${prefix}/local/phenAtmo.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoCloud.ttl`, 'text/turtle', `${prefix}/local/phenAtmoCloud.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoFog.ttl`, 'text/turtle', `${prefix}/local/phenAtmoFog.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoFront.ttl`, 'text/turtle', `${prefix}/local/phenAtmoFront.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoLightning.ttl`, 'text/turtle', `${prefix}/local/phenAtmoLightning.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoPrecipitation.ttl`, 'text/turtle', `${prefix}/local/phenAtmoPrecipitation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoPressure.ttl`, 'text/turtle', `${prefix}/local/phenAtmoPressure.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoSky.ttl`, 'text/turtle', `${prefix}/local/phenAtmoSky.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoTransport.ttl`, 'text/turtle', `${prefix}/local/phenAtmoTransport.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoWind.ttl`, 'text/turtle', `${prefix}/local/phenAtmoWind.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenAtmoWindMesoscale.ttl`, 'text/turtle', `${prefix}/local/phenAtmoWindMesoscale.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenBiol.ttl`, 'text/turtle', `${prefix}/local/phenBiol.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenCryo.ttl`, 'text/turtle', `${prefix}/local/phenCryo.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenCycle.ttl`, 'text/turtle', `${prefix}/local/phenCycle.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenCycleMaterial.ttl`, 'text/turtle', `${prefix}/local/phenCycleMaterial.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenEcology.ttl`, 'text/turtle', `${prefix}/local/phenEcology.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenElecMag.ttl`, 'text/turtle', `${prefix}/local/phenElecMag.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenEnergy.ttl`, 'text/turtle', `${prefix}/local/phenEnergy.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenEnvirImpact.ttl`, 'text/turtle', `${prefix}/local/phenEnvirImpact.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenFluidDynamics.ttl`, 'text/turtle', `${prefix}/local/phenFluidDynamics.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenFluidInstability.ttl`, 'text/turtle', `${prefix}/local/phenFluidInstability.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenFluidTransport.ttl`, 'text/turtle', `${prefix}/local/phenFluidTransport.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenGeol.ttl`, 'text/turtle', `${prefix}/local/phenGeol.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenGeolFault.ttl`, 'text/turtle', `${prefix}/local/phenGeolFault.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenGeolGeomorphology.ttl`, 'text/turtle', `${prefix}/local/phenGeolGeomorphology.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenGeolSeismicity.ttl`, 'text/turtle', `${prefix}/local/phenGeolSeismicity.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenGeolTectonic.ttl`, 'text/turtle', `${prefix}/local/phenGeolTectonic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenGeolVolcano.ttl`, 'text/turtle', `${prefix}/local/phenGeolVolcano.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenHelio.ttl`, 'text/turtle', `${prefix}/local/phenHelio.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenHydro.ttl`, 'text/turtle', `${prefix}/local/phenHydro.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenMixing.ttl`, 'text/turtle', `${prefix}/local/phenMixing.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenOcean.ttl`, 'text/turtle', `${prefix}/local/phenOcean.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenOceanCoastal.ttl`, 'text/turtle', `${prefix}/local/phenOceanCoastal.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenOceanDynamics.ttl`, 'text/turtle', `${prefix}/local/phenOceanDynamics.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenPlanetClimate.ttl`, 'text/turtle', `${prefix}/local/phenPlanetClimate.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenReaction.ttl`, 'text/turtle', `${prefix}/local/phenReaction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenSolid.ttl`, 'text/turtle', `${prefix}/local/phenSolid.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenStar.ttl`, 'text/turtle', `${prefix}/local/phenStar.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenSystem.ttl`, 'text/turtle', `${prefix}/local/phenSystem.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenSystemComplexity.ttl`, 'text/turtle', `${prefix}/local/phenSystemComplexity.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenWave.ttl`, 'text/turtle', `${prefix}/local/phenWave.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/phenWaveNoise.ttl`, 'text/turtle', `${prefix}/local/phenWaveNoise.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/proc.ttl`, 'text/turtle', `${prefix}/local/proc.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/procChemical.ttl`, 'text/turtle', `${prefix}/local/procChemical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/procPhysical.ttl`, 'text/turtle', `${prefix}/local/procPhysical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/procStateChange.ttl`, 'text/turtle', `${prefix}/local/procStateChange.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/procWave.ttl`, 'text/turtle', `${prefix}/local/procWave.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/prop.ttl`, 'text/turtle', `${prefix}/local/prop.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propBinary.ttl`, 'text/turtle', `${prefix}/local/propBinary.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propCapacity.ttl`, 'text/turtle', `${prefix}/local/propCapacity.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propCategorical.ttl`, 'text/turtle', `${prefix}/local/propCategorical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propCharge.ttl`, 'text/turtle', `${prefix}/local/propCharge.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propChemical.ttl`, 'text/turtle', `${prefix}/local/propChemical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propConductivity.ttl`, 'text/turtle', `${prefix}/local/propConductivity.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propCount.ttl`, 'text/turtle', `${prefix}/local/propCount.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propDifference.ttl`, 'text/turtle', `${prefix}/local/propDifference.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propDiffusivity.ttl`, 'text/turtle', `${prefix}/local/propDiffusivity.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propDimensionlessRatio.ttl`, 'text/turtle', `${prefix}/local/propDimensionlessRatio.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propEnergy.ttl`, 'text/turtle', `${prefix}/local/propEnergy.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propEnergyFlux.ttl`, 'text/turtle', `${prefix}/local/propEnergyFlux.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propFraction.ttl`, 'text/turtle', `${prefix}/local/propFraction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propFunction.ttl`, 'text/turtle', `${prefix}/local/propFunction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propIndex.ttl`, 'text/turtle', `${prefix}/local/propIndex.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propMass.ttl`, 'text/turtle', `${prefix}/local/propMass.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propMassFlux.ttl`, 'text/turtle', `${prefix}/local/propMassFlux.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propOrdinal.ttl`, 'text/turtle', `${prefix}/local/propOrdinal.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propPressure.ttl`, 'text/turtle', `${prefix}/local/propPressure.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propQuantity.ttl`, 'text/turtle', `${prefix}/local/propQuantity.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propRotation.ttl`, 'text/turtle', `${prefix}/local/propRotation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpace.ttl`, 'text/turtle', `${prefix}/local/propSpace.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpaceDirection.ttl`, 'text/turtle', `${prefix}/local/propSpaceDirection.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpaceDistance.ttl`, 'text/turtle', `${prefix}/local/propSpaceDistance.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpaceHeight.ttl`, 'text/turtle', `${prefix}/local/propSpaceHeight.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpaceLocation.ttl`, 'text/turtle', `${prefix}/local/propSpaceLocation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpaceMultidimensional.ttl`, 'text/turtle', `${prefix}/local/propSpaceMultidimensional.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpaceThickness.ttl`, 'text/turtle', `${prefix}/local/propSpaceThickness.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propSpeed.ttl`, 'text/turtle', `${prefix}/local/propSpeed.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propTemperature.ttl`, 'text/turtle', `${prefix}/local/propTemperature.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propTemperatureGradient.ttl`, 'text/turtle', `${prefix}/local/propTemperatureGradient.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propTime.ttl`, 'text/turtle', `${prefix}/local/propTime.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/propTimeFrequency.ttl`, 'text/turtle', `${prefix}/local/propTimeFrequency.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realm.ttl`, 'text/turtle', `${prefix}/local/realm.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmAstroBody.ttl`, 'text/turtle', `${prefix}/local/realmAstroBody.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmAstroHelio.ttl`, 'text/turtle', `${prefix}/local/realmAstroHelio.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmAstroStar.ttl`, 'text/turtle', `${prefix}/local/realmAstroStar.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmAtmo.ttl`, 'text/turtle', `${prefix}/local/realmAtmo.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmAtmoBoundaryLayer.ttl`, 'text/turtle', `${prefix}/local/realmAtmoBoundaryLayer.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmAtmoWeather.ttl`, 'text/turtle', `${prefix}/local/realmAtmoWeather.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmBiolBiome.ttl`, 'text/turtle', `${prefix}/local/realmBiolBiome.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmClimateZone.ttl`, 'text/turtle', `${prefix}/local/realmClimateZone.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmCryo.ttl`, 'text/turtle', `${prefix}/local/realmCryo.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmEarthReference.ttl`, 'text/turtle', `${prefix}/local/realmEarthReference.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmGeol.ttl`, 'text/turtle', `${prefix}/local/realmGeol.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmGeolBasin.ttl`, 'text/turtle', `${prefix}/local/realmGeolBasin.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmGeolConstituent.ttl`, 'text/turtle', `${prefix}/local/realmGeolConstituent.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmGeolContinental.ttl`, 'text/turtle', `${prefix}/local/realmGeolContinental.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmGeolOceanic.ttl`, 'text/turtle', `${prefix}/local/realmGeolOceanic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmGeolOrogen.ttl`, 'text/turtle', `${prefix}/local/realmGeolOrogen.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmHydro.ttl`, 'text/turtle', `${prefix}/local/realmHydro.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmHydroBody.ttl`, 'text/turtle', `${prefix}/local/realmHydroBody.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandAeolian.ttl`, 'text/turtle', `${prefix}/local/realmLandAeolian.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandCoastal.ttl`, 'text/turtle', `${prefix}/local/realmLandCoastal.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandFluvial.ttl`, 'text/turtle', `${prefix}/local/realmLandFluvial.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandGlacial.ttl`, 'text/turtle', `${prefix}/local/realmLandGlacial.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandOrographic.ttl`, 'text/turtle', `${prefix}/local/realmLandOrographic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandProtected.ttl`, 'text/turtle', `${prefix}/local/realmLandProtected.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandTectonic.ttl`, 'text/turtle', `${prefix}/local/realmLandTectonic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandVolcanic.ttl`, 'text/turtle', `${prefix}/local/realmLandVolcanic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmLandform.ttl`, 'text/turtle', `${prefix}/local/realmLandform.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmOcean.ttl`, 'text/turtle', `${prefix}/local/realmOcean.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmOceanFeature.ttl`, 'text/turtle', `${prefix}/local/realmOceanFeature.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmOceanFloor.ttl`, 'text/turtle', `${prefix}/local/realmOceanFloor.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmRegion.ttl`, 'text/turtle', `${prefix}/local/realmRegion.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/realmSoil.ttl`, 'text/turtle', `${prefix}/local/realmSoil.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/rela.ttl`, 'text/turtle', `${prefix}/local/rela.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaChemical.ttl`, 'text/turtle', `${prefix}/local/relaChemical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaClimate.ttl`, 'text/turtle', `${prefix}/local/relaClimate.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaHuman.ttl`, 'text/turtle', `${prefix}/local/relaHuman.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaMath.ttl`, 'text/turtle', `${prefix}/local/relaMath.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaPhysical.ttl`, 'text/turtle', `${prefix}/local/relaPhysical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaProvenance.ttl`, 'text/turtle', `${prefix}/local/relaProvenance.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaSci.ttl`, 'text/turtle', `${prefix}/local/relaSci.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaSpace.ttl`, 'text/turtle', `${prefix}/local/relaSpace.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/relaTime.ttl`, 'text/turtle', `${prefix}/local/relaTime.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/repr.ttl`, 'text/turtle', `${prefix}/local/repr.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataFormat.ttl`, 'text/turtle', `${prefix}/local/reprDataFormat.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataModel.ttl`, 'text/turtle', `${prefix}/local/reprDataModel.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataProduct.ttl`, 'text/turtle', `${prefix}/local/reprDataProduct.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataService.ttl`, 'text/turtle', `${prefix}/local/reprDataService.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataServiceAnalysis.ttl`, 'text/turtle', `${prefix}/local/reprDataServiceAnalysis.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataServiceGeospatial.ttl`, 'text/turtle', `${prefix}/local/reprDataServiceGeospatial.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataServiceReduction.ttl`, 'text/turtle', `${prefix}/local/reprDataServiceReduction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprDataServiceValidation.ttl`, 'text/turtle', `${prefix}/local/reprDataServiceValidation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMath.ttl`, 'text/turtle', `${prefix}/local/reprMath.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMathFunction.ttl`, 'text/turtle', `${prefix}/local/reprMathFunction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMathFunctionOrthogonal.ttl`, 'text/turtle', `${prefix}/local/reprMathFunctionOrthogonal.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMathGraph.ttl`, 'text/turtle', `${prefix}/local/reprMathGraph.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMathOperation.ttl`, 'text/turtle', `${prefix}/local/reprMathOperation.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMathSolution.ttl`, 'text/turtle', `${prefix}/local/reprMathSolution.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprMathStatistics.ttl`, 'text/turtle', `${prefix}/local/reprMathStatistics.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciComponent.ttl`, 'text/turtle', `${prefix}/local/reprSciComponent.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciFunction.ttl`, 'text/turtle', `${prefix}/local/reprSciFunction.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciLaw.ttl`, 'text/turtle', `${prefix}/local/reprSciLaw.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciMethodology.ttl`, 'text/turtle', `${prefix}/local/reprSciMethodology.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciModel.ttl`, 'text/turtle', `${prefix}/local/reprSciModel.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciProvenance.ttl`, 'text/turtle', `${prefix}/local/reprSciProvenance.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSciUnits.ttl`, 'text/turtle', `${prefix}/local/reprSciUnits.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSpace.ttl`, 'text/turtle', `${prefix}/local/reprSpace.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSpaceCoordinate.ttl`, 'text/turtle', `${prefix}/local/reprSpaceCoordinate.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSpaceDirection.ttl`, 'text/turtle', `${prefix}/local/reprSpaceDirection.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSpaceGeometry.ttl`, 'text/turtle', `${prefix}/local/reprSpaceGeometry.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSpaceGeometry3D.ttl`, 'text/turtle', `${prefix}/local/reprSpaceGeometry3D.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprSpaceReferenceSystem.ttl`, 'text/turtle', `${prefix}/local/reprSpaceReferenceSystem.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprTime.ttl`, 'text/turtle', `${prefix}/local/reprTime.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprTimeDay.ttl`, 'text/turtle', `${prefix}/local/reprTimeDay.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/reprTimeSeason.ttl`, 'text/turtle', `${prefix}/local/reprTimeSeason.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/state.ttl`, 'text/turtle', `${prefix}/local/state.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateBiological.ttl`, 'text/turtle', `${prefix}/local/stateBiological.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateChemical.ttl`, 'text/turtle', `${prefix}/local/stateChemical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateDataProcessing.ttl`, 'text/turtle', `${prefix}/local/stateDataProcessing.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateEnergyFlux.ttl`, 'text/turtle', `${prefix}/local/stateEnergyFlux.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateFluid.ttl`, 'text/turtle', `${prefix}/local/stateFluid.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateOrdinal.ttl`, 'text/turtle', `${prefix}/local/stateOrdinal.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/statePhysical.ttl`, 'text/turtle', `${prefix}/local/statePhysical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRealm.ttl`, 'text/turtle', `${prefix}/local/stateRealm.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRole.ttl`, 'text/turtle', `${prefix}/local/stateRole.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRoleBiological.ttl`, 'text/turtle', `${prefix}/local/stateRoleBiological.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRoleChemical.ttl`, 'text/turtle', `${prefix}/local/stateRoleChemical.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRoleGeographic.ttl`, 'text/turtle', `${prefix}/local/stateRoleGeographic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRoleImpact.ttl`, 'text/turtle', `${prefix}/local/stateRoleImpact.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRoleRepresentative.ttl`, 'text/turtle', `${prefix}/local/stateRoleRepresentative.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateRoleTrust.ttl`, 'text/turtle', `${prefix}/local/stateRoleTrust.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSolid.ttl`, 'text/turtle', `${prefix}/local/stateSolid.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSpace.ttl`, 'text/turtle', `${prefix}/local/stateSpace.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSpaceConfiguration.ttl`, 'text/turtle', `${prefix}/local/stateSpaceConfiguration.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSpaceScale.ttl`, 'text/turtle', `${prefix}/local/stateSpaceScale.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSpectralBand.ttl`, 'text/turtle', `${prefix}/local/stateSpectralBand.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSpectralLine.ttl`, 'text/turtle', `${prefix}/local/stateSpectralLine.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateStorm.ttl`, 'text/turtle', `${prefix}/local/stateStorm.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateSystem.ttl`, 'text/turtle', `${prefix}/local/stateSystem.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateThermodynamic.ttl`, 'text/turtle', `${prefix}/local/stateThermodynamic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateTime.ttl`, 'text/turtle', `${prefix}/local/stateTime.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateTimeCycle.ttl`, 'text/turtle', `${prefix}/local/stateTimeCycle.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateTimeFrequency.ttl`, 'text/turtle', `${prefix}/local/stateTimeFrequency.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateTimeGeologic.ttl`, 'text/turtle', `${prefix}/local/stateTimeGeologic.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/stateVisibility.ttl`, 'text/turtle', `${prefix}/local/stateVisibility.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/sweetAll.ttl`, 'text/turtle', `${prefix}/local/sweetAll.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/sweetAll_includeV23Comments.ttl`, 'text/turtle', `${prefix}/local/sweetAll_includeV23Comments.ttl`, override),
    util.downloadOntology(`${githubRaw}/src/sweet_v23Comments.ttl`, 'text/turtle', `${prefix}/local/sweet_v23Comments.ttl`, override)
]).then(util.logDone).catch(util.logError);
