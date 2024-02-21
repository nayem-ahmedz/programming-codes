//Salary
#include <stdio.h>
int main() {
    int number, hours;
    float salary;
    scanf("%d%d %f", &number, &hours, &salary);
    float Salary = hours*salary;
    
    printf("NUMBER = %d\n", number);
    printf("SALARY = U$ %.2f\n", Salary);
 
    return 0;
}
