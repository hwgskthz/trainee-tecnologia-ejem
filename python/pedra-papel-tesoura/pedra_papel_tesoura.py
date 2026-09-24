import random

def jogada(jogadaUsuario, jogadaComputador):
    
    if jogadaUsuario == "pedra" and jogadaComputador == "tesoura":
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nVOCÊ GANHOU!")
    elif jogadaUsuario == "papel" and jogadaComputador == "pedra":
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nVOCÊ GANHOU!")
    elif jogadaUsuario == "tesoura" and jogadaComputador == "papel":
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nVOCÊ GANHOU!")
    elif jogadaUsuario == "pedra" and jogadaComputador == "papel":
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nO COMPUTADOR VENCEU!")
    elif jogadaUsuario == "papel" and jogadaComputador == "tesoura":
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nO COMPUTADOR VENCEU!")
    elif jogadaUsuario == "tesoura" and jogadaComputador == "pedra":
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nO COMPUTADOR VENCEU!")
    else:
        print(f"\nO usuário escolheu: {jogadaUsuario}\nO computador escolheu: {jogadaComputador}\nEMPATE!")


pedraPapelOuTesoura = ["pedra", "papel", "tesoura"]
print("=== JOGO PEDRA, PAPEL OU TESOURA ===\n")

# bloco de verificação caso a entrada não seja o que esperamos
while True:
    escolhaUsuario = input("Digite a sua escolha: ").lower() # .lower() -> usado pra deixar todas as letras minúsculas
    if escolhaUsuario not in pedraPapelOuTesoura:
        print("\nEscolha uma opção válida!\n")
        continue
    else:
        break
    
escolhaComputador = random.choice(pedraPapelOuTesoura)

jogada(escolhaUsuario, escolhaComputador)