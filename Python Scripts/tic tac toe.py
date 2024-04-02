import random

board=[[1,2,3],
       [4,5,6],
       [7,8,9]
]
list_no_chosen = [1,2,3,4,5,6,7,8,9]
Winner = False
def print_board(board):
    print(" +-----+-----+-----+")
    print(" | ",board[0][0]," | ",board[0][1]," | ",board[0][2]," | ")
    print(" +-----+-----+-----+")
    print(" | ",board[1][0]," | ",board[1][1]," | ",board[1][2]," | ")
    print(" +-----+-----+-----+")
    print(" | ",board[2][0]," | ",board[2][1]," | ",board[2][2]," | ")
    print(" +-----+-----+-----+")

def input_filter():
    global Gamerunning
    num_entered = input("Ingrese el número: ")
    if num_entered.isnumeric():
        if int(num_entered) in list_no_chosen:
            num_entered = int(num_entered)
            return num_entered
        else:
            return None
    elif num_entered == "cancelar":
        print("Gracias por jugar!!")
        Gamerunning = False
        return num_entered
    else:
        print("No mames pon algo que sirva")
        return None



def num(num_entered):
    if num_entered == 1:
        board[0][0]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(1)
    elif num_entered == 2:
        board[0][1]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(2)
    elif num_entered == 3:
        board[0][2]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(3)
    elif num_entered == 4:
        board[1][0]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(4)
    elif num_entered == 5:
        board[1][1]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(5)
    elif num_entered == 6:
        board[1][2]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(6)
    elif num_entered == 7:
        board[2][0]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(7)
    elif num_entered == 8:
        board[2][1]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(8)
    elif num_entered == 9:
        board[2][2]="O"
        if num_entered in list_no_chosen:
            list_no_chosen.remove(9)
    
def machine_turn():
    aleatory_number = random.choice(list_no_chosen)
    if aleatory_number == 1:
        board[0][0]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(1)
    elif aleatory_number == 2:
        board[0][1]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(2)
        
    elif aleatory_number == 3:
        board[0][2]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(3)
    elif aleatory_number == 4:
        board[1][0]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(4)
    elif aleatory_number == 5:
        board[1][1]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(5)
    elif aleatory_number == 6:
        board[1][2]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(6)
    elif aleatory_number == 7:
        if aleatory_number in list_no_chosen:
            board[2][0]="X"
        list_no_chosen.remove(7)
    elif aleatory_number == 8:
        board[2][1]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(8)
    elif aleatory_number == 9:
        board[2][2]="X"
        if aleatory_number in list_no_chosen:
            list_no_chosen.remove(9)

def CheckVertical(board):
    global Winner
    if board[0][0] ==  board [1][0] == board[2][0]:
        Winner = board[1][0]
        return True
    if board[0][1] ==  board [1][1] == board[2][1]:
        Winner = board[1][1]
        return True
    if board[0][2] ==  board [1][2] == board[2][2]:
        Winner = board[1][2]
        return True
    
def CheckHorizontal(board):
    global Winner
    if board[0][0] ==  board [0][1] == board[0][2]:
        Winner = board[0][1]
        return True
    if board[1][0] ==  board [1][1] == board[1][2]:
        Winner = board[1][1]
        return True
    if board[2][0] ==  board [2][1] == board[2][2]:
        Winner = board[2][1]
        return True

def CheckDiagonal(board):
    global Winner
    if board[0][0] ==  board [1][1] == board[2][2]:
        Winner = board[1][1]
        return True
    if board[2][0] ==  board [1][1] == board[0][2]:
        Winner = board[1][1]
        return True

Gamerunning = True

def Check_Victory():
    global Gamerunning
    if CheckDiagonal(board) or CheckHorizontal(board) or CheckVertical(board):
        print(f"El ganador es: {Winner}")
        Gamerunning = False

print_board(board)
while Gamerunning:
    num(input_filter())
    machine_turn()
    print_board(board)
    Check_Victory()