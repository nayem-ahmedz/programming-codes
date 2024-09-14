#include<stdio.h>
#include<string.h>
struct object{
    int id;
    char letter;
    char name[20];
};
int main(){
    struct object value1 = {2, 'A', "Text"};
    value1.letter = 'W';
    strcpy(value1.name, "Table"); //use this method to update/insert string ( which is actually array in c)
    printf("%d %c %s\n", value1.id, value1.letter, value1.name);
}