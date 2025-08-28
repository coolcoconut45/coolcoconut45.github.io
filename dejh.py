running = True
if running == True :
    import random
    numb1 = random.randint(0, 10)
    numb2 = random.randint(0, 10)
    print(str(numb1) + " + " + str(numb2))
    de = numb1 + numb2
    oad = int(input())
    if oad == de :
        print("Good!")
    else :
        print("bad")