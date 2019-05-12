# Grammar

## Start symbol
```
Start
```

## Productions
```
Start = StatementList

StatementList = Statement*
    
Statement 
= WhileLoop
| ForLoop
| ClearStatement
| SetStatement
| DrawStatement
| FillStatement
| DefinitionStatement
| AssignmentStatement
| DefinitionWithAssignmentStatement
| Comment

WhileLoop = whileKeyword leftParentheses ConditionalStatement rightParentheses LoopBody

whileKeyword = "while"

ForLoop = forKeyword identifier inKeyword ArithmeticStatement ArithmeticStatement LoopBody

forKeyword = "for"
inKeyword = "in"

LoopBody = leftCurlyBrace StatementList rightCurlyBrace

DefinitionStatement = variableKeyword identifier terminator

AssignmentStatement = identifier "=" ArithmeticStatement terminator

DefinitionWithAssignmentStatement = variableKeyword AssignmentStatement

variableKeyword = "let"

ClearStatement = "clear" terminator

SetStatement = "set" SetDefinition terminator

SetDefinition 
= "color" colorValue
| "paint" colorValue
| "thickness" ArithmeticStatement
    
DrawStatement = "draw" ObjectDefinition terminator

FillStatement = "fill" FillableObjectDefinition terminator

ObjectDefinition
= FillableObjectDefinition
| lineObjectKeyword ArithmeticStatement ArithmeticStatement ArithmeticStatement ArithmeticStatement -- line_definition

lineObjectKeyword = "line"

FillableObjectDefinition
= circleObjectKeyword ArithmeticStatement ArithmeticStatement ArithmeticStatement -- circle_definition
| rectObjectKeyword ArithmeticStatement ArithmeticStatement ArithmeticStatement ArithmeticStatement -- rect_definition

circleObjectKeyword = "circle"
rectObjectKeyword = "rect"

ConditionalStatement 
= not ConditionalStatement -- negation
| ConditionalStatement logicalOperator ConditionalStatement -- operator_join
| leftParentheses ConditionalStatement rightParentheses -- contidion_parentheses
| ArithmeticStatement relationalOperator ArithmeticStatement -- arithmetic_condition

ArithmeticStatement 
= integer
| identifier
| leftParentheses ArithmeticStatement rightParentheses -- arithmetic_parentheses
| leftParentheses minus ArithmeticStatement rightParentheses -- minus_arithmetic_parentheses
| ArithmeticStatement arithmeticOperator ArithmeticStatement -- arithmetic_operation

Comment = commentStart notEndOfComment* commentEnd
commentStart = "/*"
notEndOfComment= ~commentEnd any
commentEnd = "*/"

arithmeticOperator 
= "+"
| "-"
| "*"
| "/"

logicalOperator 
= "&&"
| "||"

relationalOperator 
= "=="
| "!="
| ">"
| "<"
| ">="
| "<="

identifier = lower alnum*

colorValue = "#" alnum alnum alnum alnum alnum alnum

leftCurlyBrace = "{"

rightCurlyBrace = "}"

leftParentheses = "("

rightParentheses = ")"

integer 
  = nonZeroDigit digit* -- number
  | "0" -- zero

nonZeroDigit = ~"0" digit

not = "!"

minus = "-"

terminator = ";"

```

## Nonterminal symbols
```
Start,
StatementList,
Statement,
WhileLoop,
ForLoop,
ClearStatement,
SetStatement,
DrawStatement,
FillStatement,
DefinitionStatement,
AssignmentStatement,
DefinitionWithAssignmentStatement,
Comment,
commentStart,
notEndOfComment,
commentEnd,
variableKeyword,
SetDefinition,
ObjectDefinition,
FillableObjectDefinition,
lineObjectKeyword,
circleObjectKeyword,
rectObjectKeyword,
arithmeticOperator,
logicalOperator,
relationalOperator,
identifier,
colorValue,
leftCurlyBrace,
rightCurlyBrace,
leftParentheses,
rightParentheses,
integer,
nonZeroDigit,
not,
minus,
terminator
```

## Useful Links

https://github.com/antlr/grammars-v4?files=1&fbclid=IwAR2A0B7fyfSXUsVPH3yHq3-CBzeOP22rCdy8Jgyi-fWeHN1VrFOj4vQrFSc