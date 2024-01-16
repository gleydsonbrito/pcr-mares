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

["Av. Dr. José Rufino" ,
"Av. Gen. San Martin" ,
"R. Pe. Teófilo Tworz",
"Av. Rui Barbosa ",
"Av. Antônio de Góes - Pista Sul", 
"Av. Norte Miguel Arraes de Alencar",
"Av. Norte Miguel Arraes de Alencar", 
"R. Dr. Severino Pinheiro",
"Av. Caxangá",
"Av. Eng. Abdias de Carvalho", 
"Av. Mal. Mascarenhas de Morais", 
"R. de Apipucos", 
"R. Dois Irmãos", 
"Av. Gov. Agamenon Magalhães - Pista Lateral", 
"V. Mangue", 
"Av. Recife", 
"Est. do Bongi", 
"Av. Gov. Agamenon Magalhães - Pista Central",
"Av. Eng. Abdias de Carvalho",
"Av. Norte Miguel Arraes de Alencar",
"Av. Cons. Rosa e Silva",
"R. Real da Torre",
"Est. dos Remédios",
"BR-101 Rod. Gov. Mário Covas",
"Av. Cons. Rosa e Silva "]

