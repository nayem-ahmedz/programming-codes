//check vowel or consonent using array
#include<stdio.h>
int main(){
    char a= getchar();
    char vowels[] = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    int notVowel = 0;
    for(int i=0; i<10; i++){
        if(a==vowels[i]){
            printf("%c is vowel", a);
            notVowel=1;
        }
    }
    if(notVowel==0){
        if(a>'a' && a<='z' || a>'A' && a<='Z')
            printf("%c is consonent", a);
        else
            printf("Invalid");
    }
}