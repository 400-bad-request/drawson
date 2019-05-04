# Gramatyka

Nie wiem jak opisać alfabet terminalny i nieterminalny w tym wypadku, ale produkcje będą w stylu jak poniżej

## Productions

Command -> draw | set | clear | for

Object -> RECT | CIRCLE | ELLIPSE | LINE

Identifier -> [a-z]
Identifier -> Value[a-zA-Z0-9]

Number -> [0-9]*  

String -> "[alphanumeric]"

Value -> Number | String

Set -> set Identifier Value

Draw -> draw Object Arguments

Clear -> clear

A -> Identifier | Identifier A
 
Clear -> clear A

For -> for Identifier in Number Number \n \tab Block 

## Useful Links

https://github.com/antlr/grammars-v4?files=1&fbclid=IwAR2A0B7fyfSXUsVPH3yHq3-CBzeOP22rCdy8Jgyi-fWeHN1VrFOj4vQrFSc