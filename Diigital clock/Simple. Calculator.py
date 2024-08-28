choice = ""
while (1):
    print("+ for addition")
    print ("- for subtraction")
    print ("* for multiplication")
    print ("/ for division")
    print ( "e for exit")

    choice = input("Enter choice:")

if choice == 'e':
    print("Thanks for using the calculator")
    break

if choice == '+' or choice == '-' or choice '*' or choice == '/':
x = input ("Enter first number")
y = input ("Enter second number")
exp = x + choice + y
sln = eval (exp)
print (sln)

     else:

    print("Invalid Choice")
    