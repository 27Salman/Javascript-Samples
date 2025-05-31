//Average Salary Excluding the Minimum and Maximum Salary

var average = function(salary) {
    let avrg = 0;
    let n = salary.length;
    salary.sort((a,b)=>a-b);
    for(let i=1;i<n-1;i++){
        avrg = avrg+salary[i];
    }
    avrg = avrg/(n-2);
    return avrg;
};