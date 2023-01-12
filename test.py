from tkinter import *
from math import * 
root = Tk()

e = Entry(root, width=30, borderwidth=5)
e.grid(column=0, row=0, columnspan=3)


def click(num):
    e.insert(END, str(num))

def btn_clear():
    e.delete(0, END)

num = 0
num2 = 0
calc = None
def btn_add():
    global num, calc
    calc = "add"
    num += float(e.get())
    e.delete(0, END)

def btn_odejmowanie():
    global num, calc
    calc = "odej"
    num += float(e.get())
    e.delete(0, END)

def btn_dzielenie():
    global num, calc
    calc = "dzie"
    num += float(e.get())
    e.delete(0, END)

def btn_mnozenie():
    global num, calc
    calc = "mnoz"
    num += float(e.get())
    e.delete(0, END)

    
def clean():
    global num
    num = 0
    e.delete(0,END)

def potegowanie():
    global num, calc
    calc="potega"
    num += float(e.get())
    e.delete(0, END)

def equal():
    global num, calc
    if calc == None:
        return
    if calc == "add":
        num2 = int(e.get())
        e.delete(0, END)
        e.insert(0, str(num + num2))
        num = 0
    elif calc == "odej":
        num2 = int(e.get())
        e.delete(0, END)
        e.insert(0, str(num - num2))
        num = 0
    elif calc == "dzie":
        num2 = int(e.get())
        e.delete(0, END)
        e.insert(0, str(num / num2))
        num = 0
    elif calc == "mnoz":
        num2 = int(e.get())
        e.delete(0, END)
        e.insert(0, str(num * num2))
        num = 0
    elif calc=="potega":
        num2 = int(e.get())
        e.delete(0, END)
        e.insert(0, str(pow(num, num2)))
        num = 0

btn1 = Button(text="1", padx=40, pady=40, command=lambda:click(1))
btn2 = Button(text="2", padx=40, pady=40, command=lambda:click(2))
btn3 = Button(text="3", padx=40, pady=40, command=lambda:click(3))


btn4 = Button(text="4", padx=40, pady=40, command=lambda:click(4))
btn5 = Button(text="5", padx=40, pady=40, command=lambda:click(5))
btn6 = Button(text="6", padx=40, pady=40, command=lambda:click(6))


btn7 = Button(text="7", padx=40, pady=40, command=lambda:click(7))
btn8 = Button(text="8", padx=40, pady=40, command=lambda:click(8))
btn9 = Button(text="9", padx=40, pady=40, command=lambda:click(9))


btn0 = Button(text="0", padx=40, pady=40, command=lambda:click(0))
btnclear = Button(text="C", padx=40, pady=40, command=clean)
btnadd = Button(text="+", padx=40, pady=40, command=btn_add)
btnodejmowanie = Button(text="-", padx=40, pady=40, command=btn_odejmowanie)
btndzielenie = Button(text="/", padx=40, pady=40, command=btn_dzielenie)
btnmnozenie = Button(text="*", padx=40, pady=40, command=btn_mnozenie)

btn1.grid(column=0, row=1)
btn2.grid(column=1, row=1)
btn3.grid(column=2, row=1)

btn4.grid(column=0, row=2)
btn5.grid(column=1, row=2)
btn6.grid(column=2, row=2)

btn7.grid(column=0, row=3)
btn8.grid(column=1, row=3)
btn9.grid(column=2, row=3)

btn0.grid(column=0, row=4)

btn_potega=Button(text="^", padx=40, pady=40, command=potegowanie)
btn_potega.grid( column=0,row=5, columnspan=5, sticky="WE")

btnclear.grid(column=1, row=4)
btnadd.grid(column=2, row=4)



btn_equal = Button(text="=", padx=40, pady=40, command=equal)
btn_equal.grid(column=4, row=4)

btnodejmowanie.grid(column=4, row=1)
btndzielenie.grid(column=4, row=2)
btnmnozenie.grid(column=4, row=3)

root.mainloop()
