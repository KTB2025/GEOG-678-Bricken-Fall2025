# TAMU Web GIS: Homework 04 – JS/JSON Programming

**Author:** Kate Bricken  
**Course:** GEOG 678 - Web GIS
**Assignment Due Date:** November 18th 2025

---

### Assignment Overview

This lab introduces JavaScript fundamentals and spatial data processing. The goal is to calculate the bounding box of a dataset using JavaScript functions and display the results in the browser console.

---

### Tasks

#### Task 1: Set up project files
- Create `index.html`, `script.js`, and `data.js`
- Link both JavaScript files in the HTML using `<script>` tags
#### Task 2: Add a button to trigger the bounding box calculation
- Create a button in HTML
- Set its `onclick` attribute to call the `Run()` function

#### Task 3: Implement the `Run()` function
- Log a message to the console
- Call functions to find each corner of the bounding box
#### Task 4: Write functions to find bounding box corners
- Top Left = Max Lat, Min Lon  
- Top Right = Max Lat, Max Lon  
- Bottom Left = Min Lat, Min Lon  
- Bottom Right = Min Lat, Max Lon
#### Task 5: Call corner functions from `Run()`

#### Task 6: Create an output object
- Store the four corner points in a `boundingBox` object
#### Task 7: Print the result
- Log the bounding box and your email to the console

---

### Output

The following deliverables were produced for this lab:
1. `index.html` with a button to run the bounding box calculation
2. `script.js` containing all required functions
3. `data.js` with sample spatial data
4. Console output showing the bounding box and author email

---

### Screenshots
![ConsoleOutput](https://github.com/KTB2025/GEOG-678-Bricken-Fall2025/blob/main/Module_4/Lab04/Images/Lab04ConsoleOutput.png)
---

### Items to Submit

1. GitHub repository link containing all project files  
   Upload `index.html`, `script.js`, `data.js`, and any related files to `labs/week04/`
2. Screenshot of console output showing bounding box and email
3. Submit the GitHub link to eCampus

---

### References
