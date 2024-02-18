//pass by ref
#include<stdio.h>
void modify(int *a){
    *a= *a+2;  //pass by reference
}
int main(){
    int b= 5;
    printf("%d\n", b);
    modify(&b);
    printf("%d\n", b);
}
