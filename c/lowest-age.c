#include<stdio.h>
int main(){
    int ages[] = {4, 2, 3, 1, 5, 6};
    int len = sizeof(ages)/sizeof(ages[0]);
    int i, low= ages[0];
    for(i=0; i<len; i++){
        if(low>ages[i]){
            low= ages[i];
        }
    }
    printf("%d", low);
}
