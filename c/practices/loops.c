#include<stdio.h>
int main(){
    int i = 0;

    //for loop
    printf("For Loop\n");
    for(i=0; i<10; i++){
        printf("%d, ", i);
    }

    //while loop
    printf("\nWhile Loop\n");
    int j = 0;
    while(j<10){
        printf("%d, ", j);
        j++;
    }

    //do-while loop
    int k = 0;
    printf("\nDo While Loop\n");
    do{
        printf("%d, ", k);
        k++;
    }while(k<10);
}
