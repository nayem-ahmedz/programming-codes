#include<stdio.h>
int main(){
    int row, col, i, j;
    printf("Enter the size of row and column : \n");
    scanf("%d %d", &row, &col);
    int ar[row][col];
    for(i=1; i<=row; i++){
        for(j=1; j<=col; j++){
            printf("Row %d & Column %d value : ", i, j);
            scanf("%d", &ar[i][j]);
        }
    }
    printf("\nResulted Matrix is\n");
    printf("-------------------\n");
    for(i=1; i<=row; i++){
        for(j=1; j<=col; j++){
            printf("%d ", ar[i][j]);
        }
        printf("\n");
    }
}
