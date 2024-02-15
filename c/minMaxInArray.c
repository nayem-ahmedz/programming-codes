//find min/max in a array
#include<stdio.h>
int main(){
    int ar[] = {3, 5, 3, 4, 7};
    int max= ar[0], min = ar[0], i;
    for(i=0; i<5; i++){
        if(ar[i] > max){
            max= ar[i];
        }
        if(ar[i] < min){
            min= ar[i];
        }
    }
    printf("%d is max, %d is min", max, min);
}
