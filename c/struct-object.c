//usages of struct as a template maker (c++/java's object)
#include<stdio.h>
struct Car{
    int year;
    char name[20];
    char model[20];
};
int main(){
    struct Car car1 = {2001, "Rubbish car", "Rab-101"};
    struct Car car2 = {2005, "Turabish car", "Truk-505"};

    struct Car car3 = car1;

    printf("Car 1 : year %d, name %s, model %s\n", car1.year, car1.name, car1.model);
    printf("Car 2 : year %d, name %s, model %s\n", car2.year, car2.name, car2.model);
    printf("Car 3 : year %d, name %s, model %s\n", car3.year, car3.name, car3.model);
}