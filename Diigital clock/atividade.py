#janela de cor vermelha
#icone de game
#Janela com o nome

from tkinter import*
janela = Tk()
janela.title("Huber Yoshito Tsuchida")
janela.iconbitmap('Controle.ico')
janela['bg']=('#fc0303')
etiqueta = Label(janela, text = "Olá professor!!!")
etiqueta.pack()
janela.geometry('550x400+50+50')
janela.mainloop()