//largest and second largest
#include<stdio.h>
#include<stdbool.h>
int main(){
    int i, l, l2;
    int ar[] = {2, 1, 13, 3, 2, 22, 5, 9, 3, 12, 8};
    l= ar[0];
    l2= ar[0];
    for(i=0; i<11; i++){
        if(ar[i]>l){
            l2= l;
            l= ar[i];
        }
        else if(ar[i]<l && ar[i]>l2){
            l2=ar[i];
        }
    }
    printf("%d is largest, and %d is second largest", l, l2);
}
