//Task 3: Create the Run() Function//

function Run()
{
    console.log("Run function started!");
    
    // Task 5: Get the corners by creating functions which select an item from the data
    var topLeftPoint = findTopLeft(theJSON.data);
    var topRightPoint = findTopRight(theJSON.data);
    var bottomLeftPoint = findBottomLeft(theJSON.data);
    var bottomRightPoint = findBottomRight(theJSON.data);
    
    // Task 6: Create an output object from your corners
    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };
    
    // Task 7: Print out your result, along with your email
    console.log("Bounding box computed for KateBricken@tamu.edu: ");
    console.log(boundingBox);
}
//Task 4: Create JavaScript functions to calculate the bounding box of the data file//

// Function to find top left corner (Max Lat, Min Lon)
function findTopLeft(data) {
    var maxLat = data[0].lat;
    var minLon = data[0].lon;
    
    // Find max latitude and min longitude
    for (let i = 0; i < data.length; i++) {
        if (data[i].lat > maxLat) maxLat = data[i].lat;
        if (data[i].lon < minLon) minLon = data[i].lon;
    }
    
    // Find the actual point that matches these coordinates
    return findPoint(data, maxLat, minLon);
}

// Function to find top right corner (Max Lat, Max Lon)
function findTopRight(data) {
    var maxLat = data[0].lat;
    var maxLon = data[0].lon;
    
    // Find max latitude and max longitude
    for (let i = 0; i < data.length; i++) {
        if (data[i].lat > maxLat) maxLat = data[i].lat;
        if (data[i].lon > maxLon) maxLon = data[i].lon;
    }
    
    // Find the actual point that matches these coordinates
    return findPoint(data, maxLat, maxLon);
}

// Function to find bottom left corner (Min Lat, Min Lon)
function findBottomLeft(data) {
    var minLat = data[0].lat;
    var minLon = data[0].lon;
    
    // Find min latitude and min longitude
    for (let i = 0; i < data.length; i++) {
        if (data[i].lat < minLat) minLat = data[i].lat;
        if (data[i].lon < minLon) minLon = data[i].lon;
    }
    
    // Find the actual point that matches these coordinates
    return findPoint(data, minLat, minLon);
}

// Function to find bottom right corner (Min Lat, Max Lon)
function findBottomRight(data) {
    var minLat = data[0].lat;
    var maxLon = data[0].lon;
    
    // Find min latitude and max longitude
    for (let i = 0; i < data.length; i++) {
        if (data[i].lat < minLat) minLat = data[i].lat;
        if (data[i].lon > maxLon) maxLon = data[i].lon;
    }
    
    // Find the actual point that matches these coordinates
    return findPoint(data, minLat, maxLon);
}

// Helper function to find the closest point to target coordinates//
function findPoint(data, targetLat, targetLon) {
    var bestMatch = data[0];
    var minDistance = Math.abs(data[0].lat - targetLat) + Math.abs(data[0].lon - targetLon);
    
    for (let i = 1; i < data.length; i++) {
        var distance = Math.abs(data[i].lat - targetLat) + Math.abs(data[i].lon - targetLon);
        if (distance < minDistance) {
            minDistance = distance;
            bestMatch = data[i];
        }
    }
    
    return bestMatch;
}
