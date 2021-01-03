
// Use d3 library to read in samples.json

function readFile() {
    d3.json('samples.json').then((data) => {
        console.log(data);
        var names = data.names;
        var metadata = data.metadata;
        var samples = data.samples;
        //console.log(samples)

    });
        //sort data
    //     var samplevalues = samplesArray.sample_values;
    //     var sortedsamples = samplesvalues.sort((a,b) =>
    //     b.sample_values - a.sample_values);

    //     //slice to find top 10
    //     var topsamples = sortedsamples.slice(0,10).reverse();

    //     //reverse array to accomodate plotly's defaults
    //     var reversed = sliced.reverse();
    //     var samples_values = sample_values.slice(0, 10).reverse()
    //     var otu_labels = otu_labels.slice(0, 10).reverse()
        

    //     //create horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

    //     var trace1 = {
    //         x: samples_values,
    //         y: otu_labels,
    //         type: 'bar',
    //         orientation: 'h'
    //     };

    //     var data = [trace1];

    //     var layout = {
    //         title: 'Top Ten OTUs in Sample',
    //     };

    //     Plotly.newPlot('plot', data, layout)

    //     //create a bubble char that displays each sample
        

    //     var trace2 = {
    //         y: data.sample_values,
    //         x: data.otu_ids,
    //         text: data.otu_labels,
    //         mode: 'markers',
    //         marker:{
    //             side: data.sample_values,
    //             color: data.otu_ids
    //         }
    //     };
    //     //Create bubble chart layout
    //     var layout = {
    //         title: 'All OTUs in Sample ${input}',
    //         xaxis: {title: 'OTU ID'},
    //         yaxis: {title: 'Number of Samples Found'}

    //     }

    //     Plotly.newPlot('plot', bubble, layout);


    // }