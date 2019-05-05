# Language Tokens

Tokens used in a programming language used to draw on canvas

## Tokens table

| #  | Value                                        | Type                       | Description                                                     |
| ---|----------------------------------------------|----------------------------|-----------------------------------------------------------------|
| 1  | +                                            |Operator (binary arithmetic)|Addition                                                         |
| 2  | -                                            |Operator (binary arithmetic)|Subtraction                                                      |
| 3  | *                                            |Operator (binary arithmetic)|Multiplication                                                   |
| 4  | /                                            |Operator (binary arithmetic)|Division                                                         |
| 5  | \>                                           |Operator (binary relational)|Greater then                                                     |
| 6  | \<                                           |Operator (binary relational)|Less then                                                        |
| 7  | \>=                                          |Operator (binary relational)|Greater then or equal to                                         |
| 8  | \<=                                          |Operator (binary relational)|Less then or equal to                                            |
| 9  | ==                                           |Operator (binary relational)|Equal to                                                         |
| 10 | !=                                           |Operator (binary relational)|Not equal to                                                     |
| 11 | &&                                           |Operator (binary logical)   |Logical AND                                                      |
| 12 | &#124;&#124;                                 |Operator (binary logical)   |Logical AND                                                      |
| 13 | !                                            |Operator (unary logical)    |Logical NOT                                                      |
| 14 | =                                            |Operator (binary assignment)|Simple assignment                                                |
| 14 | (                                            |Special symbol              |Left parenthesis                                                 |
| 15 | )                                            |Special symbol              |Right parenthesis                                                |
| 16 | {                                            |Special symbol              |Left curly bracket                                               |
| 17 | }                                            |Special symbol              |Right curly bracket                                              |
| 18 | #                                            |Special symbol              |Begins and finishes the comment                                  |
| 19 | ;                                            |Special symbol              |Ends statement                                                   |
| 20 | [space]                                      |Special symbol              |Separates the tokens                                             |
| 21 | val                                          |Keyword                     |Begins the definition of a variable                              |
| 22 | set                                          |Keyword (operation)         |Allows to define the properties of drawn objects                 |
| 23 | clear                                        |Keyword (operation)         |Clears defined properties                                        |
| 24 | draw                                         |Keyword (operation)         |Begins the definition of the object you want to draw             |
| 25 | fill                                         |Keyword (operation)         |Begins the definition of the object you want to fill with color  |
| 26 | color                                        |Keyword (property)          |Defines colour of the drawn line                                 |
| 27 | paint                                        |Keyword (property)          |Defines background colour of drawn shape                         |
| 28 | thickness                                    |Keyword (property)          |Defines thickness of the drawn line                              |
| 29 | circle                                       |Keyword (shape)             |Circle                                                           |
| 30 | rect                                         |Keyword (shape)             |Rect                                                             |
| 31 | line                                         |Keyword (shape)             |Line                                                             |
| 32 | for                                          |Keyword                     |Begins the definition of the for loop                            |
| 33 | while                                        |Keyword                     |Begins the definition of the while loop                          |
| 34 | in                                           |Keyword                     |Allows the definition of range of the for loop                   |
| 35 | [a-z &#124; A-Z][a-z &#124; A-Z &#124; 0-9]* |Identifier                  |Allows the definition of variables                               |
| 36 | [1-9][0-9]*                                  |Integer                     |It can be assigned to a variable                                 |
| 37 | #[0-9 &#124; a-f]{6}                         |Color value                 |It can be set as color property value                            |

**Arithmetic operators** - take numerical values (either literals or variables) as their operands and return a single numerical value.

**Relational operators** - are used to find the relation between two variables. i.e. to compare the values of two variables.

**Logical operator** - special symbol or word which connects two or more phrases of information. It is most often used to test whether a certain relationship between the phrases is true or false.

| Token           | Possible values                                  | Definition                                                                                                                    |
| --------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Operator        | \*, -, +, /, in, =                               | Operator can be used between two values                                                                                       |
| Identifier      | value1, value2                                   | A value can be bound to identifier                                                                                            |
| Value           | 1, 2, 2137, "Hi there", "Hello world", "#BFFFFF" | is an integer or string defining some kind of value, like pixel length, color, string literal                                 |
| Instruction     | set, draw, clear, for                            | It is a control flow instruction. It defines what we actually want to do                                                      |
| Comment Start   | #                                                | Starts a comment so after that sign in line we can write anything                                                             |
| Constant object | rect, circle, ellipse, line                      | It is like an enum of objects we can draw                                                                                     |
| code block      | tabulator indent                                 | tabulator indent of the same size means that we have a block of code, in blocks of code variables from for loop has its reach |

## Example snippets

```
set color "#000000"
draw rect 10 10 50 50
fill circle 10 10 25
draw line 10 10 20 20
clear

set color "#FFFFFF"
clear # this clears the context so color line width and stuff

# my idea of how to make a moveto and lineto
set color "#666666"
# I think we can make sth like paretheses but optional
draw line (10 10) (20 20) (30 30) (45 50) fill
# so basivally we define points of our line and
# at the end we can put in fill to make it filled or make it empty
clear

# example of loops
set color "#000000"
set lineWidth 12
for el in 0 20 {
    draw circle el / 2 el * 2 20 20
}
clear

# my guess is that we can actually ditch let keyword and use only set keyword
# so that we will be operating only in global scope
# so setting variable
set myVar 12
set SOME_CONST "#000FFF"

# clear behavior
clear # clears all stuff from scope so all variables
clear myVar lineWidth color # clears only those passed as parameters

```

Moim zdaniem te rzeczy kontekstowe możemy zrobić tak, że będą miały swoje defaultsy
Możemy sobie je zrobić takimi predefiniowanymi wartościami

Example output JSON
It makes for our bridge between our language and rendering engine which is JS based

```json
[
  {
    "type": "circle",
    "line_color": "#000000",
    "line_thickness": 2,
    "background_color": null,
    "x": 50,
    "y": 50,
    "r": 20
  },
  {
    "type": "rectangle",
    "line_color": "#000000",
    "line_thickness": 2,
    "background_color": null,
    "x": 50,
    "y": 50,
    "width": 40,
    "height": 40
  }
]
```

## Useful links
https://www.geeksforgeeks.org/cc-tokens/