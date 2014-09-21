var myList = [
    {
        "Last Name": "Smith",
        "First Name": "John",
        "Email": "jsmith@gmail.com",
        "Due": "$50",
        "Web Site": "http://www.jsmith.com"
    },
    {
        "Last Name": "Bach",
        "First Name": "Frank",
        "Email": "fbach@yahoo.com",
        "Due": "$50",
        "Web Site": "http://www.frank.com"
    },
    {
        "Last Name": "Doe",
        "First Name": "Jason",
        "Email": "jdoe@hotmail.com",
        "Due": "$100",
        "Web Site": "http://www.jdoe.com"
    },
    {
        "Last Name": "Conway",
        "First Name": "Tim",
        "Email": "tconway@earthlink.net",
        "Due": "$50",
        "Web Site": "http://www.timconway.com"
    }
];


// Builds the HTML Table out of myList.
function buildHtmlTable() {
    var columns = addAllColumnHeaders(myList);
    for (var i = 0 ; i < myList.length ; i++) {
        var row = $('<tr/>');
        for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
            var cellValue = myList[i][columns[colIndex]];

            if (cellValue == null) { cellValue = ""; }

            row.append($('<td/>').html(cellValue));
        }
        $("#myTableBody").append(row);
    }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(myList)
{
    var columnSet = [];

    var headerTr= $('<tr/>');

    for (var i = 0 ; i < myList.length ; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1){
                columnSet.push(key);
                headerTr.append($('<th/>').html(key));
            }
        }
    }
    $("#myTableHead").append(headerTr);
    return columnSet;
}
