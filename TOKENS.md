# Language Tokens

Tokens used in a programming language used to draw on canvas

## Tokens table

| Token         | Possible values                                  | Definition                                                                                    |
| ------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Operator      | \*, -, +, /, in, =                               | Operator can be used between two values                                                       |
| Identifier    | value1, value2                                   | A value can be bound to identifier                                                            |
| Value         | 1, 2, 2137, "Hi there", "Hello world", "#BFFFFF" | is an integer or string defining some kind of value, like pixel length, color, string literal |
| Instruction   | set, draw, clear, for                            | It is a control flow instruction. It defines what we actually want to do                      |
| Comment Start | #                                                | Starts a comment so after that sign in line we can write anything                             |

## Example snippets

```
set color "#000000"
draw rect 10 10 50 50
draw circle 10 10 25 fill
draw ellipse 15 15 14 13 fill
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
for el in 0 20
    draw circle el / 2 el * 2 20 20
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
