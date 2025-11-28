# TAMU Web GIS: Homework 06 – Advanced Javascript Mapping

**Author:** Kate Bricken  
**Course:** GEOG 678 - Web GIS
**Assignment Due Date:** December 1st 2025

### Assignment Overview

This assignment demonstrates advanced web mapping techniques using Leaflet.js. It includes:

- Completion of two Leaflet tutorials
- A custom interactive map of the Texas A&M University (TAMU) campus
- Integration of external GeoJSON data
- Interactive styling and controls


---

### Tasks

### 1. Leaflet Tutorials

- **Tutorial 1: Using GeoJSON with Leaflet**   
  Created a working HTML page that loads and styles GeoJSON data with interactive mouse events.

- **Tutorial 2: Interactive Choropleth Map** 
  Built a choropleth map using Leaflet and GeoJSON, with dynamic styling, a legend, and info control.

### 2. Custom TAMU Campus Map (60 pts)

| Requirement | Implementation |
|------------|----------------|
| Webpage Title | `Kate Bricken TAMU Map` | 10 |
| Zoom to TAMU Campus | Centered at `30.6188, -96.3365` with zoom level 15 |
| External GeoJSON | Loaded from `tamuBuildings.js` |
| Building Color | Styled with maroon (`#800000`) |
| Hover Highlight | Gold outline and increased opacity on hover |
| Click Zoom | Zooms to building bounds on click |
| Info Control | Displays building name and abbreviation on hover |

---



### Output

The following deliverables were produced for this assignment:

- `CustomMap.html` – Custom TAMU campus map
- `tamuBuildings.js` – External GeoJSON file with building data
- `UsingGeoJSONwithLeaflet.html` – GeoJSON tutorial implementation
- `InteractiveChloroplethMap.html` – Choropleth map tutorial implementation
- `README.md` – Project documentation

---

### Screenshots
**Task #1: Complete the Two Online Leaflet Tutorials**

*Using GeoJSON With Leaflet*
![Using GeoJSON With Leaflet Code1](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletCode1.png)
![Using GeoJSON With Leaflet Code2](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletCode2.png)
![Using GeoJSON With Leaflet Code3](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletCode3.png)
![Using GeoJSON With Leaflet Code4](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletCode4.png)
![Using GeoJSON With Leaflet Code5](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletCode5.png)
![Using GeoJSON With Leaflet Code6](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletCode6.png)

![Using GeoJSON With LeafletOutput](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/UsingGeoJSONWithLeafletOutput.png)

*Interactive Chloropleth Map*
![Interactive Chloropleth Map Code1](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/InteractiveChloroplethMapCode1.png)
![Interactive Chloropleth Map Code2](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/InteractiveChloroplethMapCode2.png)
![Interactive Chloropleth Map Code3](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/InteractiveChloroplethMapCode3.png)
![Interactive Chloropleth Map Code4](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/InteractiveChloroplethMapCode4.png)
![Interactive Chloropleth Map Code5](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/InteractiveChloroplethMapCode5.png)

![Interactive Chloropleth Map Output](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/InteractiveChloroplethMapOutput.png)

*In Class Practice Code*
![In Class Practice Code #1]
![In Class Practice Code #2]
![In Class Practice Code #3]
![In Class Practice Output]

**Task 2: Create a Custom Map**

*1. give your webpage a title e.g. "Yourname TAMU Map"*

*2. zoom the map view to TAMU Campus with an appropriate zoom level*

![CustomMapTitleZoom](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/CustomMapTitleZoom.png)

*3. add external TAMU Building GeoJSON into your Map*

*4. change your building color to "Maroon" or any color you like*

*5.make the buildings highlighted visually in some way when they are hovered with a mouse*

*6. define a click listener that zooms to the building*

*7. Create a Info Control to show the buidling's name and abbr when they are hovered with a mouse* 

**Example #1**
![CustomMapHighlightInfoControl](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/CustomMapHighlightInfoControl.png)

**Example #2**
![CustomMapHighlightInfoControlExample2](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/main/Module_6/Lab06/Images/CustomMapHighlightInfoControl2.png)

*Custom TAMU Map Code*
![CustomMapCode #1](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/CustomMapCode1.png)

![CustomMapCode #2](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/CustomMapCode2.png)

![CustomMapCode #3](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/CustomMapCode3.png)

![CustomMapCode #4](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Images/CustomMapCode4.png)

---

### References
1. [Powerpoint Presentation by Debayan Mandal](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/be303236ebf540dad2f876d5f429f20d32878479/Module_6/Lab06/Instructions/Lab6_MGsc.pptx)
2. Using GeoJSON with Leaflet (https://leafletjs.com/examples/geojson/)
3. Interactive Choropleth Map (https://leafletjs.com/examples/choropleth/)