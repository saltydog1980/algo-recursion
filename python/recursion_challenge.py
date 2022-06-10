def factorial(num):
	if num == 1:
		return 1
	else:
		return num * factorial(num - 1)

def palindrome(string):
	if len(string) <= 1:
		return True
	else:
		if string[0] == string[-1]:
			return palindrome(string[1:len(string)-1])
		else:
			return False


def bottles(num):
		if num == 2:
			return print("""2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.""")
		else:
			print(f"""{num} bottles of beer on the wall, {num} bottles of beer.
Take one down and pass it around, {num-1} bottles of beer on the wall.""")
		bottles(num-1)


def roman_num(num):
	roman_keys = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 }
	result = ""
	if num == 0:
		return result
	else:
		for key in roman_keys:
			if num >= roman_keys[key]:
				return result + key + roman_num(num-roman_keys[key])
