//to transform into upper or lower A=65, Z= 90 && a= 97, z= 122
#include<stdio.h>
char upperLower(char a){
    if(a>= 'A' && a<='Z'){
        return a+32;
    } else if(a>= 'a' && a<= 'z'){
        return a-32;
    } else{
        printf("invalida");
    }
}
int main(){
    char x;
    scanf("%c", &x);
    printf("%c", upperLower(x));
}