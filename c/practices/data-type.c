#include<stdio.h>
void cf_typeof(int a);
int main(){
    //printf("Hello World");
    //4 data types
    int a = 5; //short int = 2, long int = 4, long long = 8 bits
    float b = 2.5;
    double c = 4.56;
    char d = 'a';

    printf("%d\n", a);
    printf("%f\n", b);
    printf("%lf\n", c);
    printf("%c\n", d);

    //printf("%s", typeof(a)); //there are no build in function to check data type, but
    printf("Size of variables :\nint: %d\n", sizeof(a));
    printf("float : %zu\n", sizeof(b));
    printf("double : %zu\n", sizeof(c));
    printf("char : %zu\n", sizeof(d));

    cf_typeof(a); //custom function to print data type :: only int
}

void cf_typeof(int a){
    int size = sizeof(a);
    if(size==4)
        printf("Int\n");
    else
        printf("others\n");
}
