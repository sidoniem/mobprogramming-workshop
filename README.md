# mobprogramming-workshop

A kata project to practice mob programming

## Use mob tool

Install mob tool from [Mob.sh](https://mob.sh/)
```curl -sL install.mob.sh | sudo sh```

Example of how using mob tool : 

```
    # Carola
    main $ mob start
    mob/main $ echo "hello" > work.txt
    mob/main $ mob next

    # Maria
    main $ mob start
    mob/main $ cat work.txt # shows "hello"
    mob/main $ echo " world" >> work.txt
    mob/main $ mob next

    # Carola
    mob/main $ mob start
    mob/main $ cat work.txt # shows "hello world"
    mob/main $ echo "!" >> work.txt
    mob/main $ mob done
    main $ git commit -m "create greeting file"
    main $ git push
```


## Try mobprogramming on the coffee machine kata

The entire kata is described [here](https://simcap.github.io/coffeemachine/)

### Project
In this Coffe Machine Project, your task is to implement the logic (starting from a simple class) that translates orders from customers of the coffee machine to the drink maker. Your code will use the drink maker protocol to send commands to the drink maker.


### First Iteration : Making Drinks
The coffee machine can serves 3 type of drinks: tea, coffee, chocolate.
The drink maker receives string commands from your code to make the drinks.
Examples :
```
"T:1:0" (Drink maker makes 1 tea with 1 sugar and a stick)
```
```
"H::" (Drink maker makes 1 chocolate with no sugar - 
				and therefore no stick)
```
```
"M:message-content" (Drink maker forwards any message received
				onto the coffee machine interface 
				for the customer to see)
```
```
"C:2:0" (Drink maker makes 1 coffee with 2 sugars and a stick)
```

### Second Iteration : Going into business
The coffee machine is not free anymore! One tea is 0,4 euro, a coffee is 0,6 euro, a chocolate is 0,5 euro.
The drink maker will now only make a drink if enough money is given for it.

The drink maker should make the drinks only if the correct amount of money is given
If not enough money is provided, we want to send a message to the drink maker. The message should contains at least the amount of money missing.
You don't need to worry if there is too much money inserted. Just make sure, the minimum amount of money is set.

### Third iteration - Extra hot
The machine has been upgraded and the drink maker is now able to make orange juice and to deliver extra hot drinks. 
You have to update your code to send the correct messages to the drink maker so that users can have orange juices or extra hot drinks

```
"O::" (Drink maker will make one orange juice)
```
```
"Ch::" (Drink maker will make an extra hot coffee with no sugar)
```
```
"Hh:1:0" (Drink maker will make an extra hot chocolate with one sugar and a stick)
```
```
"Th:2:0" (The drink maker will make an extra hot tea with two sugar and a stick)
```