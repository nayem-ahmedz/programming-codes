#include<stdio.h>
int main(){
    char name[100];
    gets(name);

    printf("The length of %s is : %d\n", name, findLength(name));
}

int findLength(char a[]){
    int count;
    for(int i = 0; a[i]!='\0'; i++){
        count++;
    }
    return count;
}
