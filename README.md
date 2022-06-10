# Recursion Challenge

A Recursive function is a function that calls itself.  People use it to take a big problem and continuously break it down into smaller problems (Divde and Conquer). This process of feeding into itself continues until there is the desired answer (_sometimes called the base case_) and the whole chain unwinds.

From the [Wikipedia entry on Divide and Conquer Algorithms](http://en.wikipedia.org/wiki/Divide_and_conquer_algorithm):

> In computer science, divide and conquer (D&C) is an important algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same (or related) type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.

Recursion has a time and place in programming, but the fact of the matter is that any problem you can solve recursively you can also iteratively. In real life, you probably won't end up using recursion all that often, but sometimes recursion can lead to code that reads much cleaner than a giant 100-line method.

## Things to think about
* Why is recursion a useful technique for solving a big problem?
* What are the limitations of using recursive solutions?
* What types of problems are more suited for simple loops than recursion?
* What is meant by "recursive depth?"
* What is a "stack overflow" (the concept, not the website)?
* Why is that relevant to a recursive problem?

## Challenges
We have executed several exercises iteratively last week. Today we are going to revisit some of those exercises and rewrite them recursively.

Implement the following exercises recursively:

1. Factorial
# Factorial Challenge 

In this exercise you are going to create a function that takes a number parameter and returns the factorial of it.

Factorial has a very specific definition. Learn more [here](https://en.wikipedia.org/wiki/Factorial#Definition). As an overview though, a factorial is the result of multiplying a sequence of descending numbers down to 0. Factorials are only defined for non-negative integer numbers. This definition includes zero. Though 0! is equal to 1, so treat it as an edge case. 

# Example

```python
factorial(4) # => 24 (4 * 3 * 2 * 1)
```
2. Palindrome
# Palindrome Challenge

## What is a Palindrome?

According to wikipedia, "A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward, such as madam or kayak."

## Premise

With the definition in mind, we are going to create a program that can detect if a word is a Palindrome.

* Your method should take in a word as a parameter and determine if the word is a palindrome. In both scenarios (true or false), it should respond accordingly.
* Your palindrome should be able to handle both integers and strings.

## Test Your Code

Remember. Red, Green, Refactor. You should start this exercise by running the test spec, palindrome_spec.py (```python palindrome_spec.py```).

## Challenge Yourself

* Allow your palindrome checker to check against palindromic sentences such as, "Sore was I ere I saw Eros." and "A man, a plan, a canal -- Panama"

3. 99 bottles
# 99 Bottles

Write a program that can print the song "99 Bottles of Beer".

## The Song

```
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
...
Take one down and pass it around, 91 bottles of beer on the wall.
91 bottles of beer on the wall, 91 bottles of beer.
Take one down and pass it around, 90 bottles of beer on the wall.
...
...
...
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
```

## Considerations
* Take note of how the 'bottles' turns to 'bottle' at the right time
* You can certainly use `while`, `for`, `forEach`, and various other built in methods

## Challenge Yourself
* Make your code able to take in and account for any bottle amount
* Refactor your code so it doesn't use any loops or iteration whatsoever

4. Roman Numerals
# Roman Numerals

## Part 0: Pseudocode!

We always want to encourage you to pseudocode your "gameplan" for any challenge before actually writing code. Note that we won't mention writing psuedocode all the time, but it's good practice to implement (especially for new coders) when tackling challenges. Here's an example of how one might pseudocode for this challenge (again, don't expect us to do this for you for all challenges!). Note that CAPITALIZED items in the pseucode are meant to be placeholders for items to implement, not actual style of methods/variables). 

```Python
# 1. Write a method TO_ROMAN, TO_ROMAN takes in INPUT_NUMBER (an arabic number)
# 2. Create a OUTPUT string, set to ''
# 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
# 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
# 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
# 6. If EVENLY_DIVISIBLE_TIMES >= 1
  # 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
  # 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
# 7. Return OUTPUT
```


## Part 1: Lazy Roman Numerals

Given a number in today's numbers, (Arabic Numeral), return its equivalent in Roman Numerals in the lazy way. Lazy Roman Numerals is where Roman Numerals are added together (9 is `VIIII`, 4 is `IIII`). Here are Roman Numerals with their Arabic Numeral counterparts:

```
I -> 1
V -> 5
X -> 10
L -> 50
C -> 100
D -> 500
M -> 1000
```


## Part 2: Modern Roman Numerals

If a smaller number appears before a larger number, you must subtract the smaller one. Here's a list for you:

```
IV -> 4
IX -> 9
XIV -> 14
XLIV -> 44
CMXLIV -> 944
```

### Sample output:
```
to_roman(4) # 'IV'
to_roman(944) # 'CMXLIV'
to_roman(150) # CL
```

### Hint: Consider the data structure(s) that can be used to store numerical values, and how it can relate to string representations. Break the problem down... how many combinations are there really to consider?


#### DO NOT concern yourself with very large numbers. Your algorithm should keep appending 'M' for each thousand. (Numbers over 3000 have different numerical representations)
