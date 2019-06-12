# Drawson Language Documentation

The drawson language is quite a simple one. There are just a few instructions which makes it quite simple to get started.

## Core Statements

### `draw`

**draw** statement is used to draw an unfilled shape. There are 3 legal shapes for this directive:

- `circle` - draws unfilled circle on canvas. Takes in 3 arithmetic arguments separated by space, first two are coordinates of center of the circle, 3rd one is the radius of the circle.
- `rect` - draws unfilled rectangle on canvas. Takes in 4 arguments. First two are coordinates of top left corner of rectangle, 3rd is width, and 4th is height of the rectangle.
- `line` - draws line. Takes in 4 arguments coordinates of first pint of the line, and then coordinates of end point of rhe line.

### `fill`

**fill** statement is used to draw filled shape. There are 2 legal shapes for fill statement:

- `circle` - draws filled circle on canvas. Takes in 3 arithmetic arguments separated by space, first two are coordinates of center of the circle, 3rd one is the radius of the circle.
- `rect` - draws unfilled rectangle on canvas. Takes in 4 arithmetic arguments. First two are coordinates of top left corner of rectangle, 3rd is width, and 4th is height of the rectangle.

### `set`

**set** statement is used to set context variables value. There are 3 context variables that can be set:

- `thickness` this variable requires arithmetic value (basically a number, or expression which outcome is a number), it is used to determine thickness of unfilled shapes borders.
- `paint` is a variable that defines color of fill of fillable shapes. Requires hex color variable like `#FFFFFF`
- `color` is a variable that defines color of border of unfillable shapes. Requires hex color variable like `#000000`

### `let`

**let** is used to define global arithmetic variables.
Variables can be delcared, assigned and declared with direct assignment. When youd eclare a variable without assignment then underneath our drawing engine will receive null somewhere.

examples:

```
let a = 12;
let b;
b = 2+2 *2;
b = 22;
```

### `for`

**for** is a loop keyword. It enables developer to define a loop on a given range of numbers that is growing by 1. eg range 1..5 is actually equivalent to looping on an array of `[1,2,3,4,5]`.

The syntax is relatively simple, `for [iteratingVarName] in [range] [blockOfCode]`
Example to grasp what it actually is:

```
for element in 10 100 {
    draw rect 0 0 10 10;
    fill rect 0 0 10 10;
}
```

### `while`

**while** is another loop type here we actually can use boolean expressions (there are no if statements yet but we may implement).

Syntax is simple as well, `while ([booleanExpression]) [blockOfCode]`

Example of this syntax:

```
let a = 0;
while (a < 20) {
    draw line 0 0 a a;
    a = a + 1;
}
```

Just don't do infinite loops at this time, cause i didn't implement any detectors of infinite loops, might do that later though, but right now you are going to have a bad time, chrome will probably run out of memory.

## Other atomic Statements

### Arithmetics

Arithmetic value which was mentioned before is an expression that represents an integer, there are no floating point values.

To get an expression that resolves to integer there are n possibilities:

- value literals like `123`;
- variable that holds an integer like `let a = 12`, then when you reference `a` it resolves to value `12`
- arithmetic using above. We support 4 operations +, -, \*, /. You know what they mean. There actually is also a support for correct order of arithmetics including parentheses, and negative values (but for negative values, because we separate arguments with spaces, you need to wrap them in parentheses).

### Conditionals, bool algebra

We support this for the sake of while loops.
There are 3 operations:

- `&&` and opoerator
- `||` or operators
- `!` operator

Those operators require some values that resolve to boolean `true` or `false`.
Following resolve to them:

- literal like `true` or `false`
- relative comparing operator on arithmetic values, exmplained below

### Relative operators

In order to obtain some boolean value you can compare arithmetic values.
There are 6 of operators here:

- `<` less than
- `>` greater than
- `<=` less or equal than
- `>=` greater or equal than
- `==` equal to
- `!=` not equal to
