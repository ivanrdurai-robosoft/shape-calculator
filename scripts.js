var shape = "";    
    
function initializeValues() {
    this.shapeSelectionSection = document.querySelector("#shape-selection-section");
    this.inputValueSection = document.querySelector("#input-value-section");
    this.showResultSection = document.querySelector("#show-result-section");
    this.areaValue = document.querySelector("#areaValue");
    this.shapeType = document.querySelector("#shape");

    this.inputValueSection.style.display = 'none';
    this.showResultSection.style.display = 'none';

    this.rectangleContent = document.querySelector("#rectangleContent");
    this.length = document.querySelector("#length");
    this.width = document.querySelector("#width");
    this.rectangleContent.style.display = 'none';

    this.circleContent = document.querySelector("#circleContent");
    this.radius = document.querySelector("#radius");
    this.circleContent.style.display = 'none';

    this.squareContent = document.querySelector("#squareContent");
    this.side = document.querySelector("#side");
    this.squareContent.style.display = 'none';

    this.ellipseContent = document.querySelector("#ellipseContent");
    this.base = document.querySelector("#base");
    this.height = document.querySelector("#height");
    this.ellipseContent.style.display = 'none';

    this.showAreaContent = document.getElementById("showAreaContent");
    
    this.area = 0;
}

initializeValues();

function setShape() {
    shape = document.querySelector('input[name="shape"]:checked').value;
    this.shapeSelectionSection.style.display = 'none';
    this.inputValueSection.style.display = 'block';
    this.shapeType.innerHTML = shape;

    if (shape === 'rectangle') {
        this.rectangleContent.style.display = 'block';
    } else if (shape === 'circle') {
        this.radius.style.display = 'block';
        this.circleContent.style.display = 'block';
    } else if (shape === 'square') {
        this.side.style.display = 'block';
        this.squareContent.style.display = 'block';
    } else {
        this.base.style.display = 'block';
        this.height.style.display = 'block';
        this.ellipseContent.style.display = 'block';
    }
}

function calculateArea() {
    switch (shape) {            
        case "rectangle":
            this.area = this.length.value * this.width.value;
        break;
        case "circle":
            this.area = Math.PI * this.radius.value * this.radius.value;
            break;
        case "square":
            this.area = this.side.value * this.side.value;
            break;
        case "ellipse":
            this.area = Math.PI * this.base.value * this.height.value;
            break;            
    }
    this.area = Math.ceil(this.area);
    this.showArea();
}

function showArea() {
    this.inputValueSection.style.display = 'none';
    this.showResultSection.style.display = 'block';
    switch (shape) {            
        case "rectangle":
            this.showAreaContent.innerHTML = "You have calculated the area of a "+ `${this.shape}` + " with a length of "+ `${this.length.value}`+ " and a width of "+ `${this.width.value}`+ ". Below is your result:";
        break;
        case "circle":
            this.showAreaContent.innerHTML = "You have calculated the area of a "+ `${this.shape}` + " with a radius of "+ `${this.radius.value}`+ ". Below is your result:";
            break;
        case "square":
            this.showAreaContent.innerHTML = "You have calculated the area of a "+ `${this.shape}` + " with a side of "+ `${this.side.value}`+ ". Below is your result:";
            break;
        case "ellipse":
            this.showAreaContent.innerHTML = "You have calculated the area of a "+ `${this.shape}` + " with a base of "+ `${this.base.value}`+ " and a height of "+ `${this.height.value}`+ ". Below is your result:";
            break;            
    }
    this.areaValue.innerHTML = this.area;
}
