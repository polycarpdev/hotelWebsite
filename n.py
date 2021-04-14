#Let the 3 subjects be math, IT and English



math = float(input("Enter marks for math: "))

IT= float(input("Enter marks for IT: "))

Eng = float(input("Enter marks for Eng: "))



total = math+IT+Eng

avr = (total/3)



print("The average is " + str(avr))

if avr >= 90 and avr<=100:

     print("Grade: A")

elif avr >=80 and avr<=89:

    print('Grade: B')

elif avr >=70 and avr <=79:

    print ('Grade: C')

elif avr >=60 and avr <=69:

   print ('Grade: D')

elif avr>= 50 and avr <= 59:

    print ('Grade: E')
    
else:
    print ('Your selection is ou tof range.')