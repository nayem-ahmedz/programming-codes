//function example
#include<stdio.h>
int sum(int a, int b){
    //a, b are parameters
    return a+b;
}
int main(){
    int i, j;
    scanf("%d%d", &i, &j);
    int res = sum(i, j); //i, j are arguments/parameters
    printf("%d\n", res);
}
