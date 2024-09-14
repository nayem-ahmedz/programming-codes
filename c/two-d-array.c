#include<stdio.h>
int main(){
    int ar[2][3]= { {1,2,3}, {2,3,4} };
    int i, j;
    for(i=0;i<2;i++){
        for(j=0;j<3;j++){
            printf("%d ", ar[i][j]);
        }
        printf("\n");
    }
}