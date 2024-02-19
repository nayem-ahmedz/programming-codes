//area of a circle
#include <stdio.h>
int main() {
    const double pi = 3.14159;
    double r;
    scanf("%lf", &r);
    double res = pi * r * r;
    printf("A=%.4lf\n", res);
 
    return 0;
}
