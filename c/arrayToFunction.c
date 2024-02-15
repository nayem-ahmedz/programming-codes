//send array to a function
#include<stdio.h>
void display(int sizE, int ar[]){
    for(int i=0; i<5; i++){
        printf("%d, ", ar[i]);
    }
}
int main(){
    int ar[5];
    int sizE= 5;
    for(int i=0; i<5; i++){
        scanf("%d", &ar[i]);
    }
    display(sizE, ar);
}
