from _tkinter import *
janela=Tk()
janela.geometry('500x400+50+200')

#  criação do canva 
tela= Canvas (janela, height=500, bg='white', 
            width=500, )
     
tela.pack()

# criação de um retangulo 
retan=tela.create_rectangle(0,0,400,300,fill='green')

# criação do polígono
poligono= tela.create_polygon(0,150,200,0,400,150,200,300, fill='yellow')

#circulo
circulo=tela.create_oval(100,50,300,250, fill='blue')

# criaçao da linha 
linha=tela.create_line(100,150,300,150, width=15, fill='white')

# Texto 
texto=tela.create_text(200,150, fill='black', text= 'Ordem e Progresso')

janela.mainloop()