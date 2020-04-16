// assume we have the following:
// Array = [[Name1, Desc1, Details1, Image1], [Name2, Desc2, Details2, Image2]]
// You have an existing html container element called "projectsContainer"

for(var i=0; i <= Array.length; i++){
    function addProject () { 
//creating a new divRow to hold image container and text container        
        let divRow = document.createElement('div');
        divRow.id = 'UNIQUE DIV ID';
        divRow.class = 'ROW';

// create a div to hold the image
        let imageDiv = document.createElement('div');
//set class attributes of the image div        
        imageDiv.class=''; 
// create an image inside the image div
        let projectImage = document.createElement('img');
//set class attributes of the image        
        projectImage.class=''; 
        projectImage.src= array[i][2];
//append the image to the image div
        imageDiv.appendChild(projectImage); 
//append the image div to the newly created divRow
        divRow.appendChild(imageDiv); 


//create a div to hold the project details
        let textDiv = document.createElement('div');
//set class attributes of the textDiv        
        textDiv.class='';
//create an h2 inside the textDiv
        let projectHeader = document.createElement('h2');
        projectHeader.class ='';
        projectHeader.textContent = array[i][0]
//append projectHeader to the textDiv
        textDiv.appendChild(projectHeader)
//create an h3 inside the textDiv
        let projectDesc = document.createElement('h3');
        projectDesc.class ='';
        projectDesc.textContent = array[i][1]
//append projectDesc to the textDiv
        textDiv.appendChild(projectDesc)
//create an <p> inside the textDiv
        let projectDetails = document.createElement('p');
        projectDetails.class ='';
        projectDetails.textContent = array[i][1]
//append projectDetails to the textDiv
        textDiv.appendChild(projectDetails)                                                          

//append the textDiv container to the divRow
    divRow.appendChild(textDiv);

        
// add divRow to the document
        document.getElementById(projectsContainer).appendChild(divRow);
 }
}