Steps to complete 

Start by downloading the template project attached.

noisyGrid-Template

Creating a colorful grid

Step 1: Amend the colorGrid() function and create a 25x25 grid of rectangles. The rectangles should be of width and height equal to stepSize, the global variable already provided. Set the fill to white and the stroke to black, to make sure the grid is correctly setup.


Step 2: For each of the tiles generate a 3D noise value, using the tile’s x and y coordinate as well as the frameCount so that the noise values change over time. Make sure you scale the input parameters of the noise function appropriately so that you get organic values out of it. Use that noise value to lerp (aka interpolate) between red and green.

Use the lerpColor() function (see p5.js examples) to do so. Remove the rectangle’s stroke and use color returned from the lerpColor() function to fill the rectangle. If you’ve done things right you should see a grid of tiles with slowly changing colors.

If the color of your rectangles are changing rapidly or are not smooth like the gif above, double check how you have scaled the input parameters for noise().


Step 3: Make the grid color change speed be dependent on the x coordinate of the mouse (ie small mouseX, faster color changes).


Creating a compass grid  
Step 4: Amend the compassGrid() function to create a grid of 25x25 lines of length stepSize. Make sure each compass is at the center of each tile. By default they should all be pointing up. You should use translate() to move to the center of each grid.


Step 5: For each of the compasses generate a 3D noise value, using the compass’ x and y coordinate as well as the frameCount so that the noise values change over time. Make sure you scale the input parameters of the noise function appropriately so that you get organic values out of it. Use that noise value with map() to generate an angle between 0 and 720 degrees. Use that value to rotate the compass. If you’ve done things right your compasses should be rotating while the sketch is running.

If your lines are not rotating in the pattern seen above check how you are scaling the input parameters of noise(). Also study how each line rotates in the gif above.


Step 6: Make the compass’ movement speed be dependent on the x coordinate of the mouse (ie small mouseX, faster compass rotations).


Step 7: Implement two of the ideas for further development. Points given to ambitious learners.  


Ideas for further development 

Make it your own by changing the colors and style.

Use the noise to change the color and length of the compass lines.


Marking rubric
Step 1 - [1 point]: Tiles are of the right size and spread on canvas.

Step 2 - [2 points]: Colors change organically over time. 

Step 3 - [1 point]: mouseX affects how fast the grid colors change.

Step 4 - [1 point]: Compasses setup correctly and at the center of each tile.

Step 5 - [2 points]: Compasses move organically over time.

Step 6 - [1 point]: mouseX affects how fast the compasses rotate.

Step 7 - [2 points]: Has learner implemented any of the ideas for further development?