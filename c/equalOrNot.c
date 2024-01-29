//finding weather the given two numbers are equal or not
#include<stdio.h>
int main()
{
    int a, b;
    while(1)
    {
        printf("Input Two Numbers\n");
        scanf("%d %d", &a, &b);
        if(a==b)
            printf("Both are Equal\n\n");
        else
            printf("Not Same\n\n");
    }
}
