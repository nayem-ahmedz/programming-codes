// 1014 Consumption

#include <stdio.h>
int main(){
    int distance;
    float fuel, consumption;
    scanf("%d %f", &distance, &fuel);
    consumption = (float)distance / fuel;
    printf("%.3f km/l\n", consumption);
    
    return 0;
}