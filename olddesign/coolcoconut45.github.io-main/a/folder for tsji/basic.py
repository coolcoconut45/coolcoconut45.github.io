#########################
#rizz
####/n$$$###############3#

TT_INT = 'TT_INT'
TT_FLOAT = 'FLOAT'
TT_PLUS = 'PLUS'
TT_MIN = 'MINUS'
TT_MUL = 'MUL'
TT_DIV = 'DIV'
TT_LPAR = 'LPAREN'
TT_RPAR = 'RPAREN'







class Token:
    def __init__(self, type_, value) :
        self.type = type_
        self.value = value

    def __repr__(self) :
        if self.value:
            return f'{self.type}:{self.value}'
        return f'{self.type}'
    

class Lexer:
    def _init_(self, text) :
        