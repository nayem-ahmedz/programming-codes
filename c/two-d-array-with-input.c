//2d array
#include<stdio.h>
int main(){
    int i, j, row, col;
    scanf("%d %d", &row, &col);
    printf("now input values\n");
    int ar[row][col];
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            scanf("%d", &ar[i][j]);
        }
    }
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            printf("%d ", ar[i][j]);
        }
        printf("\n");
    }
}