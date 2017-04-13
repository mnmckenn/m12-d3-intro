// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function () {
  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
    var mydiv = d3.select("#sandbox").append('div');
    
  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
    var mySvg = mydiv.append('svg');
    
  // Set both the width and height attributes of your `svg` to 300 
    mySvg.attr('height', 300).attr('width', 300);
    
  // Append a `circle` element to your `svg`, setting the properties noted in index.html
    var myCircle = mySvg.append('circle');
    myCircle.attr('r', 30).attr('cx', 75).attr('cy', 30)
            .attr('opacity', 0.5).attr('fill', 'blue');
    
  // Append a `rect` element to your `svg`, setting the properties noted in index.html

    var myRect = mySvg.append('rect');
    myRect.attr('x', 70).attr('y', 60).attr('width', 10).attr('height', 250)
          .attr('opacity', 0.5).attr('fill', 'orange');
});
