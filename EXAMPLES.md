# Examples

## Mouse example
```
/* body */
set color #000000;
set paint #FFFFFF;
fill circle 75 75 75;
fill circle 150 0 50;
draw circle 150 0 50;
fill circle 0 0 50;
draw circle 0 0 50;

/* eyes */
clear;
set color #FFFFFF;
fill circle 50 50 10;
fill circle 100 50 10;

/* nose */
fill circle 75 100 5;

/* nose hair */
clear;
set paint #FFFFFF;
draw line 75 100 50 85;
draw line 75 100 100 85;
draw line 75 100 50 100;
draw line 75 100 100 100;
draw line 75 100 50 115;
draw line 75 100 100 115;
```

## Pyramid Example
```
/* defining coordinates */
let xCoord = 150;
let yCoord = 0;
let blocks = 0;
let blockSize = 50;
let tempXCoord;

/* defining colors */
set color #dba833;
set paint #4b3e31;
set thickness 2;

/* loop */
for row in 0 7 {
    yCoord = row * blockSize;
    xCoord = 150 - (blockSize / 2) * row;
    blocks = blocks + 1;
    tempXCoord = xCoord;
    for el in 0 blocks {
        fill rect tempXCoord yCoord blockSize blockSize;
        draw rect tempXCoord yCoord blockSize blockSize;
        tempXCoord = tempXCoord + blockSize;
    }
}
```
