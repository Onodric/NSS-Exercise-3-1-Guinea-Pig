var outlier = document.getElementById("output-target");
var sectionArray = document.getElementsByClassName("article-section")
var piggy = document.getElementById("guinea-pig");

// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
for(let i =0; i < sectionArray.length; i++){
  sectionArray.item(i).addEventListener("click", function(e){
    outlier.innerHTML = "You clicked on the " + e.target.innerHTML + " section";
  });
};

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-header").addEventListener("mouseover", function(e){
  outlier.innerHTML = "<p>You moved your mouse over the header</p>";
});

// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener("mouseout", function(e){
  outlier.innerHTML = "<p>You left me!!</p>";
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function(e){
  outlier.innerHTML = "<p>" + e.target.value + "</p>";
});

// 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function(e){
  piggy.classList.toggle("colorfy");
});

// 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function(e){
  piggy.classList.toggle("hulkify");
});

// 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function(e){
  piggy.classList.toggle("entrap");
});

// 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function(e){
  piggy.classList.toggle("curvify");
});
