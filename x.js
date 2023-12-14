fetch("https://esigportal2.recife.pe.gov.br/arcgis/rest/services/COP/BASES_TABELAS_COP_CONSULTA/FeatureServer/4/query?where=DATAHORA_UTC+Between+current_timestamp+-1+and+current_timestamp+%2B1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&timeReferenceUnknownClient=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=pjson")
.then( res => res.json())
.then( ({ features }) => features )
.then( events => {
    let closerHourIndex = -1
    let minDiffHours = Number.POSITIVE_INFINITY

    events.forEach( ({ attributes }, index ) => {
        const day = new Date(attributes.DATAHORA)
        if(new Date(day).getDate() === new Date().getDate()) {
            console.log(new Date(day))
            
            const tempDiff =  Math.abs(day.getHours() - new Date().getHours())
            if(tempDiff < minDiffHours) {
                minDiffHours = tempDiff
                closerHourIndex = index
            }
        }
    })
    
    console.log(closerHourIndex)
    console.log("*** ", new Date(events[closerHourIndex].attributes.DATAHORA))
})